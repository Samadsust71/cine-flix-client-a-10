import React from "react";
import { FaStar } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";

const FavMovieCard = ({ movie, setFavMovies, favMovies }) => {
  const { _id, movieTitle, poster, genres, duration, releaseYear, ratings,summary } =
    movie || {};
  const handleDelete = (id) => {
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
              const remaining = favMovies.filter((movie) => movie._id !== id);
              setFavMovies(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="w-full bg-base-200 dark:bg-[#1B262C] shadow-xl dark:text-white p-6 rounded-lg flex flex-col space-y-6">
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
      <p>{summary}</p>
      <p className="text-sm">Duration: {duration} min</p>
    </div>
    <div className="mt-4">
    <button
          onClick={() => handleDelete(_id)}
          className="flex items-center text-sm text-red-500 px-3 py-2 bg-red-100 rounded-full"
        >
          <span>Delete </span>
          <IoTrashBin />
        </button>
    </div>
  </div>
  );
};

export default FavMovieCard;
