import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import PizzaMenu from "./PizzaMenu";
import CustomButton from "../../Shared/CustomButton/CustomButton";

const PizzaCategori = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "pizza");
        setPopular(popularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <div className="grid md:grid-cols-2 gap-10 my-14">
        {popular.map((menu) => (
          <PizzaMenu key={menu.id} menu={menu} />
        ))}
      </div>
      <CustomButton text={"ORDER YOUR FAVOURITE Food"} />
    </div>
  );
};

export default PizzaCategori;
