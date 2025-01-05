import React from "react";
import { FaStar } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { _id, movieTitle, poster, genres, releaseYear, ratings } = movie || {};
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/movies/${_id}`)} className="w-full bg-base-200 dark:bg-[#1B262C] hover:shadow-xl dark:text-white p-6 rounded-lg flex flex-col space-y-6 cursor-pointer">
      <div>
        <img
          src={poster}
          alt={movieTitle}
          className="w-full h-52 object-cover rounded-xl"
        />
      </div>
      <div className="flex-grow font-medium space-y-4 my-4 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm gap-1">
            <span className="text-[#FFB347]">
              <FaStar />
            </span>
            <span>{ratings}</span>
          </div>
          <p className="text-sm">{releaseYear}</p>
        </div>

        <div className=" font-bold flex-grow">
          <h3 className="border-l-4 border-[#FFB347] pl-2">{movieTitle}</h3>
        </div>
      </div>
      <div className="mt-4">
        <Link
          to={`/movies/${_id}`}
          className="flex items-center text-[#FFB347] font-semibold w-fit"
        >
          <span>See Details</span> <IoArrowForward className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
