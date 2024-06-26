import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./testimonial.css";

// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../Shared/SectionTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rivew")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <h1>{testimonial.length}</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonial.map((tes) => (
          <SwiperSlide key={tes._id}>
            <div className="m-24 flex flex-col items-center ">
              <Rating style={{ maxWidth: 180 }} value={tes.rating} readOnly />
              <p>{tes.details}</p>
              <h3 className="text-2xl text-orange-400">{tes.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
