import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/Navbar/NavBar";
import ScrollTop from "../Shared/ScrollTop";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Amazing Restudent | home</title>
      </Helmet>
      <ScrollTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
