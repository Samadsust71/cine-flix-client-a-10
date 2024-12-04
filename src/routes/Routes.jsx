import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddMovie from "../pages/moviesPages/AddMovie";
import AllMovie from "../pages/moviesPages/AllMovie";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/addMovie",
            element:<AddMovie/>
        },
        {
            path:"/allMovies",
            element:<AllMovie/>,
            loader:()=>fetch("http://localhost:5000/movies")
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