import React from "react";

const SaladMenu = ({ menu }) => {
  const { name, recipe, image, category, price } = menu;
  return (
    <div>
      <div className="flex space-x-4">
        <img
          src={image}
          className="w-[100px]"
          style={{ borderRadius: "0px 200px 200px" }}
          alt=""
        />
        <div>
          <h1 className="uppercase">{name}---------</h1>
          <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};
export default SaladMenu;
