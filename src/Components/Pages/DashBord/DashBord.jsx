import React from "react";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../Hooks/useCart";

const DashBord = () => {
  const [cart] = UseCart();
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashBord/userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBord/reservation">
              <FaCalendar />
              ReserVation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBord/review">
              <FaAd />
              Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBord/bookings">
              <FaList />
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBord/cart">
              <FaShoppingCart />
              MyCart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBord/allUsers">
              <FaUsers />
              All Users
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourShop">
              <FaShop />
              OurShop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBord;
