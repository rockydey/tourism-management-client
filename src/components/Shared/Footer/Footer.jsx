import { MdCall } from "react-icons/md";
import { IoMail, IoLocation } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { TbLocation } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='pt-16 pb-10 mt-20 dark:bg-color5 bg-color1 duration-300'>
      <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='space-y-5'>
            <h3 className='text-3xl text-color6 font-gothic font-extrabold dark:text-color1'>
              Roaming <span className='text-color3'>Routes</span>
            </h3>
            <p className='text-lg font-medium text-color5 dark:text-color8'>
              Unlock unforgettable adventures with Roaming Routes. We are
              passionate about crafting unforgettable travel experiences
              tailored just for you. Let us explore the world together!
            </p>
          </div>
          <div className='space-y-5'>
            <h4 className='uppercase text-xl font-black font-gothic text-color6 dark:text-color1'>
              Contact Us
            </h4>
            <div className='text-lg font-gothic font-medium text-color5 dark:text-color3 space-y-3'>
              <p className='flex items-center gap-2'>
                <MdCall />{" "}
                <span className='text-base dark:text-color8'>+982676393</span>
              </p>
              <p className='flex items-center gap-2'>
                <IoMail />{" "}
                <span className='text-base dark:text-color8'>
                  info@roaming.com
                </span>
              </p>
              <p className='flex items-center gap-2'>
                <IoLocation />{" "}
                <span className='text-base dark:text-color8'>
                  4730 Crystal Springs Dr, Los Angeles, CA 90027
                </span>
              </p>
            </div>
          </div>
          <div className='space-y-5'>
            <h4 className='uppercase text-xl font-black font-gothic text-color6 dark:text-color1'>
              Connect with us
            </h4>
            <div className='text-xl flex gap-3 text-color6'>
              <p className='flex cursor-pointer p-2 rounded-md dark:bg-color7 dark:text-color8'>
                <FaFacebook />
              </p>
              <p className='flex cursor-pointer p-2 rounded-md dark:bg-color7 dark:text-color8'>
                <FaInstagram />
              </p>
              <p className='flex cursor-pointer p-2 rounded-md dark:bg-color7 dark:text-color8'>
                <FaTwitter />
              </p>
              <p className='flex cursor-pointer p-2 rounded-md dark:bg-color7 dark:text-color8'>
                <FaPinterest />
              </p>
            </div>
            <div className='space-y-3'>
              <h5 className='text-lg font-bold font-gothic text-color6 dark:text-color1'>
                Subscribe Newsletter
              </h5>
              <div className='flex items-center'>
                <input
                  type='text'
                  className='py-2 pl-5 rounded-s-lg text-base focus:outline-none font-medium text-color5 bg-color8 dark:bg-color1'
                  placeholder='Enter Email'
                />
                <p className='flex text-2xl p-2 bg-color5 dark:bg-color3 rounded-e-md cursor-pointer text-color1'>
                  <TbLocation />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t my-8 text-color7 opacity-50 dark:text-color8'></div>
        <div>
          <p className='text-center font-gothic text-lg font-medium text-color5 dark:text-color8'>
            &copy; Roaming Routes 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
