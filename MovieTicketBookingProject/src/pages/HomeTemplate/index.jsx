import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import HomeHeader from "./_components/Header/index.jsx";
import Footer from "./_components/Footer/index.jsx";
import BackToTopButton from './_components/BackToTop/index.jsx'

const HomeTemplate = () => {
    return (
        <div>
            <HomeHeader />

            {/* LOGIN MODAL */}
            <div id="login-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* MAIN CONTENT */}
                    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-900 rounded-xl shadow-lg text-white">
                        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
                            />

                            <button
                                type="submit"
                                className="mt-4 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
                            >
                                Login
                            </button>
                        </form>

                        <p className="text-gray-400 text-center my-4">or</p>

                        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                            <button className="flex-1 flex items-center justify-center gap-3 py-3 bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer">
                                <i className="fa-brands fa-google"></i>
                                Google
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-3 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                                <i className="fa-brands fa-facebook"></i>
                                Facebook
                            </button>
                        </div>

                        <p className="text-gray-400 text-center mt-6">
                            Don&apos;t have an account?{" "}
                            <button className="text-red-500 font-semibold hover:underline cursor-pointer">
                                Register
                            </button>
                        </p>
                    </div>

                </div>
            </div>

            {/* REGISTER MODAL */}
            <div id="register-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* MAIN CONTENT */}
                    <div className="max-w-md mx-auto mt-20 p-8 bg-gray-900 rounded-xl shadow-lg text-white">
                        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
                            />

                            <button
                                type="submit"
                                className="mt-4 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
                            >
                                Register
                            </button>
                        </form>

                        <p className="text-gray-400 text-center mt-6">
                            Already have an account?{" "}
                            <button className="text-red-500 font-semibold hover:underline cursor-pointer">
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-26">
                <Outlet />
            </div>

            <Footer />
            <BackToTopButton />
        </div >
    );
};

export default HomeTemplate;
