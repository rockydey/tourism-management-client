import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../../components/SpotCard/SpotCard";

const Home = () => {
  const allSpots = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Banner />
      <div className='dark:bg-color5'>
        <div className='py-24 max-w-screen-xl mx-auto'>
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
      <Footer />
    </div>
  );
};

export default Home;
