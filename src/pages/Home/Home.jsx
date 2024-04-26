import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
