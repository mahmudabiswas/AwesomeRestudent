import React from "react";
import Cover from "../../Shared/Cover/Cover";
import SaladCategori from "./SaladCategori";
import salad from "../../../assets/menu/salad-bg.jpg";

const Salad = () => {
  return (
    <div>
      <Cover
        img={salad}
        title={"Salads"}
        pra={`Lorem Ipsum has been the industry’s `}
      />
      <SaladCategori />
    </div>
  );
};

export default Salad;
