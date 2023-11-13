// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const OrderOnline = () => {
  return (
    <div className="mb-20">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className="text-gray-100 text-center text-5xl -mt-20">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderOnline;
