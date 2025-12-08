import React from 'react'

const ListCinema = ({ propChainCinema, onSelectedCinema, isActive }) => {
    return (
        <button
            onClick={() => onSelectedCinema(propChainCinema.maHeThongRap)}
            className={`
        flex flex-col items-center justify-center
        p-1.5 sm:p-2 md:p-3
        min-w-14 sm:min-w-16 md:min-w-20
        rounded-xl border transition-all duration-300 shadow-sm

        ${isActive
                    ? "bg-linear-to-br from-orange-500 to-red-500 text-white border-orange-600 shadow-xl scale-105"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-orange-100 hover:border-orange-400 hover:shadow-md cursor-pointer"
                }
    `}
        >
            <img
                src={propChainCinema.logo}
                alt={propChainCinema.tenHeThongRap}
                className={`
            rounded-full ring-2 
            w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10
            ${isActive ? "ring-white bg-white" : "ring-gray-400 bg-white"}
        `}
            />

            <p className="mt-1 md:mt-2 lg:mt-3 xl:mt-4 text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-wide">
                {propChainCinema.tenHeThongRap === "cgv"
                    ? propChainCinema.tenHeThongRap.toUpperCase()
                    : propChainCinema.tenHeThongRap}
            </p>
        </button>
    );
};

export default ListCinema
