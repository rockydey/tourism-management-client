import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import PropTypes from "prop-types";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <Header />
        <p className='flex justify-center mt-60 mb-40'>
          <HashLoader size={50} color='#F9B17A' />
        </p>
        <Footer />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
