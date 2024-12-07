import React from "react";
import {  IoTrashBin } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
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
              fetch(`https://cine-verse-server.vercel.app/favourite_movies/${id}`, {
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
      <button onClick={()=>handleDelete(_id)} className="flex items-center text-sm text-white px-3 py-2 bg-red-500 rounded-lg">
            <span >Delete Favorite</span>
          <IoTrashBin/>
          </button>
      </div>
    </div>
  );
};

export default FavMovieCard;
