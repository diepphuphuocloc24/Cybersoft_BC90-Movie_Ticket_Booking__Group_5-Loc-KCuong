import React, { useState } from 'react'
import dataSeats from './danhSachGhe.json'

const TicketBooking = () => {
    const [propSeats, setPropSeats] = useState(dataSeats)

    const [activeSeats, setActiveSeats] = useState([]);

    const handleSelectSeat = (seat) => {
        if (activeSeats.includes(seat.soGhe)) {
            setActiveSeats(activeSeats.filter((s) => s !== seat.soGhe));
        } else {
            setActiveSeats([...activeSeats, seat.soGhe]);
        }

        onSelectedSeats(seat);
    };

    const renderFirstLine = (seatList) => {
        return (
            <div className="flex gap-5">
                {seatList.map((seat) => (
                    <div
                        key={seat.soGhe}
                        className="relative w-10 h-8 flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                        <span className="text-black font-bold text-sm">{seat.soGhe}</span>
                    </div>
                ))}
            </div>
        );
    };

    const renderSeat = (seatList) => {
        return seatList.map((seat) => {
            if (seat.daDat) {
                return (
                    <button
                        key={seat.soGhe}
                        className="relative flex items-center justify-center transition-all duration-200 active:scale-95 cursor-not-allowed"
                        disabled
                    >
                        <i className="fa-solid fa-couch relative text-red-700 text-[32px]"></i>
                        <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
                    </button>
                );
            } else {
                return (
                    <button
                        key={seat.soGhe}
                        className="relative flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
                        onClick={() => handleSelectSeat(seat)}
                    >
                        <i
                            className={`fa-solid fa-couch relative text-[32px] transition-colors duration-200 ${activeSeats.includes(seat.soGhe)
                                ? "text-lime-400"
                                : "text-gray-400 hover:text-lime-400"
                                }`}
                        ></i>
                        <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
                    </button>
                );
            }
        });
    };

    const renderSeatVIPLine = (seatList) => {
        return seatList.map((seat) => {
            if (seat.daDat) {
                return (
                    <button
                        key={seat.soGhe}
                        className="relative flex items-center justify-center transition-all duration-200 active:scale-95 cursor-not-allowed"
                        disabled
                    >
                        <i className="fa-solid fa-couch relative text-red-700 text-[32px]"></i>
                        <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
                    </button>
                );
            } else {
                return (
                    <button
                        key={seat.soGhe}
                        className="relative flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
                        onClick={() => handleSelectSeat(seat)}
                    >
                        <i
                            className={`fa-solid fa-couch relative text-[32px] transition-colors duration-200 ${activeSeats.includes(seat.soGhe)
                                ? "text-lime-400"
                                : "text-amber-400 hover:text-lime-400"
                                }`}
                        ></i>
                        <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
                    </button>
                );
            }
        });
    };

    const renderSeatLastLine = (seatList) => {
        return seatList.map((seat) => {
            if (seat.daDat) {
                return (
                    <button
                        key={seat.soGhe}
                        className="relative flex items-center justify-center transition-all duration-200 active:scale-95 cursor-not-allowed"
                        disabled
                    >
                        <i className="fa-solid fa-couch relative text-red-700 text-[32px]"></i>
                        <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
                    </button>
                );
            } else {
                return (
                    <button
                        key={seat.soGhe}
                        className="relative flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
                        onClick={() => handleSelectSeat(seat)}
                    >
                        <i
                            className={`fa-solid fa-couch relative text-[32px] transition-colors duration-200 ${activeSeats.includes(seat.soGhe)
                                ? "text-lime-400"
                                : "text-pink-500 hover:text-lime-400"
                                }`}
                        ></i>
                        <span className="absolute text-black font-bold text-sm">{seat.soGhe}</span>
                    </button>
                );
            }
        });
    };

    const renderColumnSeats = () => {
        return propSeats.map((dataSeats) => {
            if (dataSeats.hang === "") {
                return (
                    <div key={dataSeats.hang} className="flex gap-5 justify-center">
                        {renderFirstLine(dataSeats.danhSachGhe)}
                    </div>
                );
            } else if (dataSeats.hang === "J") {
                return (
                    <div key={dataSeats.hang} className="flex gap-5 justify-center">
                        {renderSeatLastLine(dataSeats.danhSachGhe)}
                    </div>
                );
            } else if (dataSeats.hang === "H" || dataSeats.hang === "I") {
                return (
                    <div key={dataSeats.hang} className="flex gap-5 justify-center">
                        {renderSeatVIPLine(dataSeats.danhSachGhe)}
                    </div>
                );
            } else {
                return (
                    <div key={dataSeats.hang} className="flex gap-5 justify-center">
                        {renderSeat(dataSeats.danhSachGhe)}
                    </div>
                );
            }
        });
    };

    const renderRowSeats = () => {
        return propSeats.map((dataSeats) => {
            return (
                <div
                    key={dataSeats.hang}
                    className="h-8 flex items-center justify-center font-bold text-black text-sm"
                >
                    {dataSeats.hang}
                </div>
            );
        });
    };

    return (
        <div className="bg-white text-gray-800 py-12">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
                    SELECT SEATS
                </h2>

                <div className="flex flex-col items-center bg-gray-300 p-6 gap-6">

                    {/* SCREEN */}
                    <div className="w-full bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 text-black py-3 rounded-xl text-xl font-extrabold tracking-wider text-center shadow-xl shadow-amber-400/50 border border-amber-400">
                        SCREEN
                    </div>

                    {/* EXIT */}
                    <div className="w-full flex justify-between">
                        {/* LEFT EXIT */}
                        <div className="bg-green-500 text-white px-4 py-1 font-semibold rounded-lg border border-green-800 shadow-md">
                            EXIT
                        </div>

                        {/* RIGHT EXIT */}
                        <div className="bg-green-500 text-white px-4 py-1 font-semibold rounded-lg border border-green-800 shadow-md">
                            EXIT
                        </div>
                    </div>

                    {/* SEAT AREA */}
                    <div className="w-full flex justify-center gap-6">
                        {/* LEFT AISLE */}
                        <div className="w-15 h-height bg-red-800 border border-red-900 rounded-lg shadow-md"></div>

                        {/* SEATS */}
                        <div className="p-4 flex justify-center gap-10 w-full bg-white">
                            <div className="flex flex-col gap-2 items-center">
                                {renderRowSeats()}
                            </div>

                            <div className="flex flex-col gap-2">
                                {renderColumnSeats()}
                            </div>
                        </div>

                        {/* RIGHT AISLE */}
                        <div className="w-15 h-height bg-red-800 border border-red-900 rounded-lg shadow-md"></div>
                    </div>
                </div>

                {/* LEGEND */}
                <div className="flex flex-wrap items-center gap-10 pt-10 font-medium">
                    <div className="flex items-center gap-2">
                        <i className="fi fi-ss-couch text-gray-400 text-2xl"></i>
                        <span className="text-black text-lg ml-2">Standard</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <i className="fi fi-ss-couch text-lime-400 text-2xl"></i>
                        <span className="text-black text-lg ml-2">Your Seat</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <i className="fi fi-ss-couch text-pink-600 text-2xl"></i>
                        <span className="text-black text-lg ml-2">Couple</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <i className="fi fi-ss-couch text-orange-400 text-2xl"></i>
                        <span className="text-black text-lg ml-2">VIP</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <i className="fi fi-ss-couch text-red-600 text-2xl"></i>
                        <span className="text-black text-lg ml-2">Selected</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TicketBooking
