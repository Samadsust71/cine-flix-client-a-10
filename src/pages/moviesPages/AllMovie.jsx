import React, { useEffect, useState } from "react";
import MovieCard from "../../components/moviesComponents/MovieCard";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading";

const AllMovie = () => {
 
  useEffect(() => {
    window.scrollTo({
      top: 80,
      behavior: "smooth",
    });
  }, []);
  const axiosInstance = useAxios();
  const [search, setSearch] = useState("");
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["all-movies", search],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/movies?search=${search}`);
      return data;
    },
  });
  const handleReset = () => {
    setSearch("");
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 dark:text-white">
        All Movies
      </h2>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex p-1 overflow-hidden border  border-[#FFB347] rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-[#FFB347] focus-within:ring-[#FFB347]/80">
            <input
              className="px-6 py-2 outline-none  focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Movie name"
              aria-label="Enter movie name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#FFB347] rounded-md hover:bg-[#FFB347]/80 focus:bg-[#FFB347]/80 focus:outline-none">
              <FaSearch />
            </button>
          </div>
          <button
            className="text-white/90 font-bold btn bg-[#FFB347] hover:bg-[#FFB347]/80"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className=" my-10">
        {isLoading ? (
          <Loading />
        ) : movies && movies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center dark:text-white">No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovie;
