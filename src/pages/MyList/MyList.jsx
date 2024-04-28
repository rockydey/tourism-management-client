import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { MdBrowserUpdated, MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myLists, setMyLists] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [updateList, setUpdateList] = useState([]);

  useEffect(() => {
    fetch(`https://tourism-management-server-zeta.vercel.app/my-list/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyLists(data);
      });
  }, [user]);

  useEffect(() => {
    const updateList = myLists.find((list) => list._id === updateId);
    setUpdateList(updateList);
  }, [updateId]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const spotName = form.name.value;
    const countryName = form.country.value;
    const spotLocation = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;

    const updateSpot = {
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
    console.log(updateSpot);

    fetch(`https://tourism-management-server-zeta.vercel.app/all-spots/${updateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Spot Updated Successfully!",
            confirmButtonColor: "#F9B17A",
            confirmButtonText: "Okay",
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F9B17A",
      cancelButtonColor: "#de463b",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourism-management-server-zeta.vercel.app/all-spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Spot Deleted Successfully!",
                confirmButtonColor: "#F9B17A",
                confirmButtonText: "Okay",
              }).then((result) => {
                if (result.isConfirmed) {
                  location.reload();
                }
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>My List</title>
      </Helmet>
      <div className='dark:bg-color6'>
        <div className='mt-16 max-w-screen-xl mx-auto py-24 px-5 md:px-10 lg:px-0'>
          <div className='overflow-x-auto'>
            <table className='table'>
              <thead>
                <tr className='text-lg font-bold dark:text-color1 text-color6'>
                  <th>Spot Name</th>
                  <th>Location</th>
                  <th>Country</th>
                  <th>Average Cost</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myLists.map((myList) => (
                  <tr
                    key={myList._id}
                    className='font-gothic text-base font-bold dark:text-color8 text-color5'>
                    <td>{myList.tourists_spot_name}</td>
                    <td>{myList.location}</td>
                    <td>{myList.country_Name}</td>
                    <td>${myList.average_cost}</td>
                    <td className='text-2xl'>
                      <label
                        onClick={() => setUpdateId(myList._id)}
                        htmlFor='update-modal'
                        className='inline-block border-2 border-color3 bg-color3 text-color1 p-2 rounded-full cursor-pointer'>
                        <MdBrowserUpdated />
                      </label>
                    </td>
                    <td className='text-2xl'>
                      <p
                        onClick={() => handleDelete(myList._id)}
                        className='inline-block border-2 border-color3 bg-color3 text-color1 p-2 rounded-full cursor-pointer'>
                        <MdDeleteOutline />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <input type='checkbox' id='update-modal' className='modal-toggle' />
        <div className='modal modal-bottom sm:modal-middle px-5 md:px-0'>
          <div className='modal-box p-3'>
            <label
              htmlFor='update-modal'
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </label>

            <div className=''>
              <div className=''>
                <div className='bg-[#F4F3F0] rounded-xl py-8 md:py-16 px-5 space-y-8'>
                  <h2 className='font-gothic text-color6 font-bold text-3xl md:text-4xl text-center'>
                    Update Tourists Spot
                  </h2>
                  <form onSubmit={handleUpdate} className='space-y-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
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
                          defaultValue={updateList?.tourists_spot_name}
                          placeholder='Tourists spot name'
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
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
                          defaultValue={updateList?.country_Name}
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
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
                          defaultValue={updateList?.location}
                          placeholder='Location'
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
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
                          defaultValue={updateList?.short_description}
                          id='description'
                          placeholder='Short Description'
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
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
                          defaultValue={updateList?.average_cost}
                          placeholder='Average cost'
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
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
                          defaultValue={updateList?.seasonality}
                          placeholder='Seasonality'
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
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
                          defaultValue={updateList?.travel_time}
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
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
                          defaultValue={updateList?.total_visitors_per_year}
                          placeholder='Visitors per year'
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
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
                          defaultValue={updateList?.image}
                          placeholder='Enter photo URL'
                          className='w-full py-3 px-3 rounded-md focus:outline-none font-gothic text-base font-normal text-color5'
                        />
                      </div>
                    </div>
                    <input
                      type='submit'
                      value='Update Spot'
                      className='w-full font-semibold text-center font-gothic text-color8 text-2xl py-3 bg-color6  cursor-pointer rounded-md'
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
