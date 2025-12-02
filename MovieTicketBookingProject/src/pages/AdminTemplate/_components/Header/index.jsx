import React from "react";
import { NavLink } from "react-router-dom";

const AdminHeader = ({ collapsed = false }) => {
    return (
        <aside className="h-full bg-black text-white flex flex-col shadow-2xl">
            <div className="py-6 flex items-center justify-center">
                <img src="/img/logo.png" alt="Logo" className="w-[85%]" />
            </div>

            <nav className="flex flex-col py-5 gap-3">
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-4 text-lg transition ${isActive ? "bg-white text-black" : "hover:bg-[#AAAAAA] hover:text-black"
                        }`
                    }
                >
                    <i className="fi fi-br-stats"></i>
                    {!collapsed && <span>Dashboard</span>}
                </NavLink>

                <NavLink
                    to="/admin/movies"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-4 text-lg transition ${isActive ? "bg-white text-black" : "hover:bg-[#AAAAAA] hover:text-black"
                        }`
                    }
                >
                    <i className="fi fi-ss-clapper-open"></i>
                    {!collapsed && <span>Movies</span>}
                </NavLink>

                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-4 text-lg transition ${isActive ? "bg-white text-black" : "hover:bg-[#AAAAAA] hover:text-black"
                        }`
                    }
                >
                    <i className="fi fi-sr-user"></i>
                    {!collapsed && <span>Users</span>}
                </NavLink>

                <NavLink
                    to="/admin/settings"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-4 text-lg transition ${isActive ? "bg-white text-black" : "hover:bg-[#AAAAAA] hover:text-black"
                        }`
                    }
                >
                    <i className="fi fi-rr-settings-sliders"></i>
                    {!collapsed && <span>Settings</span>}
                </NavLink>

                <NavLink
                    to="*"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-4 text-lg transition ${isActive ? "bg-white text-black" : "hover:bg-[#AAAAAA] hover:text-black"
                        }`
                    }
                >
                    <i className="fi fi-rs-sign-out-alt"></i>
                    {!collapsed && <span>Logout</span>}
                </NavLink>
            </nav>
        </aside>
    );
};

export default AdminHeader;
