import React from "react";
import Cover from "../../Shared/Cover/Cover";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import PizzaCategori from "./PizzaCategori";

const Pizza = () => {
  return (
    <div>
      <Cover
        img={pizza}
        title={"Pizza"}
        pra={`Lorem Ipsum has been the industry’s `}
      />
      <PizzaCategori />
    </div>
  );
};

export default Pizza;
