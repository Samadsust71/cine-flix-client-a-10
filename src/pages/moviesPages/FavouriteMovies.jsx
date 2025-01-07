import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import FavMovieCard from '../../components/moviesComponents/FavMovieCard'


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
 useEffect(() => {
  window.scrollTo({
    top: 80,
    behavior: 'smooth', // Adds a smooth scroll effect
  });
}, [])
  return (
    <div className='w-11/12 mx-auto my-10 space-y-10'>
      <h2 className="text-3xl font-semibold text-start border-l-4 border-[#FFB347] pl-2 dark:text-white">Favourite Movies</h2>
      { favMovies && favMovies.length?
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
          favMovies.map(movie=><FavMovieCard  key={movie._id} favMovies={favMovies} setFavMovies={setFavMovies} movie={movie}/>)
       }
     </div>
     :<p className="dark:text-white">No movies added to favourite.</p>
      }
    </div>
  )
}

export default FavouriteMovies
