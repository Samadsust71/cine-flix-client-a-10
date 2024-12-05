
import { useContext } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { AuthContext } from "../provider/AuthProvider";


const ThemeController = () => {
    const {toggleTheme,theme} = useContext(AuthContext)

    
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
      onChange={toggleTheme} // Toggles the theme on change
      checked={theme === "dark"} // Syncs checkbox state with the current theme
      type="checkbox" className="theme-controller" value="synthwave" />

      {/* sun icon */}
      <IoSunnyOutline className="swap-off text-2xl fill-current" />

      {/* moon icon */}
      <IoMoonOutline className="swap-on text-2xl fill-current" />
    </label>
  );
};

export default ThemeController;
