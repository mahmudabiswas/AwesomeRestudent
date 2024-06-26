import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Categori.css";

// images
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../Shared/SectionTitle";

const Categori = () => {
  return (
    <div>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20 "
      >
        <SwiperSlide>
          <img src={img1} alt="" className="relative" />
          <h1 className="text-black absolute uppercase text-4xl bottom-16">
            salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} alt="" className="relative" />
          <h1 className="text-white absolute uppercase text-4xl bottom-16">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img3} alt="" className="relative" />
          <h1 className="text-white absolute uppercase text-4xl bottom-16">
            soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img4} alt="" className="relative" />
          <h1 className="text-white absolute uppercase text-4xl bottom-16">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} alt="" className="relative" />
          <h1 className="text-black absolute uppercase text-4xl bottom-16">
            salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categori;
