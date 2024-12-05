import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import FavMovieCard from '../../components/moviesComponents/FavMovieCard'

const FavouriteMovies = () => {
  const {user} = useContext(AuthContext) 
  const [favMovies, setFavMovies] = useState([])
 useEffect(()=>{
    fetch(`http://localhost:5000/favourite_movies/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setFavMovies(data)
    })
 },[])

  return (
    <div className='w-11/12 mx-auto my-10'>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Favourite Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
           favMovies.map(movie=><FavMovieCard  key={movie._id} favMovies={favMovies} setFavMovies={setFavMovies} movie={movie}/>)
        }
      </div>
    </div>
  )
}

export default FavouriteMovies