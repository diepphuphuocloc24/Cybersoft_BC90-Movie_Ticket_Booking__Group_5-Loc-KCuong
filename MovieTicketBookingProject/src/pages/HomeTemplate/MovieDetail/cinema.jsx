import React, { memo, useState } from 'react';
import TimeShow from './timeShow';

const Cinema = ({ propEachCinema }) => {

    const renderTimeShow = (ngayChieuGioChieu, maLichChieu, thoiLuong) => (
        <TimeShow key={maLichChieu} propTimeShow={ngayChieuGioChieu} propShowCode={maLichChieu} propDuration={thoiLuong} />
    );

    const renderAuditorium = () => {
        const grouped = propEachCinema?.lichChieuPhim.reduce((acc, item) => {
            (acc[item.tenRap] = acc[item.tenRap] || []).push(item);
            return acc;
        }, {});

        return Object.entries(grouped).map(([tenRap, list]) => (
            <tr key={tenRap} className="border-t border-white">
                <td className="px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 bg-[#1C1C1C] text-white font-semibold border-r border-white text-[10px] sm:text-xs md:text-sm lg:text-base">{tenRap}</td>
                <td colSpan={7} className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 bg-[#1C1C1C]">
                    <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-4">
                        {list.map((item) =>
                            renderTimeShow(
                                item.ngayChieuGioChieu,
                                item.maLichChieu,
                                item.thoiLuong
                            )
                        )}
                    </div>
                </td>
            </tr>
        ));
    };

    const daysOfWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const [activeDay, setActiveDay] = useState(() => daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)]);

    return (
        <div key={propEachCinema.maCumRap} className="overflow-x-auto mt-6">

            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-gray-900 tracking-wide border-l-4 border-red-500 pl-3">
                {propEachCinema.tenCumRap}
            </h4>

            <p className="text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-600 mt-1 mb-4">
                {propEachCinema.diaChi}
            </p>

            <table className="w-full shadow-xl bg-black">
                <thead>
                    <tr className="text-white">

                        <th className="bg-indigo-900 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-7 md:py-8 lg:py-9 border-r border-amber-400 text-left text-[10px] sm:text-xs md:text-sm lg:text-base min-w-[70px] sm:min-w-[90px] md:min-w-[120px] lg:min-w-[150px]">
                            DAY
                        </th>

                        {daysOfWeek.map(day => (
                            <th
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`cursor-pointer transition-all duration-300 text-center border-l border-white min-w-[50px] sm:min-w-[70px] md:min-w-[85px] lg:min-w-[100px] px-3 py-3 sm:py-4 md:py-5 lg:py-6 text-[9px] sm:text-[11px] md:text-xs lg:text-sm ${activeDay === day ? 'bg-red-500 text-white' : 'bg-black text-white hover:bg-red-500'
                                    }`}
                            >
                                {day}
                            </th>
                        ))}

                    </tr>
                </thead>


                <tbody>
                    {renderAuditorium()}
                </tbody>
            </table>
        </div>
    );
};

export default memo(Cinema);
