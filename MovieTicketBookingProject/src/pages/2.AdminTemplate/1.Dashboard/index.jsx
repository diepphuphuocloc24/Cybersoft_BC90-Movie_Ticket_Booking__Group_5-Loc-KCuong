import React, { useState, useEffect } from 'react';

import CountUp from 'react-countup';

import {
    BarChart, Bar,
    LineChart, Line,
    PieChart, Pie, Cell,
    AreaChart, Area,
    XAxis, YAxis,
    CartesianGrid, Tooltip
} from "recharts";

const Dashboard = () => {
    const [messagesBuy, setMessagesBuy] = useState([]);

    const revenueData = [
        { day: 'Mon', value: 2000 },
        { day: 'Tue', value: 3000 },
        { day: 'Wed', value: 2500 },
        { day: 'Thu', value: 4000 },
        { day: 'Fri', value: 3500 },
        { day: 'Sat', value: 5000 },
        { day: 'Sun', value: 6500 }
    ];

    const ticketsData = [
        { movie: 'Avengers', sold: 120 },
        { movie: 'Dune 2', sold: 80 },
        { movie: 'Spider-Man', sold: 100 },
        { movie: 'Oppenheimer', sold: 60 },
    ];

    const moviesData = [
        { name: 'Action', value: 40 },
        { name: 'Drama', value: 30 },
        { name: 'Comedy', value: 20 },
        { name: 'Horror', value: 10 },
    ];

    const usersData = [
        { day: 'Mon', users: 5 },
        { day: 'Tue', users: 8 },
        { day: 'Wed', users: 6 },
        { day: 'Thu', users: 10 },
        { day: 'Fri', users: 7 },
    ];

    const bookingData = [
        { day: 'Mon', bookings: 20 },
        { day: 'Tue', bookings: 35 },
        { day: 'Wed', bookings: 25 },
        { day: 'Thu', bookings: 40 },
        { day: 'Fri', bookings: 50 },
        { day: 'Sat', bookings: 70 },
        { day: 'Sun', bookings: 60 },
    ];

    const topMovies = [
        { name: 'Avengers', ticketsSold: 120 },
        { name: 'Dune 2', ticketsSold: 80 },
        { name: 'Spider-Man', ticketsSold: 100 },
        { name: 'Oppenheimer', ticketsSold: 60 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    useEffect(() => {
        const interval = setInterval(() => {
            setMessagesBuy((previousMessage) => {
                if (previousMessage.length >= 6) {
                    return previousMessage;
                } else {
                    return [...previousMessage, "A customer just booked a ticket!"];
                }
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                    <CountUp start={0} end={12500} duration={3} separator="," prefix="$" enableScrollSpy preserveValue className="text-2xl font-bold text-gray-900 mt-1" />
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-medium text-gray-500">Tickets Sold</p>
                    <CountUp start={0} end={500} duration={3} separator="," enableScrollSpy preserveValue className="text-2xl font-bold text-gray-900 mt-1" />
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-medium text-gray-500">Movies Showing</p>
                    <CountUp start={0} end={5} duration={3} separator="," enableScrollSpy preserveValue className="text-2xl font-bold text-gray-900 mt-1" />
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-medium text-gray-500">New Users</p>
                    <CountUp start={0} end={50} duration={3} separator="," enableScrollSpy preserveValue className="text-2xl font-bold text-gray-900 mt-1" />
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-medium text-gray-500">Active Screens</p>
                    <CountUp start={0} end={8} duration={3} enableScrollSpy preserveValue className="text-2xl font-bold text-gray-900 mt-1" />
                </div>
                <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-pink-500 hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-medium text-gray-500">Bookings Today</p>
                    <CountUp start={0} end={120} duration={3} enableScrollSpy preserveValue className="text-2xl font-bold text-gray-900 mt-1" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-5/8 flex flex-col gap-6">
                    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                        <BarChart width="100%" height={250} data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#3b82f6" />
                        </BarChart>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">Tickets Sold per Movie</h3>
                        <LineChart width="100%" height={250} data={ticketsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="movie" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="sold" stroke="#10b981" />
                        </LineChart>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">Movies Genre Distribution</h3>
                        <PieChart width="100%" height={250}>
                            <Pie data={moviesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                {moviesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">New Users</h3>
                        <LineChart width="100%" height={250} data={usersData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="users" stroke="#f87171" />
                        </LineChart>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">Booking Trends (Last 7 Days)</h3>
                        <AreaChart width="100%" height={250} data={bookingData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="bookings" stroke="#f59e0b" fill="#fde68a" />
                        </AreaChart>
                    </div>
                </div>

                <div className="w-full lg:w-3/8 flex flex-col gap-6">
                    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
                        <h2 className="text-xl font-semibold mb-3 border-b pb-2">Recent Updates</h2>
                        <div className="flex flex-col gap-2 h-40 overflow-y-auto mt-2 pr-2">
                            {messagesBuy.map((message, index) => (
                                <div key={index} className="flex items-center text-gray-800 px-3 py-1 gap-2">
                                    <i className="fas fa-circle text-green-500 text-xs"></i>
                                    <span>{message}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
                        <h2 className="text-xl font-semibold mb-3 border-b pb-2">Top Movies</h2>
                        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto mt-2 pr-2">
                            {topMovies.map((movie, index) => (
                                <div key={index} className="flex justify-between items-center px-3 py-1 text-gray-800">
                                    <span>{movie.name}</span>
                                    <span className="font-semibold">{movie.ticketsSold}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
