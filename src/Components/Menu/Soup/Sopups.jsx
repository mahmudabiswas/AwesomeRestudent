import React from "react";
import Cover from "../../Shared/Cover/Cover";
import soups from "../../../assets/menu/soup-bg.jpg";
import SopupCategori from "./SopupCategori";
const Sopups = () => {
  return (
    <div>
      <Cover
        img={soups}
        title={"Soups"}
        pra={`Lorem Ipsum has been the industry’s `}
      />
      <SopupCategori />
    </div>
  );
};

export default Sopups;
