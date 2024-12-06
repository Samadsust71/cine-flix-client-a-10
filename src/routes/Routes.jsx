import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddMovie from "../pages/moviesPages/AddMovie";
import AllMovie from "../pages/moviesPages/AllMovie";
import Moviedetails from "../pages/moviesPages/Moviedetails";
import PrivateRoute from "./PrivateRoute";
import FavouriteMovies from "../pages/moviesPages/FavouriteMovies";
import UpdateMovie from "../pages/moviesPages/UpdateMovie";
import About from "../pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            element:<HomePage/>,
            loader: ()=>fetch("https://cine-verse-server.vercel.app/movies-sorted")
        },
        {
            path:"/addMovie",
            element:<PrivateRoute><AddMovie/></PrivateRoute>
        },
        {
            path:"/updateMovie/:id",
            element:<PrivateRoute><UpdateMovie/></PrivateRoute>,
            loader:({params})=>fetch(`https://cine-verse-server.vercel.app/movies/${params.id}`)
        },
        {
            path:"/allMovies",
            element:<AllMovie/>,
            loader:()=>fetch("https://cine-verse-server.vercel.app/movies")
        },
        {
            path:"/movies/:id",
            element:<PrivateRoute><Moviedetails/></PrivateRoute>,
            loader:({params})=>fetch(`https://cine-verse-server.vercel.app/movies/${params.id}`)
        },
        {
            path:"/myFavorites",
            element:<PrivateRoute><FavouriteMovies/></PrivateRoute>,
            
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/about",
            element:<About/>
        }
      ]
    },
  ]);


  export default router