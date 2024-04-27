import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllTouristCard = ({ touristSpot }) => {
  const {
    image,
    _id,
    tourists_spot_name,
    average_cost,
    travel_time,
    seasonality,
    total_visitors_per_year,
  } = touristSpot;
  return (
    <div>
      <div className='card w-full md:w-80 lg:w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src={image} alt={tourists_spot_name} />
        </figure>
        <div className='card-body font-gothic'>
          <h2 className='card-title'>{tourists_spot_name}</h2>
          <div className='flex gap-3 text-base font-medium text-color5'>
            <p>
              <span className='font-bold'>Cost:</span> ${average_cost}
            </p>
            <p>
              <span className='font-bold'>Travel Time:</span> {travel_time} hour
            </p>
          </div>
          <div className='flex gap-3 text-base font-medium text-color5'>
            <p>
              <span className='font-bold'>Season:</span> {seasonality}
            </p>
            <p>
              <span className='font-bold'>Visitors:</span>{" "}
              {total_visitors_per_year} per year
            </p>
          </div>
          <div className='card-actions justify-start'>
            <Link
              to={`/view-spot/${_id}`}
              className='inline-block p-3 border-2 border-color6 rounded-lg text-color6 font-bold text-lg'>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AllTouristCard.propTypes = {
  touristSpot: PropTypes.object,
};

export default AllTouristCard;
