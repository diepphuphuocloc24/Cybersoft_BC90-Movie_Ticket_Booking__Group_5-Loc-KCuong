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
        </div>

    )
}

export default Dashboard
