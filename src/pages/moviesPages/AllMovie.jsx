import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../../components/moviesComponents/MovieCard";
import { FaSearch } from "react-icons/fa";

const AllMovie = () => {
  const loadedMovies = useLoaderData();
  const [movies , setMovies] = useState(loadedMovies)
  const [search, setSearch] = useState("")
  useEffect(()=>{
    fetch(`http://localhost:5000/movie?search=${search}`)
    .then(res=>res.json())
    .then(data=>{
      setMovies(data)
    })
  },[search])
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        All Movies
      </h2>
      <div className="flex flex-col justify-center items-center my-10">
        <label className="input input-bordered flex items-center gap-2">
          <input onChange={(e)=>setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
          <FaSearch/>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
