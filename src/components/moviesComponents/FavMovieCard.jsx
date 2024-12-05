import React from "react";
import {  IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";


const FavMovieCard = ({movie ,setFavMovies,favMovies}) => {
    const {
        _id,
        movieTitle,
        poster,
        genres,
        duration,
        releaseYear,
        ratings,} = movie || {}

    const handleDelete =(id)=>{

        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/favourite_movies/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Movie has been deleted.",
                      icon: "success",
                    });
                    const remaining = favMovies.filter(movie=> movie._id !== id)
                   setFavMovies(remaining)
                  }
                });
            }
          });
    }

  return (
    <div
      className="card card-compact w-full bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={poster}
          alt={movieTitle}
          className="w-full h-72 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-xl font-semibold text-gray-800">
          {movieTitle}
        </h3>
        <p className="text-sm text-gray-600">Duration: {duration} mins</p>
        <p className="text-sm text-gray-600">
          Release Year: {releaseYear}
        </p>
        <div>
            <p>Genre:</p>
        <ul className="text-sm text-gray-600 list-disc list-inside">
            {
                genres.map(genre=><li key={genre}>{genre}</li>)
            }
        </ul>
        </div>
        <p className="text-sm text-gray-600">Rating: {ratings} ★</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleDelete(_id)} className="btn btn-primary">
          Delete Favorite <IoTrashBin className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavMovieCard;
