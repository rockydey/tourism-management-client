import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  const {
    _id,
    image,
    country_Name,
    tourists_spot_name,
    location,
    short_description,
    average_cost,
  } = spot;
  return (
    <div className='dark:bg-color1 card lg:card-side bg-base-100 shadow-xl'>
      <figure>
        <img className=' md:rounded-s-xl' src={image} alt='' />
      </figure>
      <div className='card-body font-gothic'>
        <h3 className='text-2xl font-bold text-color6'>
          {tourists_spot_name}, {location}
        </h3>
        <h3 className='text-xl font-bold text-color6'>{country_Name}</h3>
        <p className='font-semibold text-color7 text-lg'>
          <span className='font-bold text-color6'>Cost:</span> ${average_cost}
        </p>
        <p className='text-base text-[#9b9b9b] font-medium'>
          {short_description}
        </p>
        <div className="card-actions justify-start">
          <Link
            to={`/view-spot/${_id}`}
            className='inline-block p-3 border-2 border-color6 text-color6 font-bold text-lg'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

SpotCard.propTypes = {
  spot: PropTypes.object,
};

export default SpotCard;
