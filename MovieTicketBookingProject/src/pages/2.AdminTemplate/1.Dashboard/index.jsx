import React from 'react'

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">$1,250,000</p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
                    <p className="text-sm font-medium text-gray-500">Tickets Sold</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">50,000</p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <p className="text-sm font-medium text-gray-500">Movies Showing</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">75</p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
                    <p className="text-sm font-medium text-gray-500">New Users</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">1,200</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Upcoming Movies</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Movie Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Showtime</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Blockbuster A</td>
                                <td className="px-6 py-4 text-sm text-gray-500">120 min</td>
                                <td className="px-6 py-4 text-sm text-gray-500">10:00 AM</td>
                                <td className="px-6 py-4 text-right text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Comedy Weekend B</td>
                                <td className="px-6 py-4 text-sm text-gray-500">90 min</td>
                                <td className="px-6 py-4 text-sm text-gray-500">12:30 PM</td>
                                <td className="px-6 py-4 text-right text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
