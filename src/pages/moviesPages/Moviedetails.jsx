import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Moviedetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const { user, setLoading } = useContext(AuthContext);
  
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
        fetch(`http://localhost:5000/movies/${id}`, {
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
    <div className="max-w-5xl mx-auto my-10">
      <div className="card w-full bg-base-100 dark:bg-transparent dark:text-white shadow-lg rounded-lg">
        <figure className="">
          <img
            src={poster}
            alt={movieTitle}
            className="w-full h-[800px] object-cover"
          />
        </figure>
       <div>
       <div className="card-body space-y-4">
          <h3 className="card-title text-2xl lg:text-4xl font-semibold">
            {movieTitle}
          </h3>
          <div className="flex items-center">
          <p className="text-sm text-[#FF6E6E]">{genres.join(", ")}</p>
          <p className="text-sm flex items-center">
            <Rating
              initialValue={ratings}
              readonly
              size={20}
              iconsCount={5}
              allowFraction
            />
           <span>{ratings}</span>
          </p>
          </div>
          <div className="border-b-2"></div>
          <p className="text-sm ">{summary}</p>
          <p className="text-sm ">Duration: {duration} min</p>
          <p className="text-sm ">Release Year: {releaseYear}</p>
         
          <div className="border-b-2"></div>

          <div className="card-actions items-center justify-between mt-4">
           <div className="flex items-center gap-2">
           <button
              onClick={handleAddToFavorites}
              className={`px-4 py-2 text-white font-semibold bg-[#FFB347] rounded-lg`}
             
            >
             + Add to Favorite
            </button>
            <Link
              to={`/updateMovie/${_id}`} 
              className="px-4 py-2 text-white font-semibold bg-[#121C22] rounded-lg dark:bg-slate-900"
            >
               Update Movie
            </Link>
           </div>
            <div>
            <button
              onClick={() => handleDelete(_id)}
              className="px-4 py-2 text-white font-semibold bg-red-600 rounded-lg"
            >
              Delete
            </button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Moviedetails;
