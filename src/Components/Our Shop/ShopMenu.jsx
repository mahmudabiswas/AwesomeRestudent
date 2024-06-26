import React from "react";
import axios from "axios";
import UseAxiosSecure from "../Hooks/useAxiosSecure";
import UseCart from "../Hooks/useCart";
const ShopMenu = ({ item }) => {
  const { name, recipe, image, category, price, _id } = item;
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();
  const handleFoodCart = (food) => {
    const cartItem = {
      menuId: _id,
      // email:user.email,
      name,
      image,
      price,
    };
    // console.log(food);

    axiosSecure.post("/carts", cartItem).then((res) => {
      console.log(res.data);
      refetch();
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleFoodCart(item)}
              className="uppercase btn-outline border-0 border-b-4 btn my-4 justify-center m-auto flex"
            >
              "ADD TO CART"
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMenu;
