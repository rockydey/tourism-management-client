import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { country_Name, short_description, image } = country;
  return (
    <Link to={`/view-country/${country_Name}`}>
      <div className='card w-full md:w-80 lg:w-96 bg-base-100 shadow-xl image-full'>
        <figure>
          <img src={image} alt={country_Name} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-2xl font-bold text-color1'>
            {country_Name}
          </h2>
          <p className='text-sm text-color1'>{short_description}</p>
        </div>
      </div>
    </Link>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
