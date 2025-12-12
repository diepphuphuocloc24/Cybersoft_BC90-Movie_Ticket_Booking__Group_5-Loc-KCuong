import React from 'react'

const Cinema = ({ propCinema }) => {
    return (
        <>
            <div key={propCinema.maPhim}>
                <div
                    className="group bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg 
          hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 
          transition-all duration-300 cursor-pointer p-2 lg:p-3 xl:p-4 flex flex-row sm:flex-col items-end gap-4 sm:gap-0"
                >
                    <div className="w-[30%] sm:w-full relative rounded-xl overflow-hidden">
                        <img
                            src={propCinema.hinhAnh}
                            alt={propCinema.tenPhim}
                            className="w-full sm:h-65 md:h-70 lg:h-75 xl:h-80 object-cover"
                        />
                    </div>

                    <div className="w-[70%] sm:w-full pt-2 sm:pt-3 md:pt-4 flex flex-col justify-between h-auto sm:h-[110px] md:h-[130px] lg:h-[150px] gap-3 sm:gap-0">
                        <h3 className="text-lg sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight line-clamp-2">
                            {propCinema.tenPhim}
                        </h3>

                        <span className="text-gray-300 text-sm sm:text-md md:text-base mt-1 mb-1 flex items-center gap-2">
                            <span>120 min</span>
                            <span className="w-px h-4 bg-gray-500"></span>
                            <span>{formatDate(propCinema.ngayKhoiChieu)}</span>
                        </span>

                        <NavLink
                            to={`/movie-detail/${propCinema.maPhim}`}
                            className="flex items-center justify-center gap-2 w-full py-2 rounded-2xl font-semibold text-white bg-red-500 
          hover:bg-rose-600 shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-base"
                        >
                            <i className="fi fi-rs-ticket-alt text-xs sm:text-sm md:text-base lg:text-base leading-none"></i>
                            <span>Get Tickets</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cinema
