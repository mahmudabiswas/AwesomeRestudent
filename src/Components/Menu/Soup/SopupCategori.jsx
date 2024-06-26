import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import CustomButton from "../../Shared/CustomButton/CustomButton";
import SoupMenu from "./SoupMenu";
const SopupCategori = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "soup");
        setPopular(popularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <div className="grid md:grid-cols-2 gap-10 my-14">
        {popular.map((menu) => (
          <SoupMenu key={menu.id} menu={menu} />
        ))}
      </div>
      <CustomButton text={"ORDER YOUR FAVOURITE Food"} />
    </div>
  );
};

export default SopupCategori;
