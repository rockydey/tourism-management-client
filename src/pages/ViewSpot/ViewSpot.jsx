import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";

const ViewSpot = () => {
  const touristSpot = useLoaderData();
  const {
    image,
    country_Name,
    tourists_spot_name,
    location,
    short_description,
    average_cost,
    travel_time,
    total_visitors_per_year,
    seasonality,
    user_name,
    user_email,
  } = touristSpot;
  return (
    <div>
      <Helmet>
        <title>View Spot - {tourists_spot_name}</title>
      </Helmet>
      <Header />
      <div className="dark:bg-color6">
        <div className='mt-20 py-20 max-w-screen-xl mx-auto'>
          <div className='w-[90%] mx-auto bg-color8 p-10 rounded-xl'>
            <div className='flex gap-10 items-center'>
              <div>
                <img className='rounded-xl' src={image} alt='' />
              </div>
              <div className='font-gothic space-y-3'>
                <h3 className='text-3xl font-medium'>
                  <span className='font-bold'>Tourist Spot:</span>{" "}
                  {tourists_spot_name}
                </h3>
                <h3 className='text-2xl font-medium'>
                  <span className='font-bold'>Location:</span> {location}
                </h3>
                <h3 className='text-xl font-medium'>
                  <span className='font-bold'>Country:</span> {country_Name}
                </h3>
                <p className='text-base font-medium text-color5'>
                  {short_description}
                </p>
                <div className='flex gap-5 text-base font-medium text-color5'>
                  <p>
                    <span className='font-bold'>Cost:</span> {average_cost}
                  </p>
                  <p>
                    <span className='font-bold'>Season:</span> {seasonality}
                  </p>
                </div>
                <div className='flex gap-5 text-base font-medium text-color5'>
                  <p>
                    <span className='font-bold'>Travel Time:</span>{" "}
                    {travel_time} hour
                  </p>
                  <p>
                    <span className='font-bold'>Visitors:</span>{" "}
                    {total_visitors_per_year} per year
                  </p>
                </div>
                <div className='flex gap-5 text-base font-medium text-color5'>
                  <p>
                    <span className='font-bold'>User:</span> {user_name}{" "}
                  </p>
                  <p>
                    <span className='font-bold'>Email:</span> {user_email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewSpot;
