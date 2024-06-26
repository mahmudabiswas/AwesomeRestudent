import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import MenuItems from "../../Shared/MenuItem/MenuItems";

const PopularMenu = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setPopular(popularItems);
      });
  }, []);
  return (
    <div>
      <SectionTitle subHeading={"Check it out-"} heading={"FROM OUR MENU"} />
      <div className="grid md:grid-cols-2 gap-10 my-14">
        {popular.map((menu) => (
          <MenuItems key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
