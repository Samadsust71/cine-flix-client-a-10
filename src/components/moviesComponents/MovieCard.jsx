import React from "react";
import { FaStar } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { _id, movieTitle, poster, genres, duration, releaseYear, ratings } =
    movie || {};
  return (
    <div className="w-full bg-base-100 dark:bg-[#1B262C] shadow-xl dark:text-white p-6 rounded-lg flex flex-col space-y-6">
      <div>
        <img
          src={poster}
          alt={movieTitle}
          className="w-full h-72 object-cover rounded-xl"
        />
      </div>
      <div className="flex-grow font-medium space-y-4 my-4 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm gap-1">
              <span className="text-[#FFB347]"><FaStar /></span>
              <span>{ratings}</span>
          </div>
          <p className="text-sm">{releaseYear}</p>
        </div>
        <div className="text-sm flex items-center gap-1 flex-wrap"> <span className="font-semibold">Genre:</span> {genres.map(genre=><div key={genre} className="badge badge-warning badge-outline">{genre}</div>)}</div>

        <div className=" font-bold flex-grow"><h3 className="border-l-4 border-[#FFB347] pl-2">{movieTitle}</h3></div>
        <p className="text-sm">Duration: {duration} min</p>
      </div>
      <div className="mt-4">
        <Link
          to={`/movies/${_id}`}
          className="flex items-center px-4 py-2 text-white font-semibold bg-[#212121] rounded-lg w-fit dark:bg-green-600"
        >
          <span>See Details</span> <IoArrowForward className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
