import React from 'react'
import Banner from '../components/Banner'
import { Link, useLoaderData } from 'react-router-dom'
import MovieCard from '../components/moviesComponents/MovieCard'
import ReasonsToJoin from '../components/ReasonsToJoin'
import FAQSection from '../components/FAQSection'

const HomePage = () => {
  const loadedMovies = useLoaderData()
  return (
    <div>
      <section className="banner">
        <Banner/>
      </section>
      <div className='loaded-movies w-11/12 mx-auto space-y-8 my-10'>
      <h1 className='font-bold lg:text-4xl text-2xl text-[#0F172A] dark:text-white text-center'>Featured Movies</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          loadedMovies.map(movie=><MovieCard key={movie._id} movie={movie}/>)
         }
        </div>
        {
          loadedMovies.length>0 && <div className='flex justify-center items-center'>
            <Link to={'/allmovies'} className='px-4 py-2 text-white font-semibold bg-[#FFB347] rounded-lg'>See all movies</Link>
          </div>
        }

        <div>
          <ReasonsToJoin/>
        </div>
        <div>
          <FAQSection/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
