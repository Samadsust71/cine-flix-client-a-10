import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddMovie = () => {
  const {setLoading} = useContext(AuthContext)
  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Sci-Fi"];
  const [rating, setRating] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const releaseYears = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, i) => 2000 + i
  );

  // for ratingg
  const handleRating = (rate) => {
    setRating(rate); 
  };

  // for genre
  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setSelectedGenres((prevGenres) => [...prevGenres, value]);
    } 
    else {
      setSelectedGenres((prevGenres) => prevGenres.filter((genre) => genre !== value));
    }
  };

  // form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const movieTitle = form.title.value;
    const poster = form.poster.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;
    const ratings = rating;
    const genres = selectedGenres;
    const movieData = {
      movieTitle,
      poster,
      genres,
      duration,
      releaseYear,
      summary,
      ratings
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

  fetch('http://localhost:5000/movies',{
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
      setLoading(false)
    }
  })
   
  };

  return (
    <div className="min-h-screen bg-add-coffee bg-cover bg-no-repeat bg-center flex  flex-col items-center justify-center px-4 pt-12 pb-28">
      {/* Back Link */}
      <Link
        to="/"
        className="flex items-center text-[#374151] dark:text-white hover:text-[#331A15] mb-6  font-semibold"
      >
        <IoArrowBack className="mr-2" />
        Back to Home
      </Link>

      <div className="bg-[#F4F3F0] dark:bg-[#2E2E2E] rounded-lg p-8 max-w-2xl w-full">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-center text-[#374151] dark:text-white mb-4">
          Add New Movie
        </h2>
        <p className="text-center text-gray-600 mb-8 dark:text-white">
          Fill in the details below to add a new movie to the collection. Fields
          marked with * are required.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* movie title & movie poster */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Movie Title *
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter movie title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Movie Poster(url) *
              </label>
              <input
                type="text"
                name="poster"
                placeholder="Enter movie poster(url)"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Genre & Duration  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            

            <div>
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
                Duration (in minutes) *
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Enter duration (in minutes)"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Release Year & Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-medium text-gray-700">
                Genre *
              </label>
              {genres.map((genre) => (
                <label key={genre} className="flex items-center w-fit cursor-pointer">
                  <input
                    type="checkbox"
                    name="genre"
                    value={genre}
                    onChange={handleGenreChange}
                    checked={selectedGenres.includes(genre)}
                    className="mr-2"
                  />
                  <span>{genre}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
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
                  initialValue={0}
                  allowFraction
                  onClick={handleRating}
                  showTooltip
                  disableFillHover
                  tooltipStyle={{
                    background: "none",
                    color: "black",
                    marginLeft: "0px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
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
            className="py-1 rounded-md btn-block border-2 border-[#331A15] bg-[#D2B48C] hover:bg-[#D2B48C] text-[#331A15] transition-all"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
