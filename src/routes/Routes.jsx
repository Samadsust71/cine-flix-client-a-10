import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddMovie from "../pages/moviesPages/AddMovie";

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