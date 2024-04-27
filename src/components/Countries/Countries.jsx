import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className='dark:bg-color5'>
      <div className='pb-24 max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0'>
        <h3 className='text-3xl uppercase text-center dark:text-color1 mb-8 font-gothic text-color6 font-extrabold'>
          Countries
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {countries.map((country) => (
            <Country key={country._id} country={country}></Country>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
