import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/logo2.webp"

const NoFavourite = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4 dark:text-white'>
    <img src={img} alt="" className='h-20 w-20 object-cover rounded-lg' />
      <h3 className='font-bold'>No Favourites Movie Saved</h3>
      <p>You'll see all your favourites here, to add favourite movie. Just look for the</p>
      <Link to={'/allMovies'} className='px-4 py-2 rounded-xl border'>Let's add favourite movies</Link>
    </div>
  )
}

export default NoFavourite
