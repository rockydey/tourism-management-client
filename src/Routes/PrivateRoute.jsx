import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <p className='flex justify-center mt-60 mb-40'>
        <HashLoader size={50} color='#F9B17A' />
      </p>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
