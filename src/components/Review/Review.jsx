import testImg1 from "../../assets/review1.jpg";
import testImg2 from "../../assets/review2.jpg";
import testImg3 from "../../assets/review3.jpg";
import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div>
      <div className='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <div className='text-color1 flex flex-col gap-5 text-center'>
            <div className='space-y-2'>
              <h4 className='text-2xl font-bold'>Action Safari</h4>
              <div className='flex gap-1 text-xl justify-center text-color3'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className='text-base font-medium'>
              Efficient platform! Booked my entire trip hassle-free, from
              flights to accommodations. User-friendly interface and responsive
              customer service made planning a breeze.
            </p>
            <div className='space-y-2 mb-5'>
              <h5 className='text-xl font-bold'>Ethan Davis</h5>
              <img
                className='w-16 inline-block h-16 rounded-full border-2 border-color3'
                src={testImg1}
                alt=''
              />
            </div>
          </div>
        </div>
        <div id='item2' className='carousel-item w-full'>
          <div className='text-color1 flex flex-col gap-5 text-center'>
            <div className='space-y-2'>
              <h4 className='text-2xl font-bold'>Ancient Pyramids</h4>
              <div className='flex gap-1 text-xl justify-center text-color3'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className='text-base font-medium'>
              A one-stop hub for travelers! Seamless booking process and a vast
              array of options for tours and activities. Simplified my vacation
              planning immensely.
            </p>
            <div className='space-y-2 mb-5'>
              <h5 className='text-xl font-bold'>Olivia Thompson</h5>
              <img
                className='w-16 inline-block h-16 rounded-full border-2 border-color3'
                src={testImg2}
                alt=''
              />
            </div>
          </div>
        </div>
        <div id='item3' className='carousel-item w-full'>
          <div className='text-color1 flex flex-col gap-5 text-center'>
            <div className='space-y-2'>
              <h4 className='text-2xl font-bold'>Adventure Alaska</h4>
              <div className='flex gap-1 text-xl justify-center text-color3'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className='text-base font-medium'>
              Impressive resource! Found exclusive deals and insider tips for my
              trip. The sites intuitive design made navigating through
              destinations a pleasure.
            </p>
            <div className='space-y-2 mb-5'>
              <h5 className='text-xl font-bold'>Benjamin Carter</h5>
              <img
                className='w-16 inline-block h-16 rounded-full border-2 border-color3'
                src={testImg3}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs bg-color3 text-color6'>
          1
        </a>
        <a href='#item2' className='btn btn-xs bg-color3 text-color6'>
          2
        </a>
        <a href='#item3' className='btn btn-xs bg-color3 text-color6'>
          3
        </a>
      </div>
    </div>
  );
};

export default Review;
