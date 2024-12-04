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

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            element:<HomePage/>,
            loader: ()=>fetch("http://localhost:5000/movies-sorted")
        },
        {
            path:"/addMovie",
            element:<PrivateRoute><AddMovie/></PrivateRoute>
        },
        {
            path:"/allMovies",
            element:<AllMovie/>,
            loader:()=>fetch("http://localhost:5000/movies")
        },
        {
            path:"/movies/:id",
            element:<PrivateRoute><Moviedetails/></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/movies/${params.id}`)
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
      ]
    },
  ]);


  export default router