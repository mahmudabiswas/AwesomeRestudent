import React, { useEffect, useState } from "react";
import CategoriMenu from "./CategoriMenu";
import SectionTitle from "../../Shared/SectionTitle";
import CustomButton from "../../Shared/CustomButton/CustomButton";
import { Link } from "react-router-dom";
const MenuCategori = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "offered");
        setPopular(popularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <div className="grid md:grid-cols-2 gap-10 my-14">
        {popular.map((menu) => (
          <CategoriMenu key={menu.id} menu={menu} />
        ))}
      </div>

      <CustomButton text={"ORDER YOUR FAVOURITE FOOD"} />
    </div>
  );
};

export default MenuCategori;
