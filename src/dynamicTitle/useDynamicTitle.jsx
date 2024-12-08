import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    const routeTitles = {
      "/": "CineFlix - Home",
      "/addMovie": "Add Movie | CineFlix",
      "/allMovies": "All Movie | CineFlix",
      "/myFavorites": "My Favourites | CineFlix",
      "/login": "Login | CineFlix",
      "/register": "Register | CineFlix",
      "/about": "About | CineFlix",
    };

    const defaultTitle = "CineFlix";

    document.title = routeTitles[pathname] || defaultTitle;
  }, [location]);
};

export default useDynamicTitle;