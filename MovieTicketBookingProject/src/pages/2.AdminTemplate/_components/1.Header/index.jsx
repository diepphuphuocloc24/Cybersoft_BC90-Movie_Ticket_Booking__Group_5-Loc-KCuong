import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <aside className="flex-1 bg-black text-white flex flex-col shadow-2xl">
            <div className="py-6 px-2 text-2xl font-extrabold text-blue-400 flex items-center justify-center">
                <img src="./img/logo.png" alt="Logo" />
            </div>

            <nav className="flex flex-col py-8 gap-4">
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3">📊</span> Dashboard
                </NavLink>

                <NavLink
                    to="*"
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive
                            ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3">🎬</span> Movies
                </NavLink>

                <NavLink
                    to="*"
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive
                            ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3">🕒</span> Schedule
                </NavLink>

                <NavLink
                    to="users"
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive
                            ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3">👤</span> Users
                </NavLink>

                <NavLink
                    to="*"
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive
                            ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3">📈</span> Settings
                </NavLink>
            </nav>
        </aside>
    )
}

export default Header
