import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(localStorage.getItem("darkMode"));

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logout Successfully!"))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  const handleToggleDark = () => {
    setDark((prevMode) => !prevMode);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#F9B17A" : "",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  const navLinks = (
    <>
      <li className='text-color6 text-lg lg:text-xl dark:text-color8 hover:text-color3 duration-300'>
        <NavLink style={navLinkStyles} to='/'>
          Home
        </NavLink>
      </li>
      <li className='text-color6  text-lg lg:text-xl dark:text-color8 hover:text-color3 duration-300'>
        <NavLink style={navLinkStyles} to='/all-spot'>
          All Tourists Spot
        </NavLink>
      </li>
      <li className='text-color6 text-lg lg:text-xl dark:text-color8 hover:text-color3 duration-300'>
        <NavLink style={navLinkStyles} to='/add-spot'>
          Add Tourists Spot
        </NavLink>
      </li>
      <li className='text-color6 text-lg lg:text-xl dark:text-color8 hover:text-color3 duration-300'>
        <NavLink style={navLinkStyles} to='/my-list'>
          My List
        </NavLink>
      </li>
      {user ? (
        <></>
      ) : (
        <>
          <li className='text-color6 md:hidden font-medium text-lg lg:text-xl dark:text-color8 hover:text-color3 duration-300'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='text-color6 md:hidden font-medium text-lg lg:text-xl dark:text-color8 hover:text-color3 duration-300'>
            <Link to='/register'>Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className='z-50 shadow-md w-full fixed top-0 left-0 bg-[#fff] dark:bg-color5 duration-300'>
      <div className='navbar max-w-screen-xl mx-auto md:px-5 lg:px-0'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='dark:text-color1 text-color6 px-0 mr-4 md:mr-5 lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-[#fff] dark:bg-color5 rounded-box w-52'>
              {navLinks}
            </ul>
          </div>
          <Link
            to='/'
            className='font-black text-2xl md:text-3xl lg:text-4xl font-raleway text-color6 dark:text-color1'>
            Roaming<span className='text-color3'>Routes</span>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal font-medium'>{navLinks}</ul>
        </div>
        <div className='navbar-end flex-row-reverse md:flex-row justify-start md:justify-end gap-5 lg:gap-0'>
          <button
            onClick={() => handleToggleDark()}
            className='text-2xl text-color6 dark:text-color8'>
            {dark && <IoSunny />}
            {!dark && <IoMoon />}
          </button>
          {user ? (
            <div className='lg:ml-5 md:gap-5 flex items-center text-xl'>
              <div className='flex items-center'>
                <div id='displayName' className='avatar online cursor-pointer'>
                  <div className='w-10 rounded-full'>
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <Tooltip anchorSelect='#displayName' clickable place='bottom'>
                  <div className='text-center'>
                    <p>{user?.displayName}</p>
                    <button
                      onClick={handleLogOut}
                      className='text-color1 md:hidden mt-2 font-medium px-4 py-2  bg-color3  rounded-xl duration-300'>
                      Logout
                    </button>
                  </div>
                </Tooltip>
              </div>
              <button
                onClick={handleLogOut}
                className='text-color6 hidden md:flex font-medium dark:text-color8 dark:border-color8 px-4 py-2 border-2 border-color6 rounded-xl duration-300'>
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to='/login'
                className='text-color6 hidden md:flex font-medium border-2 p-2 rounded-lg border-color6 dark:border-color8 dark:hover:text-color3 hover:text-color3 lg:ml-5 text-xl dark:text-color8  duration-300'>
                Login
              </Link>
              <Link
                to='/register'
                className='text-color6 hidden md:flex font-medium border-2 p-2 rounded-lg border-color6 dark:border-color8 dark:hover:text-color3 lg:ml-5 text-xl dark:text-color8 hover:text-color3 duration-300'>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
