import { Helmet } from "react-helmet-async";
import Header from "../../components/Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
    </div>
  );
};

export default Home;
