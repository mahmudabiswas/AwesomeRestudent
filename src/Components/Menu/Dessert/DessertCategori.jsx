import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import CustomButton from "../../Shared/CustomButton/CustomButton";
import DessertMenuItems from "./DessertMenuItems";

const DessertCategori = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "dessert");
        setPopular(popularItems);
      });
  }, []);
  return (
    <div>
      <div>
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
        <div className="grid md:grid-cols-2 gap-10 my-14">
          {popular.map((menu) => (
            <DessertMenuItems key={menu.id} menu={menu} />
          ))}
        </div>
        <CustomButton text={"ORDER YOUR FAVOURITE Food"} />
      </div>
    </div>
  );
};

export default DessertCategori;
