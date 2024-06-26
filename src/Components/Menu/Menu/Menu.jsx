import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import MenuCategori from "../MenuCategori/MenuCategori";
import Dessert from "../Dessert/Dessert";
import Pizza from "../Pizza/Pizza";
import Salad from "../Salad/Salad";
import Sopups from "../Soup/Sopups";
import { Link } from "react-router-dom";
import CustomButton from "../../Shared/CustomButton/CustomButton";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Amazing Restudent | menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"OUR MENU"}
        pra={"Would you like to try a dish"}
      />
      <MenuCategori />
      <Dessert />
      <Pizza />
      <Salad />
      <Sopups />
    </div>
  );
};

export default Menu;
