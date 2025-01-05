import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { Link} from 'react-router-dom'
import MovieCard from '../components/moviesComponents/MovieCard'
import ReasonsToJoin from '../components/ReasonsToJoin'
import FAQSection from '../components/FAQSection'
import useAxios from '../hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import Loading from '../components/Loading'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scroll effect
    });
  }, [])
  
  const axiosInstance = useAxios()
  const {
    data :loadedMovies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["sorted-movies"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/movies-sorted`);
      return data;
    },
  });
  if(isLoading) return <Loading/>

  if (isError)
    return (
      <div className="flex justify-center items-center my-5">
        <p className="text-center">Unable to load movie data. Please check your internet connection or try reloading the page.</p>
      </div>
    );

  return (
    <div>
      <section className="banner">
        <Banner/>
      </section>
      <div className='loaded-movies w-11/12 mx-auto space-y-8 my-10'>
      <h1 className='font-bold lg:text-4xl text-2xl text-[#0F172A] dark:text-white text-center'>Featured Movies</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
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
