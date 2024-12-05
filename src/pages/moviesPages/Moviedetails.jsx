import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoHeart, IoTrashBin } from "react-icons/io5";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Moviedetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const { user, setLoading } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    _id,
    movieTitle,
    poster,
    genres,
    duration,
    releaseYear,
    summary,
    ratings,
  } = movie || {};


  const handleAddToFavorites = () => {
    const email = user?.email;
    const favouriteMovieData = {
      movieTitle,
      poster,
      genres,
      duration,
      releaseYear,
      ratings,
      email,
    };

    fetch("http://localhost:5000/favourite_movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favouriteMovieData),
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.insertedId) {
        toast.success("Added to the favourite movie list")
        setLoading(false)
        setIsFavorite(true);
      }
    })
    
   
  };

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
        fetch(`http://localhost:5000/movies/${_id}`, {
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
              navigate("/allmovies");
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={poster}
            alt={movieTitle}
            className="w-full h-[800px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-2xl font-semibold text-gray-800">
            {movieTitle}
          </h3>
          <p className="text-sm text-gray-600">Genre: {genres.join(", ")}</p>
          <p className="text-sm text-gray-600">Duration: {duration} mins</p>
          <p className="text-sm text-gray-600">Release Year: {releaseYear}</p>
          <p className="text-sm text-gray-600">Summary: {summary}</p>
          <p className="text-sm text-gray-600">
            Rating:{" "}
            <Rating
              initialValue={ratings}
              readonly
              size={20}
              iconsCount={5}
              allowFraction
            />
          </p>

          <div className="card-actions  mt-4">
            <button
              onClick={handleAddToFavorites}
              className={`btn btn-primary  flex items-center`}
             
            >
              <IoHeart className="mr-2" />{" "}
              Add to Favorite
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error flex items-center"
            >
              <IoTrashBin className="mr-2" /> Delete Movie
            </button>
            <Link
              to={`/updateMovie/${_id}`} 
              className="btn btn-success flex items-center"
            >
               Update Movie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
