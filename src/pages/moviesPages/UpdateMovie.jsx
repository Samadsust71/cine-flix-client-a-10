import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateMovie = () => {
  const { setLoading } = useContext(AuthContext);
  const loadedMovie = useLoaderData()
  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Sci-Fi"];
  const releaseYears = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, i) => 2000 + i
  );

  const { register, handleSubmit, control, reset, setError } = useForm({
    defaultValues: {
      movieTitle: loadedMovie?.movieTitle,
      poster: loadedMovie?.poster,
      duration: loadedMovie?.duration,
      releaseYear: loadedMovie?.releaseYear,
      summary: loadedMovie?.summary,
      genres: loadedMovie?.genres,
      ratings: loadedMovie?.ratings,
    },
  });

  const onSubmit = (data) => {
    const { movieTitle, poster, duration, releaseYear, summary, genres, ratings } = data;
    const movieData = { movieTitle, poster, genres, duration, releaseYear, summary, ratings};

    // Validation for genres selection
    if (genres.length === 0) {
      setError("genres", { type: "manual", message: "Please select at least one genre!" });
      return;
    }

    fetch(`https://cine-verse-server.vercel.app/movie/${loadedMovie?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Movie updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          reset();
          setLoading(false);
        }
      });
  };

  return (
    <div className="min-h-screen bg-add-coffee bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center px-4 pt-12 pb-28">
      {/* Back Link */}
      <Link to="/" className="flex items-center text-[#374151] dark:text-white hover:text-[#331A15] mb-6  font-semibold">
        <IoArrowBack className="mr-2" />
        Back to Home
      </Link>

      <div className="bg-[#F4F3F0] rounded-lg p-8 max-w-2xl w-full card bg-gradient-to-b from-blue-50 via-sky-100 to-whites shadow-lg ">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-center text-[#374151] mb-4">Update Movie</h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in the details below to update the movie  
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Movie Title & Movie Poster */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Movie Title *</label>
              <input
                type="text"
                {...register("movieTitle", { required: "Movie title is required", minLength: 2 })}
                placeholder="Enter movie title"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Movie Poster(url) *</label>
              <input
                type="text"
                {...register("poster", {
                  required: "Poster URL is required",
                  pattern: {
                    value: /^https?:\/\/.+$/,
                    message: "Poster must be a valid URL",
                  },
                })}
                placeholder="Enter movie poster(url)"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Genre & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           
             
            <div>
              <label className="block text-sm font-medium text-gray-700">Release Year *</label>
              <select
                {...register("releaseYear", { required: "Release year is required" })}
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
              <label className="block text-sm font-medium text-gray-700">Duration (in minutes) *</label>
              <input
                type="number"
                {...register("duration", { required: "Duration is required", min: 60 })}
                placeholder="Enter duration (in minutes)"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Release Year & Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
              <label className="block text-sm font-medium text-gray-700">Genre *</label>
              {genres.map((genre) => (
                <label key={genre} className="flex items-center w-fit cursor-pointer">
                  <input
                    type="checkbox"
                    value={genre}
                    {...register("genres")}
                    className="mr-2"
                  />
                  <span>{genre}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating *</label>
              <Controller
                name="ratings"
                control={control}
                rules={{ required: "Rating is required" }}
                render={({ field }) => (
                  <Rating
                    size={20}
                    allowFraction
                    initialValue={field.value}
                    onClick={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Summary *</label>
            <textarea
              {...register("summary", { required: "Summary is required", minLength: 10 })}
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Enter movie summary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-1 btn-block text-white font-semibold bg-[#121C22] rounded-lg"
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
