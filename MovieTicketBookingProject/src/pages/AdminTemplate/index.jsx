import React, { useState, useEffect, useRef } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminHeader from "./_components/Header";
import AdminFooter from "./_components/Footer";

const AdminTemplate = () => {
    const { data } = useSelector((state) => state.authLoginReducer);

    const [openSidebar, setOpenSidebar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!data) return <Navigate to="/auth" />;

    return (
        <>
            <div className="flex min-h-screen bg-gray-200">
                {/* SIDEBAR DESKTOP (FULL) - lg trở lên */}
                <aside className="hidden lg:flex flex-col w-55 h-screen bg-black text-white shadow-2xl sticky top-0">
                    <AdminHeader />
                </aside>

                {/* SIDEBAR COLLAPSE (ICON ONLY) - md đến lg */}
                <aside className="hidden md:flex lg:hidden flex-col w-15 h-screen bg-black text-white shadow-2xl sticky top-0">
                    <AdminHeader collapsed />
                </aside>

                {/* SIDEBAR MOBILE (DRAWER) - dưới md */}
                <aside
                    className={`fixed inset-y-0 left-0 w-55 bg-black z-50 transform transition-transform md:hidden 
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <AdminHeader />
                </aside>

                {/* OVERLAY MOBILE */}
                {openSidebar && (
                    <div
                        className="fixed inset-0 bg-black/40 md:hidden"
                        onClick={() => setOpenSidebar(false)}
                    />
                )}

                {/* Content Area */}
                <div className="flex-1 flex flex-col">
                    {/* Top Bar */}
                    <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-10">
                        {/* Hamburger mobile */}
                        <button
                            className="md:hidden text-gray-600 text-2xl mr-2 flex-shrink-0"
                            onClick={() => setOpenSidebar(true)}
                        >
                            <i className="fi fi-br-menu-burger"></i>
                        </button>

                        {/* Search */}
                        <div className="flex-1 flex items-center gap-2 min-w-0">
                            <div className="relative flex-1 min-w-0 max-w-xs sm:max-w-sm md:max-w-md">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 w-full bg-gray-100 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 shadow-sm min-w-0"
                                />
                            </div>
                            <button className="px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 flex-shrink-0">
                                Search
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-2 ml-2 flex-shrink-0 relative">
                            {/* Desktop Bell + Message */}
                            <div className="hidden sm:flex items-center gap-2">
                                <button className="relative p-2 cursor-pointer flex-shrink-0">
                                    <i className="fa-solid fa-bell text-gray-600 text-lg animate-bell hover:text-red-500"></i>
                                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                                </button>
                                <button className="relative p-2 cursor-pointer flex-shrink-0">
                                    <i className="fi fi-sr-comment-alt-dots text-gray-600 text-lg animate-breath hover:text-cyan-500"></i>
                                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                                </button>
                            </div>

                            {/* Greeting + Avatar */}
                            <div className="flex items-center gap-2 relative">
                                <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">
                                    Hi, <strong className="text-black font-semibold">Admin</strong>
                                </span>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
                                    <img
                                        src="/img/avatarLogo.jpg"
                                        alt="avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Chevron Dropdown toggle (mobile <640px) */}
                                <button
                                    className="sm:hidden p-1 text-gray-600 hover:text-black flex-shrink-0"
                                    onClick={() => setDropdownOpen((prev) => !prev)}
                                >
                                    <i className={`fa-solid fa-chevron-down transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}></i>
                                </button>

                                {/* Dropdown mobile */}
                                <div
                                    ref={dropdownRef}
                                    className={`absolute top-full right-0 mt-5 w-44 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col p-2 z-50 transition-all duration-200 transform origin-top-right
        ${dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"} sm:hidden`}
                                >
                                    {/* Notifications */}
                                    <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded relative cursor-pointer">
                                        <i className="fa-solid fa-bell text-gray-600 text-lg animate-bell"></i>
                                        <span className="absolute top-0 right-31 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                                        <span>Notifications</span>
                                    </button>

                                    {/* Messages */}
                                    <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded relative cursor-pointer">
                                        <i className="fi fi-sr-comment-alt-dots text-gray-600 text-lg animate-breath"></i>
                                        <span className="absolute top-0 right-31 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                                        <span>Messages</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="flex-1 p-4 sm:p-6 md:p-6 lg:p-8 xl:p-12">
                        <Outlet />
                    </main>

                    <AdminFooter />
                </div>
            </div>
        </>
    );
};

export default AdminTemplate;
