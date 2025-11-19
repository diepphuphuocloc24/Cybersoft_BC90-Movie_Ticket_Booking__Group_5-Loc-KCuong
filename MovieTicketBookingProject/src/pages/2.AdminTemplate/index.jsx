import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./_components/1.Header";

const AdminTemplate = () => {
    return (
        <div className="flex min-h-screen ">
            <Header />

            <div className="flex-5 overflow-y-auto">
                <header className="bg-gray-100 shadow p-4 flex justify-between items-center sticky top-0 z-10">
                    <div className="flex items-center justtify-btween gap-2">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="px-4 py-2 w-64 md:w-80 bg-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer">
                            Search
                        </button>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button className="relative p-2 bg-white rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                            💬
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="relative p-2 bg-white rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                            🔔
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <span className="text-gray-700">
                            Hi, <strong className="text-gray-900 font-semibold">Admin</strong>
                        </span>
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer">
                            <img
                                src="./img/avatarLogo.jpg"
                                alt="avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="p-2 bg-white rounded-lg hover:bg-gray-200 transition duration-300 cursor-pointer">
                            ⚙️
                        </button>
                    </div>
                </header>

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminTemplate;
