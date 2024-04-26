import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";

const ViewSpot = () => {
  return (
    <div>
      <Helmet>
        <title>View Spot</title>
      </Helmet>
      <Header />
      <Footer />
    </div>
  );
};

export default ViewSpot;
