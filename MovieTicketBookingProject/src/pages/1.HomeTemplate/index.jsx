import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import HomeHeader from "./_components/1.Header/index.jsx";
import Footer from "./_components/2.Footer/index.jsx";
import BackToTopButton from './_components/BackToTop/index.jsx'

const HomeTemplate = () => {
    return (
        <div>
            <HomeHeader />

            <div className="pt-26">
                <Outlet />
            </div>

            <Footer />
            <BackToTopButton />
        </div >
    );
};

export default HomeTemplate;
