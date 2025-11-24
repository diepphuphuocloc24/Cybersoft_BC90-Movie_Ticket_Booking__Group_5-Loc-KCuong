import React from 'react'

const Movies = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-2/3">
                    <input
                        type="text"
                        placeholder="Search movie..."
                        className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
                    />
                    <button className="flex items-center gap-2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer">
                        <i class="fi fi-rr-bars-filter"></i>
                        Filter
                    </button>
                </div>
                <button className="w-full md:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow cursor-pointer">
                    Add Movie
                </button>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Now Showing Movies</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Poster</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Movie Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Duration</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Showtime</th>
                                    <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">1</td>
                                    <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                                        <img src="https://via.placeholder.com/50x70" alt="Movie Poster" className="w-12 h-16 object-cover rounded" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">Example Movie</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">120 min</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">7:00 PM</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium flex justify-center items-center gap-2">
                                        <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Edit</button>
                                        <button className="text-red-600 hover:text-red-900 cursor-pointer">Delete</button>
                                        <button className="text-green-600 hover:text-green-800 p-1 rounded-full cursor-pointer">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Upcoming Movies</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Poster</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Movie Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Duration</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Showtime</th>
                                    <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">2</td>
                                    <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                                        <img src="https://via.placeholder.com/50x70" alt="Movie Poster" className="w-12 h-16 object-cover rounded" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">Upcoming Movie</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">110 min</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer">9:00 PM</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium flex justify-center items-center gap-2">
                                        <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Edit</button>
                                        <button className="text-red-600 hover:text-red-900 cursor-pointer">Delete</button>
                                        <button className="text-green-600 hover:text-green-800 p-1 rounded-full cursor-pointer">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
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
