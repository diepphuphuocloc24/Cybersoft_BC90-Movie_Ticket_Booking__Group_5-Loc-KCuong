import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HomeHeader from "./_components/1.Header/index.jsx";
import Footer from "./_components/2.Footer/index.jsx";

const HomeTemplate = () => {
    return (
        <div>
            <HomeHeader />

            <div className="pt-26">
                <Outlet />
            </div>

            <Footer />
        </div >
    );
};

export default HomeTemplate;
