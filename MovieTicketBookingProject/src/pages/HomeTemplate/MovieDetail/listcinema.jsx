import React from 'react'

const ListCinema = ({ propChainCinema, onSelectedCinema, isActive }) => {
    return (
        <button
            onClick={() => onSelectedCinema(propChainCinema.maHeThongRap)}
            className={`
                flex flex-col items-center justify-center 
                p-3 min-w-20
                rounded-xl border transition-all duration-300 
                shadow-sm
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
                    w-10 h-10 rounded-full ring-2 
                    ${isActive ? "ring-white bg-white" : "ring-gray-400 bg-white"}
                `}
            />

            <p className={`mt-2 text-xs font-semibold tracking-wide`}>
                {propChainCinema.tenHeThongRap}
            </p>
        </button>
    );
};

export default ListCinema
