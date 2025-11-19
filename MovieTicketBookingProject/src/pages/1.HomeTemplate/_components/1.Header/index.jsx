import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
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
                        {[
                            { to: "/", label: "Home" },
                            { to: "movie-detail", label: "Movies" },
                            { to: "*", label: "Cinemas" },
                            { to: "buy-ticket", label: "Buy Tickets" },
                            { to: "*", label: "Promotions" },
                        ].map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `relative text-lg transition-all duration-300 
                                ${isActive ? "text-red-400 font-semibold" : "text-gray-300 hover:text-red-400"}
                                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-red-400
                                after:w-0 hover:after:w-full after:transition-all after:duration-300
                                ${isActive ? "after:w-full" : ""}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center justify-center gap-4">
                    <span className="text-sm text-gray-400 tracking-wide">
                        Hi, <strong className="text-white font-semibold text-base">User</strong>
                    </span>


                    <div className="w-14 h-14 rounded-full border-2 border-red-400 overflow-hidden flex items-center justify-center">
                        <img
                            src="./img/avatarLogo.jpg"
                            alt="avatar"
                            className="w-[110%] h-[110%] object-cover transition-all duration-500 ease-out hover:scale-120 cursor-pointer"
                        />
                    </div>

                    <button className="text-red-400 hover:text-red-500 transition duration-300 hidden md:block cursor-pointer">
                        Sign Out
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
