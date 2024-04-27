import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddSpot = (event) => {
    event.preventDefault();
    const form = event.target;

    const userName = form.username.value;
    const userEmail = form.userEmail.value;
    const spotName = form.name.value;
    const countryName = form.country.value;
    const spotLocation = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;

    // console.log(
    //   userName,
    //   userEmail,
    //   spotName,
    //   spotLocation,
    //   countryName,
    //   description,
    //   cost,
    //   seasonality,
    //   time,
    //   visitors,
    //   photo
    // );

    const newSpot = {
      user_name: userName,
      user_email: userEmail,
      tourists_spot_name: spotName,
      country_Name: countryName,
      location: spotLocation,
      short_description: description,
      average_cost: cost,
      seasonality: seasonality,
      travel_time: time,
      total_visitors_per_year: visitors,
      image: photo,
    };
    console.log(newSpot);

    fetch("http://localhost:5000/all-spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Spot Added Successfully!",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };
  return (
    <div>
      <Helmet>
        <title>Add Tourists Spot</title>
      </Helmet>
      <div className='dark:bg-color6'>
        <div className='mt-16 py-24 px-5 md:px-10 lg:px-0'>
          <div className='bg-[#F4F3F0] w-full lg:w-3/4 mx-auto rounded-xl py-8 md:py-16 px-5 md:px-10 lg:px-20 space-y-8'>
            <h2 className='font-gothic text-color6 font-bold text-3xl md:text-4xl text-center'>
              Add Tourists Spot
            </h2>
            <form onSubmit={handleAddSpot} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='username'
                    className='block mb-4 text-color5 text-xl font-semibold'>
                    User Name
                  </label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    defaultValue={user?.displayName}
                    placeholder={user ? user?.displayName : "User name"}
                    className='w-full py-3 font-gothic pl-3 rounded-md focus:outline-none  text-base font-normal text-color5'
                  />
                </div>
                <div>
                  <label
                    htmlFor='userEmail'
                    className='block mb-4 text-color5 text-xl font-semibold'>
                    User Email
                  </label>
                  <input
                    type='text'
                    name='userEmail'
                    id='userEmail'
                    defaultValue={user?.email}
                    readOnly
                    placeholder='Country name'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-4 text-color5 text-xl font-semibold'>
                    Spot Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Tourists spot name'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
                <div>
                  <label
                    htmlFor='country'
                    className='block mb-4 text-color5 text-xl font-semibold'>
                    Country Name
                  </label>
                  <input
                    type='text'
                    name='country'
                    id='country'
                    placeholder='Country name'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='location'
                    className='block mb-4 text-color5 font-raleway text-xl font-semibold'>
                    Location
                  </label>
                  <input
                    type='text'
                    name='location'
                    id='location'
                    placeholder='Location'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
                <div>
                  <label
                    htmlFor='description'
                    className='block mb-4 text-color5 text-xl font-semibold'>
                    Short Description
                  </label>
                  <input
                    type='text'
                    name='description'
                    id='description'
                    placeholder='Short Description'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='cost'
                    className='block mb-4 text-color5  text-xl font-semibold'>
                    Average Cost
                  </label>
                  <input
                    type='text'
                    name='cost'
                    id='cost'
                    placeholder='Average cost'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
                <div>
                  <label
                    htmlFor='seasonality'
                    className='block mb-4 text-color5 text-xl font-semibold'>
                    Seasonality
                  </label>
                  <input
                    type='text'
                    name='seasonality'
                    id='seasonality'
                    placeholder='Seasonality'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='time'
                    className='block mb-4 text-color5  text-xl font-semibold'>
                    Travel Time
                  </label>
                  <input
                    type='text'
                    name='time'
                    id='time'
                    placeholder='Travel time'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
                <div>
                  <label
                    htmlFor='visitors'
                    className='block mb-4 text-color5  text-xl font-semibold'>
                    Visitors Per Year
                  </label>
                  <input
                    type='text'
                    name='visitors'
                    id='visitors'
                    placeholder='Visitors per year'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
              </div>
              <div className=''>
                <div>
                  <label
                    htmlFor='photo'
                    className='block mb-4 text-color5  text-xl font-semibold'>
                    Photo URL
                  </label>
                  <input
                    type='text'
                    name='photo'
                    id='photo'
                    placeholder='Enter photo URL'
                    className='w-full py-3 pl-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                  />
                </div>
              </div>
              <input
                type='submit'
                value='Add Spot'
                className='w-full font-semibold text-center font-gothic text-color8 text-2xl py-3 bg-color6  cursor-pointer rounded-md'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
