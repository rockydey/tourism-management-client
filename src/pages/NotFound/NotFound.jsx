import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/404.jpg";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className='my-20'>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <div className='px-5 md:px-10 lg:px-0 lg:w-5/12 mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3 justify-center font-gothic text-2xl font-bold text-color5'>
          <FaArrowAltCircleLeft /> <span>Back to Home</span>
        </Link>
        <img className='w-full' src={NotFoundImg} alt='' />
      </div>
    </div>
  );
};

export default NotFound;
