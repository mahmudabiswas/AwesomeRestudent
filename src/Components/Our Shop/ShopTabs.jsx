import ShopMenu from "./ShopMenu";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ShopTabs.css";

// import required modules
import { Pagination } from "swiper/modules";
const ShopTabs = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 3) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-14">
            {items.map((item) => (
              <ShopMenu key={item.id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShopTabs;
