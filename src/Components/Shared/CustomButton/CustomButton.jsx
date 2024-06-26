import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ text }) => {
  return (
    <div>
      <Link to="/ourShop">
        <button className="uppercase btn-outline border-0 border-b-4 btn my-4 justify-center m-auto flex ">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
