import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, CircleX } from "lucide-react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  const options = [
    {
      text: "dark",
      icon: <IoMoon />,
    },
    {
      text: "light",
      icon: <IoSunny />,
    },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;

      default:
        element.classList.remove("dark");
        break;
    }
  }, [theme]);

  const navLinks = (
    <>
      <li className='lg:ml-8 text-xl lg:my-0 md:my-4 my-7'>
        <NavLink
          className='text-color4 dark:text-color7 hover:text-color5 duration-300 focus:text-color5 focus:underline'
          to='/'>
          Home
        </NavLink>
      </li>
      <li className='lg:ml-8 text-xl lg:my-0 md:my-4 my-7'>
        <NavLink
          className='text-color4 dark:text-color7 hover:text-color5 duration-300 focus:text-color5 focus:underline'
          to='/'>
          All Tourists Spot
        </NavLink>
      </li>
      <li className='lg:ml-8 text-xl lg:my-0 md:my-4 my-7'>
        <NavLink
          className='text-color4 dark:text-color7 hover:text-color5 duration-300 focus:text-color5 focus:underline'
          to='/'>
          Add Tourists Spot
        </NavLink>
      </li>
      <li className='lg:ml-8 text-xl lg:my-0 md:my-4 my-7'>
        <NavLink
          className='text-color4 dark:text-color7 hover:text-color5 duration-300 focus:text-color5 focus:underline'
          to='/'>
          My List
        </NavLink>
      </li>
      <li className='lg:ml-8 text-xl lg:my-0 md:my-4 my-7'>
        <NavLink className='text-color4 dark:text-color7 hover:text-color5 duration-300 focus:text-color5 focus:underline'>
          Login
        </NavLink>
      </li>
      <li className='lg:ml-8 text-xl lg:my-0 md:my-4 my-7'>
        <NavLink className='text-color4 dark:text-color7 hover:text-color5 duration-300 focus:text-color5 focus:underline'>
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-color1 dark:bg-color3 duration-300'>
      <div className='max-w-screen-xl mx-auto lg:flex items-center justify-between bg-white py-6 pl-5 md:pl-10 lg:pl-0'>
        <Link
          to='/'
          className='font-black text-2xl md:text-3xl lg:text-4xl font-raleway text-color3 dark:text-color7'>
          Roaming <span className='text-color5'>Routes</span>
        </Link>

        <div className='text-3xl flex items-center gap-2 md:gap-6 dark:text-color7 absolute right-8 top-6 cursor-pointer lg:hidden'>
          <div onClick={() => setOpen(!open)} className='flex'>
            {open ? <CircleX /> : <Menu />}
          </div>
          <div className='flex gap-2 md:gap-3 text-color3 rounded-md p-2 dark:bg-color7'>
            {options.map((opt) => (
              <button
                onClick={() => setTheme(opt.text)}
                className={`text-xl ${theme === opt.text && "text-color5"}`}
                key={opt.text}>
                {opt.icon}
              </button>
            ))}
          </div>
        </div>

        <ul
          className={`lg:flex font-raleway dark:bg-color3 font-medium lg:items-center lg:rounded-none rounded-b-2xl absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in shadow-lg lg:shadow-none ${
            open
              ? "top-20 lg:border-none border-y-2 dark:border-color7 border-color3"
              : "top-[-490px]"
          }`}>
          {navLinks}
        </ul>

        <div className='hidden lg:flex items-center lg:mt-1 gap-3 text-color3 rounded-md p-2 dark:bg-color7'>
          {options.map((opt) => (
            <button
              onClick={() => setTheme(opt.text)}
              className={`text-xl ${theme === opt.text && "text-color5"}`}
              key={opt.text}>
              {opt.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
