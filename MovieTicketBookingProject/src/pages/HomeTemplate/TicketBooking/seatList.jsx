import React, { memo } from 'react';

const SeatList = ({ propSeats, activeSeats, onSelectSeat }) => {
    const handleSelectSeat = (seat) => {
        const isCurrentlyActive = activeSeats.some((ghe) => ghe.tenGhe === seat.tenGhe);

        const newActiveSeats = isCurrentlyActive
            ? activeSeats.filter((ghe) => ghe.tenGhe !== seat.tenGhe)
            : [...activeSeats, { tenGhe: seat.tenGhe, maGhe: seat.maGhe, giaVe: seat.giaVe }];

        onSelectSeat(newActiveSeats);
    };

    const renderSeats = () => {
        return propSeats?.map((seat) => {
            const isActive = activeSeats.some(ghe => ghe.tenGhe === seat.tenGhe);

            const getSeatColor = () => {
                const seatNum = parseInt(seat.tenGhe, 10);
                if (seat.daDat) return "text-red-600";
                if (isActive) return "text-lime-400";
                if (seatNum >= 145 && seatNum <= 160) return "text-pink-500 hover:text-lime-400";
                if (seat.loaiGhe === "Vip") return "text-amber-400 hover:text-lime-400";
                return "text-gray-300 lg:text-gray-400 hover:text-lime-400";
            };

            return (
                <button
                    key={seat.tenGhe}
                    disabled={seat.daDat}
                    onClick={() => !seat.daDat && handleSelectSeat(seat)}
                    className={`relative flex items-center justify-center transition-all duration-300 active:scale-95
      ${seat.daDat ? "cursor-not-allowed" : "cursor-pointer"}
      p-px sm:p-0.5 md:p-[3px] lg:p-[3px] xl:p-[3px]`}
                >
                    <i
                        className={`fa-solid fa-couch transition-colors duration-300
        ${getSeatColor()}
        text-[20px] sm:text-[22px] md:text-[25px] lg:text-[23px] xl:text-[30px]`}
                    ></i>
                    <span className="absolute text-black font-bold text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] pointer-events-none">
                        {seat.tenGhe}
                    </span>
                </button>
            );
        });
    };

    return (
        <>
            {renderSeats()}
        </>
    );
};

export default memo(SeatList);
