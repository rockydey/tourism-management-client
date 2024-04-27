import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AllTouristCard from "../../components/AllTouristCard/AllTouristCard";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const AllTouristsSpot = () => {
  const allTouristSpot = useLoaderData();
  const [sortName, setSortName] = useState("Sort By");
  const [touristSpots, setTouristSpots] = useState(allTouristSpot);

  const handleSort = () => {
    setSortName("Average Cost");
    const result = [...touristSpots].sort(
      (a, b) => a.average_cost - b.average_cost
    );
    setTouristSpots(result);
  };
  return (
    <div>
      <Helmet>
        <title>All Tourists Spot</title>
      </Helmet>
      <div className='dark:bg-color6'>
        <div className='mt-16 py-24 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0'>
          <div className='dropdown dropdown-bottom flex flex-col items-center mb-16'>
            <div
              tabIndex={0}
              role='button'
              className='flex gap-3 items-center px-10 py-4 text-color1 text-lg focus:outline-none work-sans font-medium bg-color3 rounded-lg'>
              <p>{sortName ? sortName : "Sort By"}</p>
              <IoIosArrowDropdown className='text-xl' />
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu shadow rounded-b-xl bg-white text-color6 dark:bg-color1 text-base font-medium w-44 space-y-2'>
              <li onClick={handleSort} className='cursor-pointer text-center'>
                Average Cost
              </li>
            </ul>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {touristSpots.map((touristSpot) => (
              <AllTouristCard
                key={touristSpot._id}
                touristSpot={touristSpot}></AllTouristCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTouristsSpot;
