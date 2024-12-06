import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ movie }) => {
  const { _id, movieTitle, poster, genres, duration, releaseYear, ratings } =
    movie || {};
  return (
    <div className="card  w-full bg-base-100 dark:bg-transparent shadow-xl dark:text-white">
      <figure>
        <img
          src={poster}
          alt={movieTitle}
          className="w-full h-72 object-cover"
        />
      </figure>
      <div className="p-6 space-y-4 font-medium">
        <div className="flex justify-between items-center">
        <div className="flex items-center text-sm">
          <div
            style={{
              direction: "1tr",
              fontFamily: "sans-serif",
              touchAction: "none",
            }}
          >
            <Rating
              size={18}
              initialValue={ratings}
              allowFraction
              readonly={true}
            />
          </div>
        </div>
        <p className="text-sm">{releaseYear}</p>
        </div>
      <p className="text-sm text-[#FF6E6E]"> {genres.join(", ")}</p>
        <h3 className="card-title text-2xl font-semibold">
          {movieTitle}
        </h3>
        <p className="">Duration: {duration} min</p>
        <div className="card-actions">
          <Link to={`/movies/${_id}`} className="flex items-center px-4 py-2 text-white font-semibold bg-[#121C22] rounded-lg dark:bg-slate-900">
           <span>See Details</span> <IoArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
