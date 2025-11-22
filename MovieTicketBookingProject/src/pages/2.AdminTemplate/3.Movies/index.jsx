import React from 'react'

const Movies = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>
            {/* Main content */}
            <div className="space-y-6">
                {/* Now Showing Movies */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Now Showing Movies</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Movie Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Duration</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Showtime</th>
                                    <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-blue-50 transition-colors duration-200">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Blockbuster A</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">120 min</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">10:00 AM</td>
                                    <td className="px-6 py-4 text-sm font-medium flex justify-end items-center gap-3">

                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg transition">
                                            Edit
                                        </button>

                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 rounded-lg transition">
                                            <i className="fi fi-rr-cross-circle text-lg"></i>
                                        </button>

                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-blue-50 text-emerald-500 hover:bg-blue-100 hover:text-emerald-600 rounded-lg transition">
                                            <i className="fa-regular fa-calendar"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors duration-200">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Comedy Weekend B</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">90 min</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">12:30 PM</td>
                                    <td className="px-6 py-4 text-sm font-medium flex justify-end items-center gap-3">
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg transition">
                                            Edit
                                        </button>
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-red-50 text-red-500 text-lg hover:bg-red-100 hover:text-red-600 rounded-lg transition">
                                            <i className="fi fi-rr-cross-circle"></i>
                                        </button>
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-blue-50 text-emerald-500 hover:bg-blue-100 hover:text-emerald-600 rounded-lg transition">
                                            <i className="fa-regular fa-calendar"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Upcoming Movies */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Upcoming Movies</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Movie Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Duration</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Showtime</th>
                                    <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-blue-50 transition-colors duration-200">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Blockbuster A</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">120 min</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">10:00 AM</td>
                                    <td className="px-6 py-4 text-sm font-medium flex justify-end items-center gap-3">
                                        {/* Edit */}
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg transition">
                                            Edit
                                        </button>
                                        {/* Delete */}
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 rounded-lg transition">
                                            <i className="fi fi-rr-cross-circle text-lg"></i>
                                        </button>
                                        {/* Calendar */}
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-blue-50 text-emerald-500 hover:bg-blue-100 hover:text-emerald-600 rounded-lg transition">
                                            <i className="fa-regular fa-calendar"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors duration-200">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Comedy Weekend B</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">90 min</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">12:30 PM</td>
                                    <td className="px-6 py-4 text-sm font-medium flex justify-end items-center gap-3">
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg transition">
                                            Edit
                                        </button>
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 rounded-lg transition">
                                            <i className="fi fi-rr-cross-circle text-lg"></i>
                                        </button>
                                        <button className="cursor-pointer flex items-center gap-1 px-2 py-1 bg-blue-50 text-emerald-500 hover:bg-blue-100 hover:text-emerald-600 rounded-lg transition">
                                            <i className="fa-regular fa-calendar"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Movies
