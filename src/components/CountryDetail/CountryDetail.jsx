import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryDetail = ({ countryDetail }) => {
  const {
    tourists_spot_name,
    country_Name,
    _id,
    location,
    short_description,
    average_cost,
    seasonality,
  } = countryDetail;
  return (
    <div className=''>
      <div className='card bg-color5 dark:bg-color1 w-full md:w-80 lg:w-96  shadow-xl'>
        <div className='card-body text-color1 dark:text-color6'>
          <h2 className='card-title text-2xl font-bold'>
            {tourists_spot_name}, {location}
          </h2>
          <h3 className='text-xl font-bold'>{country_Name}</h3>
          <p className='text-lg font-semibold'>{short_description}</p>
          <div className='flex gap-5 text-base font-gothic font-medium dark:text-color5'>
            <p>
              <span className='font-bold'>Cost:</span> ${average_cost}
            </p>
            <p>
              <span className='font-bold'>Season:</span> {seasonality}
            </p>
          </div>
          <div className='card-actions justify-end'>
            <Link
              to={`/view-spot/${_id}`}
              className='inline-block p-3 border-2 dark:border-color6 border-color1 rounded-lg dark:text-color6 font-bold text-lg'>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CountryDetail.propTypes = {
  countryDetail: PropTypes.object,
};

export default CountryDetail;
