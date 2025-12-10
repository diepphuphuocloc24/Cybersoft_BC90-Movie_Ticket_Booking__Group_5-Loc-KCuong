import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const YourTicket = () => {
    const { state } = useLocation();

    console.logstate;

    return (
        <div className="bg-white text-black py-10 sm:py-12 md:py-14">
            <div className="container mx-auto max-w-2xl bg-gray-200 rounded-xl shadow-lg">

                <div className="w-full h-3 bg-gray-300 rounded-t-xl"></div>

                <div className="bg-white border-t border-b border-[#A40062] rounded-xl p-5 sm:p-6 md:p-8 flex flex-col gap-6">

                    <div className="bg-black p-4 sm:p-5 flex justify-center items-center rounded-lg">
                        <img src="/img/logo.png" alt="logo" className="w-20 sm:w-24 md:w-28" />
                    </div>

                    <div className="text-center space-y-1">
                        <p className="text-lg sm:text-xl font-semibold">Hello,</p>
                        <p className="text-sm sm:text-base text-gray-700">We confirm your movie ticket at our cinema.</p>
                    </div>

                    <div className="bg-gray-100 rounded-lg border border-gray-400 p-4 sm:p-5 flex flex-col items-center gap-3 text-center">
                        <h2 className="text-lg sm:text-xl font-semibold">Your Ticket Code</h2>

                        <p className="text-rose-600 font-bold text-xl sm:text-2xl tracking-wide">{state?.maLichChieu}</p>

                        <img src="/img/TicketQR.png" alt="TicketQR" className="w-32 sm:w-40 md:w-48" />

                        <p className="text-sm text-gray-700">Please present this QR code at the counter to receive your ticket.</p>

                        {state?.totalPayment && (
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">
                                Total Payment:{" "}
                                <span className="text-[#A40062]">
                                    {state?.totalPayment?.toLocaleString("vi-VN")} ₫
                                </span>
                            </p>
                        )}
                    </div>

                    <div className="flex justify-center mt-4">
                        <NavLink
                            to="/"
                            className="bg-[#A40062] hover:bg-[#8e0056] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all text-sm sm:text-base"
                        >
                            Back to Home
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default YourTicket
