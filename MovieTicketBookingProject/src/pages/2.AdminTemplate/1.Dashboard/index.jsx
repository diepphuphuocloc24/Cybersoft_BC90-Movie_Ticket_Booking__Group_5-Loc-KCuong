import React, { useState, useEffect, useCallback } from 'react'
import CountUp from 'react-countup';

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                    <CountUp
                        start={0}
                        end={1250000}
                        duration={3}
                        separator=","
                        prefix="$"
                        enableScrollSpy={true}
                        className="text-2xl font-bold text-gray-900 mt-1"></CountUp>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
                    <p className="text-sm font-medium text-gray-500">Tickets Sold</p>
                    <CountUp
                        start={0}
                        end={50000}
                        duration={3}
                        separator=","
                        enableScrollSpy={true}
                        className="text-2xl font-bold text-gray-900 mt-1"></CountUp>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <p className="text-sm font-medium text-gray-500">Movies Showing</p>
                    <CountUp
                        start={0}
                        end={75}
                        duration={3}
                        separator=","
                        enableScrollSpy={true}
                        className="text-2xl font-bold text-gray-900 mt-1"></CountUp>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
                    <p className="text-sm font-medium text-gray-500">New Users</p>
                    <CountUp
                        start={0}
                        end={1200}
                        duration={3}
                        separator=","
                        enableScrollSpy={true}
                        className="text-2xl font-bold text-gray-900 mt-1"></CountUp>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
