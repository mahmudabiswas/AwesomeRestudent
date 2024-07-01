import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Home/Main";
import Categori from "../Home/Categori";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Fetured from "../Home/Fetured/Fetured";
import Menu from "../Menu/Menu/Menu";
import OurSho from "../Our Shop/OurSho";
import Login from "../Pages/Login";
import DashBord from "../Pages/DashBord/DashBord";
import Cart from "../Pages/DashBord/Cart";
import SignUp from "../Pages/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRoutes from "../Shared/PrivateRoutes";
import AllUsers from "../Pages/DashBord/AllUsers";
import AddItems from "../Pages/AddItems/AddItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/categori",
        element: <Categori />,
      },
      {
        path: "/popularMenu",
        element: <PopularMenu />,
      },
      {
        path: "/fetured",
        element: <Fetured />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/ourShop",
        element: <OurSho />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashBord",
    element: <DashBord />,
    children: [
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "addItems",
        element: <AddItems />,
      },
    ],
  },
]);

export default router;
