import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";

const AllTouristsSpot = () => {
  return (
    <div>
      <Helmet>
        <title>All Tourists Spot</title>
      </Helmet>
      <Header />
      <Footer />
    </div>
  );
};

export default AllTouristsSpot;
