import React, {  useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import Select from "react-select";
import { AuthContext } from "../../provider/AuthProvider";

const AddMovie = () => {
  useEffect(() => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth', // Adds a smooth scroll effect
    });
  }, [])

  const genres = [
    { value: "Comedy", label: "Comedy" },
    { value: "Drama", label: "Drama" },
    { value: "Horror", label: "Horror" },
    { value: "Action", label: "Action" },
    { value: "Romance", label: "Romance" },
    { value: "Sci-Fi", label: "Sci-Fi" },
    { value: "Superhero", label: "Superhero" },
    { value: "Thriller", label: "Thriller" },
  ];
  const [rating, setRating] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const {user} = useContext(AuthContext)

  const releaseYears = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, i) => 2000 + i
  );

  // for ratingg
  const handleRating = (rate) => {
    setRating(rate); 
  };

  // for genre
  const handleGenreChange = (selectedGenre) => {
    setSelectedGenres(selectedGenre);
    
  };
 
  // form
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user?.email;
    const form = e.target;
    const movieTitle = form.title.value;
    const poster = form.poster.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;
    const ratings = rating;
    const genres = selectedGenres.map(genre=>genre.value) || [];
    const movieData = {
      movieTitle,
      poster,
      genres,
      duration,
      releaseYear,
      summary,
      ratings,
      email
    };
  
    // validation part start
    if (!/^https?:\/\/.+$/.test(poster)) {
      toast.error("Poster must be a valid URL!");
      return;
    }

    if (movieTitle.trim().length < 2) {
      toast.error("Title must be at least 2 characters long!");
      return;
    }

    if (genres.length===0) {
      toast.error("Please select a genre!");
      return;
    }

    if (duration < 60) {
      toast.error("Duration must be greater than 60 minutes!");
      return;
    }

    if (!releaseYear) {
      toast.error("Please select a release year!");
      return;
    }

    if (rating === 0) {
      toast.error("Please select a rating!");
      return;
    }

    if (summary.trim().length < 10) {
      toast.error("Summary must be at least 10 characters long!");
      return;
    }
  // validation part end

  // send movie data to server

  fetch('https://cine-verse-server.vercel.app/movies',{
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(movieData)
  })
  .then(res=>res.json())
  .then(data=>{
    if (data.insertedId) {
      Swal.fire({
        title: 'Success!',
        text: 'Movie added successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      form.reset()
      setSelectedGenres([]); 
      setRating(0); 
    }
  })
   
  };

  return (
    <div className="min-h-screen flex  flex-col items-center justify-center px-4 pt-12 pb-28">
      {/* Back Link */}
      <Link
        to="/"
        className="flex items-center text-[#374151] dark:text-white hover:text-[#331A15] mb-6  font-semibold"
      >
        <IoArrowBack className="mr-2" />
        Back to Home
      </Link>

      <div className="bg-[#F4F3F0] rounded-lg p-8 max-w-2xl w-full card bg-gradient-to-b from-blue-50 via-sky-100 to-whites shadow-lg ">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Add New Movie
        </h2>
        <p className="text-center mb-8">
          Fill in the details below to add a new movie to the collection. Fields
          marked with * are required.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* movie title & movie poster */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Movie Title *
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter movie title"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Movie Poster(url) *
              </label>
              <input
                type="text"
                name="poster"
                placeholder="Enter movie poster(url)"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Realease year & Duration  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            

            <div>
              <label className="block text-sm font-medium">
                Release Year *
              </label>
              <select
                name="releaseYear"
                className="input input-bordered w-full"
              >
                <option value="">Select Year</option>
                {releaseYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Duration (in minutes) *
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Enter duration (in minutes)"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Genres & Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-medium">
                Genre *
              </label>
              <Select 
              options={genres}
              value={selectedGenres}
              onChange={handleGenreChange}
              isMulti
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Rating *
              </label>
              <div
                style={{
                  direction: "1tr",
                  fontFamily: "sans-serif",
                  touchAction: "none",
                }}
              >
                <Rating
                  size={20}
                  initialValue={rating}
                  allowFraction
                  onClick={handleRating}
                  showTooltip
                  tooltipStyle={{
                    background: "none",
                    color: "black",
                    marginLeft: "0px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium">
              Summary *
            </label>
            <textarea
              name="summary"
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Enter movie summary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 btn-block text-white font-semibold bg-[#121C22] rounded-lg"
          >
             Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
