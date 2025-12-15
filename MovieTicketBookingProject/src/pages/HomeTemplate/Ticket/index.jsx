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
        <section className="bg-white text-black py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8">
            <div className="container mx-auto max-w-[90%] md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-xl lg:shadow-2xl border border-gray-200">
                <div className="w-full h-2 bg-linear-to-r from-[#A40062] via-rose-500 to-purple-500 rounded-t-xl sm:rounded-t-2xl"></div>

                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-3 sm:gap-4 md:gap-5">
                    <div className="bg-black p-4 flex justify-center items-center rounded-xl shadow-md ring-1 ring-white/10">
                        <img src="/img/logo.png" alt="logo" className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40" />
                    </div>

                    <div className="space-y-1.5">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Hello, {dataUser?.hoTen}</p>
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                            Your movie ticket has been successfully booked at
                            <span className="font-bold text-[#A40062]"> {dataSeats?.thongTinPhim?.tenCumRap} </span>
                            for <span className="font-bold">"{dataSeats?.thongTinPhim?.tenPhim}"</span>, scheduled at
                            <span className="font-bold"> {dataSeats?.thongTinPhim?.gioChieu} </span> on
                            <span className="font-bold"> {formatUSDate(dataSeats?.thongTinPhim?.ngayChieu)} </span>.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-gray-700">Below are your ticket details.</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl border border-gray-300 p-4 sm:p-5 md:p-6 flex flex-col items-center gap-3 sm:gap-4 shadow-inner">
                        <div className="text-center space-y-2">
                            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#A40062]">Your Ticket Code</h2>
                            <p className="text-[#A40062] font-extrabold text-xl sm:text-2xl md:text-3xl tracking-widest">{state?.maLichChieu}</p>
                            <img src="/img/TicketQR.png" alt="TicketQR" className="w-28 sm:w-32 md:w-36 mx-auto" />
                            <p className="text-xs sm:text-sm text-gray-600">Please present this QR code at the counter.</p>
                        </div>

                        <div className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl bg-linear-to-br from-white to-gray-50 shadow-sm flex flex-col items-center gap-1">
                            <span className="text-[#A40062] font-semibold text-sm sm:text-base md:text-lg">Showtime & Date</span>
                            <div className="flex items-center gap-1 text-gray-900 text-sm sm:text-base md:text-lg font-semibold">
                                <span>{dataSeats?.thongTinPhim?.gioChieu}</span>
                                <span className="font-normal text-gray-600">on</span>
                                <span>{formatUSDate(dataSeats?.thongTinPhim?.ngayChieu)}</span>
                            </div>
                        </div>

                        <div className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col gap-2">
                            <span className="font-semibold text-[#A40062] text-sm sm:text-base md:text-lg">Movie</span>
                            <span className="font-bold text-gray-900 text-base sm:text-lg">{dataSeats?.thongTinPhim?.tenPhim}</span>
                            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-1">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-[#A40062] text-sm sm:text-base">Auditorium</span>
                                    <span className="text-gray-900 text-sm sm:text-base">{dataSeats?.thongTinPhim?.tenRap}</span>
                                </div>
                                <div className="flex flex-col sm:text-right">
                                    <span className="font-semibold text-[#A40062] text-sm sm:text-base">Seats</span>
                                    <div className="flex flex-wrap gap-1.5 mt-1 justify-start sm:justify-end">
                                        {state?.activeSeats?.map(seat => (
                                            <span key={seat.maGhe} className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded-md text-xs font-semibold text-gray-800">
                                                {seat.tenGhe}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col gap-3">
                            <span className="font-semibold text-[#A40062] text-sm sm:text-base md:text-lg">Food & Beverage</span>
                            {state?.selectedFoods?.length > 0 ? (
                                <div className="space-y-2">
                                    {state.selectedFoods.map(food => (
                                        <div key={food.id} className="flex justify-between items-start sm:items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-900 text-sm sm:text-base">{food.name}</span>
                                                <span className="text-xs sm:text-sm text-gray-600">Quantity: x{food.quantity}</span>
                                            </div>
                                            <span className="font-bold text-[#A40062] text-sm sm:text-base">{(food.price * food.quantity).toLocaleString("vi-VN")} ₫</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <span className="italic text-gray-400 text-sm">No items selected.</span>
                            )}
                        </div>

                        <div className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col gap-1">
                            <span className="font-semibold text-[#A40062] text-sm sm:text-base md:text-lg">Cinema</span>
                            <span className="font-bold text-gray-900">{dataSeats?.thongTinPhim?.tenCumRap}</span>
                            <span className="text-blue-600 font-semibold text-sm sm:text-base">{dataSeats?.thongTinPhim?.diaChi}</span>
                        </div>

                        <div className="w-full bg-gray-100 px-4 py-3 rounded-xl shadow-sm flex justify-between items-center ring-1 ring-[#A40062]/20">
                            <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">Total Payment</span>
                            <span className="text-[#A40062] text-lg sm:text-xl md:text-2xl font-bold">{state?.totalPayment?.toLocaleString("vi-VN")} ₫</span>
                        </div>

                        <div className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col gap-2.5">
                            <span className="font-semibold text-[#A40062] text-sm sm:text-base md:text-lg tracking-wide">Customer Information</span>
                            <div className="flex justify-between items-center text-sm sm:text-base text-gray-700">
                                <span className="font-medium text-gray-600">Full Name</span>
                                <span className="font-bold text-gray-900">{dataUser?.hoTen}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm sm:text-base text-gray-700">
                                <span className="font-medium text-gray-600">Phone</span>
                                <span className="font-bold text-gray-900">{dataUser?.soDT}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm sm:text-base text-gray-700">
                                <span className="font-medium text-gray-600">Email</span>
                                <span className="font-bold text-blue-600">{dataUser?.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center sm:justify-end mt-2">
                        <NavLink to="/" className="w-full sm:w-auto bg-[#A40062] hover:bg-[#8e0056] active:scale-95 text-white font-semibold px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                            Back to Home
                            <i className="fa-solid fa-arrow-down -rotate-90 text-sm"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourTicket
