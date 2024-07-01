import React from "react";
import Cover from "../Shared/Cover/Cover";
import shop from "../../assets/shop/shop.jpg";
import ShopCategori from "./ShopCategori";
import { Helmet } from "react-helmet-async";

const OurSho = () => {
  return (
    <div>
      <Helmet>
        <title>Amazing Restudent | OurShop</title>
      </Helmet>
      <Cover
        img={shop}
        title={"OUR SHOP"}
        pra={`Would you link to try dish `}
      />
      <div className="max-w-screen-xl m-auto">
        {" "}
        <ShopCategori />
      </div>
    </div>
  );
};

export default OurSho;
