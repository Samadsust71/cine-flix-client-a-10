import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

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

    fetch("https://cine-verse-server.vercel.app/favourite_movies", {
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
        fetch(`https://cine-verse-server.vercel.app/movies/${id}`, {
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
      <div className="card w-full bg-base-100 dark:bg-transparent dark:text-white lg:flex-row lg:items-center">
        <figure className="lg:w-1/2">
          <img
            src={poster}
            alt={movieTitle}
            className="w-full h-[400px] object-cover shadow-lg rounded-lg"
          />
        </figure>
       <div>
       <div className="card-body space-y-4">
          <h3 className="card-title text-2xl lg:text-4xl font-bold border-l-4 border-[#FFB347] pl-2">
            {movieTitle}
          </h3>
          <div className="flex items-center">
          <div className="text-sm flex items-center gap-1 flex-wrap"> <span className="font-semibold">Genre:</span> {genres.map(genre=><div key={genre} className="badge badge-warning badge-outline">{genre}</div>)}</div>
          <p className="text-sm flex items-center justify-center">
            <Rating
              initialValue={ratings}
              readonly
              size={20}
              iconsCount={5}
              allowFraction
            />
           <span className="ml-2">({ratings})</span>
          </p>
          </div>
          <div className="border-b-2"></div>
          <p className="text-sm ">{summary}</p>
          <p className="text-sm flex items-center gap-2"><span className="text-green-500 text-xl"><MdOutlineAccessTime /></span> <span>Duration</span> <span>: {duration} min</span></p>
          <p className="text-sm flex items-center gap-2"><span className="text-blue-500 text-xl"><FaCalendarAlt /></span> <span>Realease year</span> <span>: {releaseYear}</span></p>
          
         
          <div className="border-b-2"></div>

          <div className="card-actions items-center justify-between mt-4">
           <div className="flex lg:items-center gap-2 flex-col lg:flex-row">
           <button
              onClick={handleAddToFavorites}
              className={`px-4 py-2 text-white font-semibold bg-[#FFB347] rounded-lg`}
             
            >
             + Add to Favorite
            </button>
            <button
            onClick={()=>navigate(`/updateMovie/${_id}`)}
              className="px-4 py-2 text-white font-semibold  rounded-lg bg-green-600 "
            >
               Update Movie
            </button>
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
