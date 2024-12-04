import React from 'react'
import Banner from '../components/Banner'
import { Link, useLoaderData } from 'react-router-dom'
import MovieCard from '../components/moviesComponents/MovieCard'

const HomePage = () => {
  const loadedMovies = useLoaderData()
  return (
    <div>
      <section className="banner">
        <Banner/>
      </section>
      <div className='loaded-movies w-11/12 mx-auto space-y-4 my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          loadedMovies.map(movie=><MovieCard key={movie._id} movie={movie}/>)
         }
        </div>
        {
          loadedMovies.length>0 && <Link to={'/allmovies'} className='btn btn-success'>See all movies</Link>
        }
      </div>
    </div>
  )
}

export default HomePage
