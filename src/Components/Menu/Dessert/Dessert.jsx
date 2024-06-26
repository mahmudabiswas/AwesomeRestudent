import React from "react";
import Cover from "../../Shared/Cover/Cover";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import DessertCategori from "./DessertCategori";

const Dessert = () => {
  return (
    <div>
      <Cover
        img={dessert}
        title={"DESSERTS"}
        pra={`Lorem Ipsum has been the industry’s `}
      />
      <DessertCategori />
    </div>
  );
};

export default Dessert;
