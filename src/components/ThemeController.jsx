
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";


const ThemeController = () => {
    

    
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input  type="checkbox" className="theme-controller" value="synthwave" />

      {/* sun icon */}
      <IoSunnyOutline className="swap-off text-2xl fill-current" />

      {/* moon icon */}
      <IoMoonOutline className="swap-on text-2xl fill-current" />
    </label>
  );
};

export default ThemeController;
