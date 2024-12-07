import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import FavMovieCard from '../../components/moviesComponents/FavMovieCard'
import NoFavourite from '../../components/NoFavourite'

const FavouriteMovies = () => {
  const {user} = useContext(AuthContext) 
  const [favMovies, setFavMovies] = useState([])
 useEffect(()=>{
    fetch(`https://cine-verse-server.vercel.app/favourite_movies/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setFavMovies(data)
    })
 },[])

  return (
    <div className='w-11/12 mx-auto my-10 space-y-10'>
      <h2 className="text-3xl font-semibold text-center dark:text-white">Favourite Movies</h2>
      {
        favMovies.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
           favMovies.map(movie=><FavMovieCard  key={movie._id} favMovies={favMovies} setFavMovies={setFavMovies} movie={movie}/>)
        }
      </div>
      :
      <NoFavourite/>
      }
    </div>
  )
}

export default FavouriteMovies
