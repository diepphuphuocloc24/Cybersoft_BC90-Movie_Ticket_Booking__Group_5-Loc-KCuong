import React from 'react';

const SeatList = ({ propSeats, activeSeats, onSelectSeat }) => {
    const handleSelectSeat = (seat) => {
        const isCurrentlyActive = activeSeats.includes(seat.tenGhe);

        const newActiveSeats = isCurrentlyActive
            ? activeSeats.filter((gheTen) => gheTen !== seat.tenGhe)
            : [...activeSeats, seat.tenGhe];

        onSelectSeat(newActiveSeats);
    };

    const renderSeats = () => {
        return propSeats?.map((seat) => {
            const isActive = activeSeats.includes(seat.tenGhe);

            const getSeatColor = () => {
                const seatNum = parseInt(seat.tenGhe, 10);
                if (seat.daDat) return "text-red-700";
                if (isActive) return "text-lime-400";
                if (seatNum >= 145 && seatNum <= 160) return "text-pink-500 hover:text-lime-400";
                if (seat.loaiGhe === "Vip") return "text-amber-400 hover:text-lime-400";
                return "text-gray-400 hover:text-lime-400";
            };

            return (
                <button
                    key={seat.tenGhe}
                    disabled={seat.daDat}
                    onClick={() => !seat.daDat && handleSelectSeat(seat)}
                    className={`
                    relative flex items-center justify-center
                    transition-all duration-300 active:scale-95
                    px-3
                    ${seat.daDat ? "cursor-not-allowed" : "cursor-pointer"}
                `}
                >
                    <i
                        className={`
                        fa-solid fa-couch text-3xl transition-colors duration-300
                        ${getSeatColor()}
                    `}
                    ></i>

                    <span className="absolute text-black font-semibold text-sm pointer-events-none">
                        {seat.tenGhe}
                    </span>
                </button>
            );
        });
    };

    return (
        <div className="p-4 grid grid-cols-16 gap-2 bg-white">
            {renderSeats()}
        </div>
    );
};

export default SeatList;