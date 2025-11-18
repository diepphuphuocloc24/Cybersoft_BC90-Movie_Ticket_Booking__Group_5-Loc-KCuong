import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-black text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                <img src="./img/logo.png" alt="FielDiamondCine Logo" className="h-10 w-auto object-contain" />

                <nav>
                    <ul className="flex justify-between items-center gap-10">
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red-400 text-xl font-bold transition-all duration-300"
                                        : "text-gray-300 hover:text-red-400 font-medium transition-all duration-300"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="movie-detail"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red-400 text-xl font-bold transition-all duration-300"
                                        : "text-gray-300 hover:text-red-400 font-medium transition-all duration-300"
                                }
                            >
                                Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="*"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red-400 text-xl font-bold transition-all duration-300"
                                        : "text-gray-300 hover:text-red-400 font-medium transition-all duration-300"
                                }
                            >
                                Cinemas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="buy-ticket"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red-400 text-xl font-bold transition-all duration-300"
                                        : "text-gray-300 hover:text-red-400 font-medium transition-all duration-300"
                                }
                            >
                                Buy Tickets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="*"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-red-400 text-xl font-bold transition-all duration-300"
                                        : "text-gray-300 hover:text-red-400 font-medium transition-all duration-300"
                                }
                            >
                                Promotions
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-4">
                    <span className="text-sm font-light text-gray-300 tracking-wide">
                        Hi, <strong className="font-semibold text-white">User</strong>
                    </span>

                    <img src="./img/avatarLogo.jpg" className='w-16 h-16 border rounded-full' alt="avatar" />

                    <button className="text-red-400 hover:text-red-500 transition duration-300 hidden md:block">
                        Sign Out
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
