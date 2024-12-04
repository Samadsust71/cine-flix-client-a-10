import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MovieCard from '../../components/moviesComponents/MovieCard';

const AllMovie = () => {
    const movies = useLoaderData();
   
  return (
    <div className='w-11/12 mx-auto my-10'>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">All Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            movies.map(movie=><MovieCard key={movie._id} movie={movie}/>)
        }
      </div>
    </div>
  )
}

export default AllMovie
