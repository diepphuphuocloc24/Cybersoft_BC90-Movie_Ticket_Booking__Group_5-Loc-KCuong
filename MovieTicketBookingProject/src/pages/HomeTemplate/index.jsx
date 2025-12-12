import React, { useState, useEffect, memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HomeHeader from "./_components/Header/index.jsx";
import Footer from "./_components/Footer/index.jsx";
import BackToTopButton from "./_components/BackToTop/index.jsx";
import Login from "./Login/index.jsx";
import Register from "./Register/index.jsx";

const HomeTemplate = () => {
  return (
    <div>
      <HomeHeader />

      <div className="lg:pt-26 md:pt-38 sm:pt-38 pt-37">
        <Outlet />
      </div>

      <Footer />

      <BackToTopButton />
    </div>
  );
};

export default memo(HomeTemplate);
