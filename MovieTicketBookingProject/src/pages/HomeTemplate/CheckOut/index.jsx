import React from 'react'
import { NavLink } from 'react-router-dom'

const CheckOut = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-14 px-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-xl border border-gray-100 transition-all hover:shadow-2xl">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-black">Review & Payment</h1>
                            <p className="text-sm text-gray-500 mt-1">Verify your details and complete your order.</p>
                        </div>

                        <div className="text-right bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-xs text-gray-500">Showtime</p>
                            <p className="font-semibold text-gray-700">Dec 05, 2025 - 19:30</p>
                        </div>
                    </div>

                    <div className="mt-10 border border-gray-100 rounded-2xl p-7 bg-gray-50 shadow-sm transition-all hover:shadow-md hover:bg-gray-100 cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">The Invisible Beast</h2>
                                <p className="text-sm text-gray-600 mt-1">Cinema 1 - GHX</p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-gray-500">Seats</p>
                                <p className="font-medium text-gray-700">A1, A2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 transition-all hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-black">Order Summary</h3>

                    <div className="mt-6 space-y-4">
                        <div className="flex justify-between text-sm text-gray-600 hover:text-gray-800 transition cursor-pointer">
                            <span>Tickets (2)</span>
                            <span className="font-medium text-gray-800">150,000 VND</span>
                        </div>

                        <div className="flex justify-between text-sm text-gray-600 hover:text-gray-800 transition cursor-pointer">
                            <span>Discount</span>
                            <span className="font-medium text-gray-800">-0 VND</span>
                        </div>

                        <div className="flex justify-between text-sm text-gray-600 hover:text-gray-800 transition cursor-pointer">
                            <span>Service Fee</span>
                            <span className="font-medium text-gray-800">3,000 VND</span>
                        </div>

                        <div className="pt-4 border-t border-gray-200"></div>

                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-sm text-gray-500">Total Payment</div>
                                <div className="text-2xl font-bold text-black">153,000 VND</div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm text-gray-600">Promo Code</label>

                            <div className="mt-2 flex">
                                <input
                                    placeholder="Enter code"
                                    className="w-4/7 px-4 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-500 transition outline-none"
                                />
                                <button
                                    className="w-3/7 ml-3 px-5 py-2 bg-black text-white rounded-xl font-medium hover:bg-[#383838] transition cursor-pointer"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-3 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                className="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500 cursor-pointer"
                            />
                            <label htmlFor="agreeTerms" className="text-sm text-gray-700 cursor-pointer">
                                I agree to the terms & refund policy.
                            </label>
                        </div>

                        <NavLink
                            to="/"
                            className="block w-full mt-6 bg-red-500 hover:bg-red-600 text-white text-center py-3 rounded-xl font-bold shadow-md transition cursor-pointer"
                        >
                            Pay Now (153,000 VND)
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckOut
