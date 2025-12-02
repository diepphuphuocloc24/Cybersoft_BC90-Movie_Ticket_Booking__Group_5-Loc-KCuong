import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    return (
        <header className="bg-black text-white shadow-lg shadow-red-900/10 fixed z-100 w-full py-6 duration-300">
            <div className="container mx-auto flex md:flex-row lg: flex-wrap lg:flex-nowrap items-center justify-between gap-4 lg:gap-0">
                {/* Logo */}
                <NavLink to="/" className="w-full md:max-w-[40%] lg:max-w-[24%] order-1 lg:order-1">
                    <img src="/img/logo.png" alt="FeelDiamondCine Logo" className="md:w-full w-[60%] mx-auto" />
                </NavLink>

                {/* Nav toggle (bars) */}
                <button
                    className="md:hidden order-2 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-100 hover:bg-red-200 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    <i className={`fa-solid fa-bars text-red-500 text-xl sm:text-2xl ${navOpen ? 'rotate-90 transition-transform duration-300' : ''}`}></i>
                </button>

                {/* User toggle */}
                <button
                    className="md:hidden order-3 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={() => setUserOpen(!userOpen)}
                >
                    <i className={`fi fi-sr-user text-gray-700 text-xl sm:text-2xl ${userOpen ? 'scale-110 transition-transform duration-300' : ''}`}></i>
                </button>

                {/* Nav menu */}
                <nav
                    className={`w-full lg:w-auto order-4 md:order-3 lg:order-2
                        ${navOpen ? "flex" : "hidden"} 
                        md:flex lg:flex flex-col lg:flex-row`}
                >
                    <ul className="flex flex-row justify-between items-center gap-4 lg:gap-10 w-full">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                                    }`
                                }
                            >
                                <i className="fa-solid fa-house text-2xl group-hover:text-red-400"></i>
                                <span className="text-sm mt-1 group-hover:text-red-400">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/movie-list"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                                    }`
                                }
                            >
                                <i className="fa-solid fa-film text-2xl group-hover:text-red-400"></i>
                                <span className="text-sm mt-1 group-hover:text-red-400">Movies</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="*"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                                    }`
                                }
                            >
                                <i className="fi fi-sr-land-layer-location text-2xl group-hover:text-red-400"></i>
                                <span className="text-sm mt-1 group-hover:text-red-400">Cinemas</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="*"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                                    }`
                                }
                            >
                                <i className="fi fi-rs-ticket text-2xl text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500"></i>
                                <span className="text-sm mt-1 group-hover:text-red-400">Buy Tickets</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="*"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                                    }`
                                }
                            >
                                <i className="fi fi-rs-gift-box-benefits text-2xl group-hover:text-red-400"></i>
                                <span className="text-sm mt-1 group-hover:text-red-400">Promotions</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* User buttons */}
                <div
                    className={`w-full md:w-auto order-5 md:order-2 lg:order-3 mt-2 lg:mt-0 gap-2 ${userOpen ? "flex" : "hidden"} 
                    md:flex lg:flex flex-col sm:flex-row lg:flex-row`}
                >
                    <button
                        data-modal-target="login-modal"
                        data-modal-toggle="login-modal"
                        className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 cursor-pointer"
                    >
                        Login
                    </button>
                    <button
                        data-modal-target="register-modal"
                        data-modal-toggle="register-modal"
                        className="px-4 py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300 cursor-pointer"
                    >
                        Register
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
