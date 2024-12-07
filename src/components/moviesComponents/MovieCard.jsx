import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ movie }) => {
  const { _id, movieTitle, poster, genres, duration, releaseYear, ratings } =
    movie || {};
  return (
    <div className="w-full bg-base-100 dark:bg-[#20161F] shadow-xl dark:text-white p-6 rounded-lg flex flex-col space-y-6">
      <div>
        <img
          src={poster}
          alt={movieTitle}
          className="w-full h-72 object-cover rounded-xl"
        />
      </div>
      <div className="flex-grow font-medium space-y-4 my-4 flex flex-col">
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

        <h3 className="text-2xl font-semibold flex-grow">{movieTitle}</h3>
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
