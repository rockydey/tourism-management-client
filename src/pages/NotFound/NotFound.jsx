import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/404.jpg";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className='my-20'>
      <div className='px-5 md:px-10 lg:px-0 lg:w-5/12 mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3 justify-center font-gothic text-2xl font-bold text-color3F'>
          <FaArrowAltCircleLeft /> <span>Back to Home</span>
        </Link>
        <img className='w-full' src={NotFoundImg} alt='' />
      </div>
    </div>
  );
};

export default NotFound;
