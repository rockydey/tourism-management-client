import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../../components/SpotCard/SpotCard";
import Countries from "../../components/Countries/Countries";
import homeBg from "../../assets/homeBG.jpg";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const allSpots = useLoaderData();
  const [text] = useTypewriter({
    words: ["To Get Lost", "To Visit Wisdom", "To Get Peace"],
    loop: 3,
  });
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Banner />
      <div className='dark:bg-color5'>
        <div className='py-24 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0'>
          <h3 className='text-3xl uppercase text-center dark:text-color1 mb-8 font-gothic text-color6 font-extrabold'>
            Spotlight
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {allSpots.slice(0, 6).map((spot) => (
              <SpotCard key={spot._id} spot={spot}></SpotCard>
            ))}
          </div>
        </div>
      </div>
      <Countries />
      <div className='dark:bg-color5'>
        <div className='pb-24 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0'>
          <div className='flex flex-col lg:flex-row items-center gap-10'>
            <div className=''>
              <img className='rounded-xl' src={homeBg} alt='' />
            </div>
            <div className='space-y-5'>
              <h3 className='text-5xl font-bold font-raleway text-color6 dark:text-color1'>
                A Simply Perfect Place <span className='block'>{text}</span>
              </h3>
              <p className='text-lg font-medium text-color5 dark:text-color8'>
                Treat yourself with a journey to your inner self. Visit a
                mystique Tibet and start your spiritual adventure. We promise,
                you will enjoy every step you make.
              </p>
              <button className='bg-color3 px-4 py-2 text-[#fff] font-semibold text-lg'>
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
