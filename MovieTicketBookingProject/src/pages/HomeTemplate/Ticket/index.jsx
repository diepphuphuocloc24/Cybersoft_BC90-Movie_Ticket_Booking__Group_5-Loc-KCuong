import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeats } from './../TicketBooking/slice'

const YourTicket = () => {
    const { state } = useLocation();
    console.log(state);

    const dispatch = useDispatch()

    const stateDetail = useSelector((state) => state.seatsReducer)

    const { dataSeats } = stateDetail

    const stateUser = useSelector((state) => state.homeLoginReducer)

    const { dataUser } = stateUser

    console.log(dataUser);

    useEffect(() => {
        dispatch(fetchSeats(state.maLichChieu))
    }, [dispatch])

    const formatUSDate = (dateString) => {
        if (!dateString) return "";
        const [day, month, year] = dateString.split("/");
        const date = new Date(`${year}-${month}-${day}`);
        return date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    return (
        <section className="bg-white text-black py-8">
            <div className="container mx-auto max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200">

                {/* Header Line */}
                <div className="w-full h-2 bg-linear-to-r from-[#A40062] to-purple-500 rounded-t-2xl"></div>

                <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-4">

                    {/* Logo */}
                    <div className="bg-black p-4 flex justify-center items-center rounded-xl shadow-md">
                        <img src="/img/logo.png" alt="logo" className="w-20 sm:w-24" />
                    </div>

                    {/* Greeting */}
                    <div className="text-left space-y-1.5">
                        <p className="text-xl sm:text-2xl font-semibold">Hello, {dataUser?.hoTen}</p>

                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Your movie ticket has been successfully booked at
                            <span className="font-bold text-[#A40062]"> {dataSeats?.thongTinPhim?.tenCumRap} </span>
                            for
                            <span className="font-bold"> "{dataSeats?.thongTinPhim?.tenPhim}" </span>, scheduled at
                            <span className="font-bold"> {dataSeats?.thongTinPhim?.gioChieu} </span> on
                            <span className="font-bold"> {formatUSDate(dataSeats?.thongTinPhim?.ngayChieu)} </span>.
                        </p>

                        <p className="text-sm sm:text-base text-gray-700">Below are your ticket details.</p>
                    </div>

                    {/* Ticket Box */}
                    <div className="bg-gray-50 rounded-xl border border-gray-300 p-5 sm:p-6 flex flex-col items-center gap-4 shadow-inner">

                        {/* Ticket Code */}
                        <div className="text-center space-y-2">
                            <h2 className="text-lg sm:text-xl font-semibold text-[#A40062]">Your Ticket Code</h2>

                            <p className="text-rose-600 font-bold text-2xl tracking-wide">
                                {state?.maLichChieu}
                            </p>

                            <img src="/img/TicketQR.png" alt="TicketQR" className="w-32 sm:w-40 mx-auto" />

                            <p className="text-sm text-gray-600">Please present this QR code at the counter.</p>
                        </div>

                        {/* Showtime */}
                        <div className="w-full p-4 border border-gray-300 rounded-xl bg-white shadow-sm flex flex-col items-center gap-1">
                            <span className="text-[#A40062] font-semibold text-base sm:text-lg">Showtime & Date</span>

                            <div className="flex items-center gap-1 text-gray-900 text-lg font-semibold">
                                <span>{dataSeats?.thongTinPhim?.gioChieu}</span>
                                <span className="font-normal text-gray-700">on</span>
                                <span>{formatUSDate(dataSeats?.thongTinPhim?.ngayChieu)}</span>
                            </div>
                        </div>

                        {/* Movie & Seats */}
                        <div className="w-full p-4 border border-gray-300 rounded-xl bg-white shadow-sm flex flex-col gap-2">
                            <span className="font-semibold text-[#A40062] text-base sm:text-lg">Movie</span>
                            <span className="font-bold text-gray-900 text-lg">
                                {dataSeats?.thongTinPhim?.tenPhim}
                            </span>

                            <div className="flex justify-between items-start mt-1.5">
                                {/* Auditorium */}
                                <div className="flex flex-col">
                                    <span className="font-semibold text-[#A40062] text-base sm:text-lg">Auditorium</span>
                                    <span className="text-gray-900 mt-0.5">{dataSeats?.thongTinPhim?.tenRap}</span>
                                </div>

                                {/* Seats */}
                                <div className="flex flex-col text-right">
                                    <span className="font-semibold text-[#A40062] text-base sm:text-lg">Seats</span>
                                    <span className="text-gray-900 mt-0.5">
                                        {state?.activeSeats?.map(seat => seat.tenGhe).join(", ")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Food */}
                        <div className="w-full p-4 border border-gray-300 rounded-xl bg-white shadow-sm flex flex-col gap-1">
                            <span className="font-semibold text-[#A40062] text-base sm:text-lg">Food & Beverage</span>
                            <span className="font-medium text-gray-700">No items selected.</span>
                        </div>

                        {/* Cinema Info */}
                        <div className="w-full p-4 border border-gray-300 rounded-xl bg-white shadow-sm flex flex-col gap-1">
                            <span className="font-semibold text-[#A40062] text-base sm:text-lg">Cinema</span>

                            <span className="font-bold text-gray-900">{dataSeats?.thongTinPhim?.tenCumRap}</span>
                            <span className="text-blue-600 font-semibold">{dataSeats?.thongTinPhim?.diaChi}</span>
                        </div>

                        {/* Total Payment */}
                        <p className="w-full bg-gray-100 px-4 py-3 rounded-xl shadow-sm flex justify-between items-center">
                            <span className="text-gray-700 text-base sm:text-lg font-medium">Total Payment</span>
                            <span className="text-[#A40062] text-xl sm:text-2xl font-bold">
                                {state?.totalPayment?.toLocaleString("vi-VN")} ₫
                            </span>
                        </p>

                        {/* Customer Info */}
                        <div className="w-full p-4 border border-gray-300 rounded-xl bg-white shadow-sm flex flex-col gap-2.5">

                            <span className="font-semibold text-[#A40062] text-base sm:text-lg tracking-wide">
                                Customer Information
                            </span>

                            <div className="flex justify-between items-center text-gray-700">
                                <span className="font-medium text-gray-600">Full Name</span>
                                <span className="font-bold text-gray-900">{dataUser?.hoTen}</span>
                            </div>

                            <div className="flex justify-between items-center text-gray-700">
                                <span className="font-medium text-gray-600">Phone</span>
                                <span className="font-bold text-gray-900">{dataUser?.soDT}</span>
                            </div>

                            <div className="flex justify-between items-center text-gray-700">
                                <span className="font-medium text-gray-600">Email</span>
                                <span className="font-bold text-blue-600">{dataUser?.email}</span>
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="flex justify-end mt-1">
                        <NavLink
                            to="/"
                            className="bg-[#A40062] hover:bg-[#8e0056] text-white font-semibold px-5 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
                        >
                            Back to Home
                            <i className="fa-solid fa-arrow-down -rotate-90 text-white text-sm"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourTicket
