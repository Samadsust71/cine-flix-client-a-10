import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    const {
        _id,
        movieTitle,
        poster,
        genres,
        duration,
        releaseYear,
        ratings,} = movie || {}
  return (
    <div
      className="card card-compact w-full bg-base-100 dark:bg-[#2E2E2E] shadow-xl"
    >
      <figure>
        <img
          src={poster}
          alt={movieTitle}
          className="w-full h-72 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-xl font-semibold text-gray-800 dark:text-white">
          {movieTitle}
        </h3>
        <p className="text-sm text-gray-600 dark:text-white">Duration: {duration} mins</p>
        <p className="text-sm text-gray-600 dark:text-white">
          Release Year: {releaseYear}
        </p>
        <div>
            <p>Genre:</p>
        <ul className="text-sm text-gray-600 list-disc list-inside dark:text-white">
            {
                genres.map(genre=><li key={genre}>{genre}</li>)
            }
        </ul>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">Rating: {ratings} ★</p>
        <div className="card-actions justify-end">
          <Link to={`/movies/${_id}`} className="btn btn-primary">
            See Details <IoArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
