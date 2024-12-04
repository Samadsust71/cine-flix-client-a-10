import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-dark.webp"
import { AuthContext } from '../provider/AuthProvider';
import ThemeController from './ThemeController';

const Header = () => {

  const { logOutUser, user } = useContext(AuthContext)
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#10B981] underline" : "text-gray-900"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#10B981] underline" : "text-gray-900"
          }
          to={"/allMovies"}
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#10B981] underline" : "text-gray-900"
          }
          to={"/addMovie"}
        >
         Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#10B981] underline" : "text-gray-900"
          }
          to={"/myFavorites"}
        >
         My Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#10B981] underline" : "text-gray-900"
          }
          to={"/addMovie"}
        >
         Extra Section
        </NavLink>
      </li>
    </>
  )
  return (
    <div className="py-5">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <div className="hidden lg:block"><img src={logo} alt="" className="h-10 w-10 rounded-full object-cover" /></div>
            <div><Link className="text-xl font-semibold">
            Cineflix
          </Link></div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4">{links}</ul>
        </div>
        <div className="navbar-end items-center">
          <div className='mr-2'>
            <ThemeController/>
          </div>
          <div className="flex gap-2 items-center">
            {user && (
              <div className="relative">
                <div className="group">
                <img
                  src={user.photoURL|| userIcon}
                  className="h-10 w-10 rounded-full object-cover"
                  alt="user"
                />
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-12 bg-white text-gray-800 text-sm py-1 pl-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-[100px] z-20">
                  {user?.displayName}
                </div>
              </div>
              </div>
            )}

            {user ? (
              <button
                onClick={logOutUser}
                className="bg-[#10B981] hover:bg-[#34D399] px-4 py-2 rounded-lg shadow-md text-white transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <div className='flex items-center gap-2'>
                <button
                onClick={() => navigate("/login")}
                className="bg-[#10B981] hover:bg-[#34D399] px-4 py-2 rounded-lg shadow-md text-white transition-all duration-300"
              >
                Login
              </button>
                <button
                onClick={() => navigate("/register")}
                className="bg-[#10B981] hover:bg-[#34D399] px-4 py-2 rounded-lg shadow-md text-white transition-all duration-300"
              >
                Register
              </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header
