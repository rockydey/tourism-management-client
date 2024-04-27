import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import CountryDetail from "../../components/CountryDetail/CountryDetail";

const ViewCountry = () => {
  const { name } = useParams();
  const countryDetails = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>View Country - {name}</title>
      </Helmet>
      <div className='dark:bg-color6'>
        <div className='max-w-screen-xl mx-auto mt-16 py-24 px-5 md:px-10 lg:px-0'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {countryDetails.map((countryDetail) => (
              <CountryDetail
                key={countryDetail._id}
                countryDetail={countryDetail}></CountryDetail>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCountry;
