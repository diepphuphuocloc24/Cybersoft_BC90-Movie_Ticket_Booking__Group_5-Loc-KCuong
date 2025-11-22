import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HomeHeader = () => {
    return (
        <header className="bg-black text-white shadow-lg shadow-red-900/10 fixed z-10 w-full py-6">
            <div className="container mx-auto flex justify-between items-center ">
                <NavLink to="/"><img
                    src="./img/logo.png"
                    alt="FielDiamondCine Logo"
                    className="h-12 w-auto object-contain hover:opacity-90 transition"
                /></NavLink>

                <nav>
                    <ul className="flex items-center gap-10">

                        {/* HOME */}
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 
                    ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"}`
                                }
                            >
                                <div>
                                    <i className="fa-solid fa-house text-2xl group-hover:text-red-400"></i>
                                </div>
                                <span className="text-sm mt-1 group-hover:text-red-400">Home</span>
                                <span
                                    className={({ isActive }) =>
                                        `mt-1 h-0.5 bg-red-400 transition-all duration-300 
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                                    }
                                ></span>
                            </NavLink>
                        </li>

                        {/* MOVIES */}
                        <li>
                            <NavLink
                                to="/movie-list"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 
                    ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"}`
                                }
                            >
                                <div>
                                    <i className="fa-solid fa-film text-2xl group-hover:text-red-400"></i>
                                </div>
                                <span className="text-sm mt-1 group-hover:text-red-400">Movies</span>
                                <span
                                    className={({ isActive }) =>
                                        `mt-1 h-0.5 bg-red-400 transition-all duration-300 
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                                    }
                                ></span>
                            </NavLink>
                        </li>

                        {/* CINEMAS */}
                        <li>
                            <NavLink
                                to="*"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 
                    ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"}`
                                }
                            >
                                <div>
                                    <i className="fi fi-sr-land-layer-location text-2xl group-hover:text-red-400"></i>
                                </div>
                                <span className="text-sm mt-1 group-hover:text-red-400">Cinemas</span>
                                <span
                                    className={({ isActive }) =>
                                        `mt-1 h-0.5 bg-red-400 transition-all duration-300 
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                                    }
                                ></span>
                            </NavLink>
                        </li>

                        {/* BUY TICKETS */}
                        <li>
                            <NavLink
                                to="/buy-ticket"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 
                    ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"}`
                                }
                            >
                                <div>
                                    <i className="fi fi-rs-ticket text-2xl text-transparent bg-clip-text 
           bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"></i>
                                </div>
                                <span className="text-sm mt-1 group-hover:text-red-400">Buy Tickets</span>
                                <span
                                    className={({ isActive }) =>
                                        `mt-1 h-0.5 bg-red-400 transition-all duration-300 
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                                    }
                                ></span>
                            </NavLink>
                        </li>

                        {/* PROMOTIONS */}
                        <li>
                            <NavLink
                                to="*"
                                className={({ isActive }) =>
                                    `group flex flex-col items-center transition-all duration-300 
                    ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"}`
                                }
                            >
                                <div>
                                    <i className="fi fi-rs-gift-box-benefits text-2xl group-hover:text-red-400"></i>
                                </div>
                                <span className="text-sm mt-1 group-hover:text-red-400">Promotions</span>
                                <span
                                    className={({ isActive }) =>
                                        `mt-1 h-0.5 bg-red-400 transition-all duration-300 
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                                    }
                                ></span>
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                <div className="flex items-center justify-center gap-4">
                    <button data-modal-target="login-modal" data-modal-toggle="login-modal" className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 cursor-pointer">
                        Login
                    </button>
                    <button data-modal-target="register-modal" data-modal-toggle="register-modal" className="px-4 py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-white transition duration-300 cursor-pointer">
                        Register
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
