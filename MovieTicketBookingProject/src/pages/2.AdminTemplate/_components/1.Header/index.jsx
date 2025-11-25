import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <aside className="flex-1 bg-black text-white flex flex-col shadow-2xl text-xl">
            <div className="py-6 px-2 text-2xl font-extrabold text-blue-400 flex items-center justify-center">
                <img src="./img/logo.png" alt="Logo" />
            </div>

            <nav className="flex flex-col py-8 gap-5">
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3"><i className="fi fi-br-stats"></i></span> Dashboard
                </NavLink>

                <NavLink
                    to="/admin/movies"
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive
                            ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3"><i className="fi fi-ss-clapper-open"></i></span> Movies
                </NavLink>

                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        `flex items-center p-4 transition duration-150 ${isActive
                            ? "bg-white text-black"
                            : "hover:bg-gray-300 hover:text-black text-white"
                        }`
                    }
                >
                    <span className="mr-3"><i className="fi fi-sr-user"></i></span> Users
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
                    <span className="mr-3"><i className="fi fi-rr-settings-sliders"></i></span> Settings
                </NavLink>
            </nav>
        </aside>
    )
}

export default AdminHeader
