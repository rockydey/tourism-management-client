import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import bannerImg1 from "../../assets/bannerImg1.jpg";
import bannerImg2 from "../../assets/bannerImg2.jpg";
import bannerImg3 from "../../assets/bannerImg3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className='mt-20 md:mt-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg1})` }}>
            <div className='hero-overlay bg-[#00000080]'></div>
            <div className='hero-content text-[#fff] '>
              <div className='text-center'>
                <p className='text-base md:text-xl font-medium mb-4 md:mb-8 uppercase'>
                  Enjoy the best destinations with our travel agency
                </p>
                <h2 className='text-2xl font-gothic md:text-4xl lg:text-5xl font-medium  mb-4 md:mb-8'>
                  Explore <span className='font-black'>The World</span>
                </h2>
                <button className='uppercase text-base font-semibold p-3 border-2 border-color1'>
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg3})` }}>
            <div className='hero-overlay bg-[#00000080]'></div>
            <div className='hero-content text-[#fff]'>
              <div className='text-center'>
                <p className='text-base md:text-xl font-medium mb-4 md:mb-8 uppercase'>
                  A team of professional travel experts
                </p>
                <h2 className='text-2xl font-gothic md:text-4xl lg:text-5xl font-medium  mb-4 md:mb-8'>
                  Trust <span className='font-black'>Our Experience</span>
                </h2>
                <button className='uppercase text-base font-semibold p-3 border-2 border-color1'>
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero h-[50vh] md:h-[65vh] lg:h-[95vh] bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${bannerImg2})` }}>
            <div className='hero-overlay bg-[#00000080]'></div>
            <div className='hero-content text-[#fff]'>
              <div className='text-center'>
                <p className='text-base md:text-xl font-medium  mb-4 md:mb-8 uppercase'>
                  Build your next holiday trip with us
                </p>
                <h2 className='text-2xl font-gothic md:text-4xl lg:text-5xl font-medium  mb-4 md:mb-8'>
                  Create <span className='font-black'>Your Tour</span>
                </h2>
                <button className='uppercase text-base font-semibold p-3 border-2 border-color1'>
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
