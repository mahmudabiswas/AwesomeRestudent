import React from "react";
import Banner from "./Banner/Banner";
import Categori from "./Categori";
import PopularMenu from "./PopularMenu/PopularMenu";
import Fetured from "./Fetured/Fetured";
import Testimonial from "./Testimonial/Testimonial";

const Main = () => {
  return (
    <div>
      <Banner />
      <Categori />
      <PopularMenu />
      <Fetured />
      <Testimonial />
    </div>
  );
};

export default Main;
