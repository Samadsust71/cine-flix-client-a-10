import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children:[
        {
            path:"/",
            element:<HomePage/>
        }
      ]
    },
  ]);


  export default router