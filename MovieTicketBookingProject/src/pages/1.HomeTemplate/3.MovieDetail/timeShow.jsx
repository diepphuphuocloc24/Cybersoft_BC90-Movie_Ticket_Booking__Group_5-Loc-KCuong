import React from 'react'
import { Link } from 'react-router-dom';

const TimeShow = ({ propTimeShow }) => {
    console.log(propTimeShow);
    return (
        <div className="flex items-center gap-6 py-3 px-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">

            <p className="font-semibold text-gray-800 min-w-20">
                {propTimeShow.tenRap}
            </p>

            <p className="text-sm text-gray-500">
                {new Date(propTimeShow.ngayChieuGioChieu).toLocaleDateString("vi-VN")}
            </p>

            <Link
                to="/buy-ticket"
                key={propTimeShow.maLichChieu}
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 shadow 
                   hover:bg-amber-500 hover:text-white transition-all duration-300 
                   cursor-pointer font-semibold"
            >
                {new Date(propTimeShow.ngayChieuGioChieu).toLocaleTimeString("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </Link>

        </div>
    )
}

export default TimeShow
