import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const promise = axios(
        {
            url: '',
            method: 'GET',
        }
    )

    promise
        .then((result) => {
            console.log(result.data)
        })
        .catch((error) => {
            console.log(error)
        }
        )

    return (
        <>
            <div className="owl-carousel owl-theme relative" data-type="movie">
                <div className="item relative group">
                    <img
                        src="./img/Carousel/carousel0.gif"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <NavLink
                        to="*"
                        className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-12
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
                    >
                        <span className="flex items-center h-full">Book Tickets</span>

                        <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                            <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                        </span>
                    </NavLink>
                </div>

                {/* Phim 1 */}
                <div className="item relative group">
                    <img
                        src="./img/Carousel/carousel1.jpg"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <NavLink
                        to="*"
                        className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-12
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
                    >
                        <span className="flex items-center h-full">Book Tickets</span>

                        <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                            <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                        </span>
                    </NavLink>
                </div>

                {/* Phim 2 */}
                <div className="item relative group">
                    <img
                        src="./img/Carousel/carousel2.jpg"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <NavLink
                        to="*"
                        className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-12
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
                    >
                        <span className="flex items-center h-full">Book Tickets</span>

                        <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                            <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                        </span>
                    </NavLink>
                </div>

                {/* Phim 3 */}
                <div className="item relative group">
                    <img
                        src="./img/Carousel/carousel3.jpg"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <NavLink
                        to="*"
                        className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-12
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
                    >
                        <span className="flex items-center h-full">Book Tickets</span>

                        <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                            <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                        </span>
                    </NavLink>
                </div>

                {/* Phim 4 */}
                <div className="item relative group">
                    <img
                        src="./img/Carousel/carousel4.jpg"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <NavLink
                        to="*"
                        className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-12
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
                    >
                        <span className="flex items-center h-full">Book Tickets</span>

                        <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                            <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                        </span>
                    </NavLink>
                </div>

                {/* Phim 5 */}
                <div className="item relative group">
                    <img
                        src="./img/Carousel/carousel5.jpg"
                        className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <NavLink
                        to="*"
                        className="
    absolute right-[43%] bottom-20
    flex items-center justify-center gap-3
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white px-6 py-3 h-12
    rounded-full font-semibold shadow-lg
    opacity-0 translate-y-8 
    group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-out
  "
                    >
                        <span className="flex items-center h-full">Book Tickets</span>

                        <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                            <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                        </span>
                    </NavLink>
                </div>
            </div>

            <div className="bg-gray-100 transition-all duration-300 py-12">
                <div className="container mx-auto">
                    <NavLink to="/now-showing">
                        <img
                            src="./img/deal1.jpg"
                            className="w-full bject-cover rounded-xl"
                            alt="deal"
                        />
                    </NavLink>
                </div>
            </div>

            <div className='bg-gray-100 pb-12'>
                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
                            NOW SHOWING / ADVANCED SALES
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {/* Movie Card 1 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/559705297_17926020432114954_265302695889768123_n.jpg"
                                            alt="Predator: Badlands"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            Predator: Badlands (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Action | 120 min</p>
                                        <button className="mt-3 w-full py-2 rounded-lg font-semibold text-white shadow-md transition duration-300 bg-red-500 hover:bg-red-700 cursor-pointer">
                                            Buy Tickets
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Movie Card 2 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/News/news2.jpg"
                                            alt="The Lost Dragon"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            The Lost Dragon (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Adventure | 135 min</p>
                                        <button className="mt-3 w-full py-2 rounded-lg font-semibold text-white shadow-md transition duration-300 bg-red-500 hover:bg-red-700 cursor-pointer">
                                            Buy Tickets
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Movie Card 3 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/News/news3.jpg"
                                            alt="Broken Hearts"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            Broken Hearts (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Drama | 110 min</p>
                                        <button className="mt-3 w-full py-2 rounded-lg font-semibold text-white shadow-md transition duration-300 bg-red-500 hover:bg-red-700 cursor-pointer">
                                            Buy Tickets
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Movie Card 4 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/News/news4.jpg"
                                            alt="Golden Treasure"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            Golden Treasure (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Comedy | 125 min</p>
                                        <button className="mt-3 w-full py-2 rounded-lg font-semibold text-white shadow-md transition duration-300 bg-red-500 hover:bg-red-700 cursor-pointer">
                                            Buy Tickets
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
                            UPCOMING MOVIES
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {/* Upcoming Movie 1 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/News/news5.jpg"
                                            alt="Space Adventures"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            Space Adventures (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Sci-Fi | 130 min</p>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Movie 2 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/News/news6.jpg"
                                            alt="The Lost Kingdom"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            The Lost Kingdom (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Adventure | 125 min</p>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Movie 3 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/News/news7.jpg"
                                            alt="Haunted Nights"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            Haunted Nights (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Horror | 110 min</p>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Movie 4 */}
                            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition duration-300 cursor-pointer">
                                <div className="p-4">
                                    <div className="relative h-64 overflow-hidden rounded-xl">
                                        <img
                                            src="./img/News/news8.jpg"
                                            alt="Comedy Fiesta"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            C16
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-white truncate cursor-pointer">
                                            Comedy Fiesta (2025)
                                        </h3>
                                        <p className="text-sm text-amber-400 cursor-pointer">Comedy | 115 min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto mt-12 px-4">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
                        NEWS & REVIEWS
                    </h2>

                    <div className="flex flex-wrap gap-8 justify-center">
                        {/* Tin 1 */}
                        <div className="flex-1 min-w-[300px]">
                            <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                                <div className="h-90 bg-gray-300 flex items-center justify-center overflow-hidden rounded-xl">
                                    <img
                                        src="./img/News/news1.jpg"
                                        alt="Predator Badlands"
                                        className="object-cover h-full w-full rounded-xl cursor-pointer"
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between">
                                    <h3 className="text-md font-semibold text-gray-800 mb-2 cursor-pointer">
                                        [Review] Predator Badlands: Sự Hồi Sinh Của Thương Hiệu Quái Thú Lừng Lẫy
                                    </h3>
                                    <div className="flex justify-start">
                                        <NavLink
                                            to="*"
                                            className="text-red-500 font-semibold hover:text-red-700 transition duration-200 cursor-pointer"
                                        >
                                            Read more &gt;&gt;
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cột phải: Tin 2 */}
                        <div className="flex-1 flex flex-col gap-8 min-w-[300px]">
                            <div className="flex bg-white shadow-lg overflow-hidden rounded-xl transition-all duration-300 cursor-pointer">
                                <div className="h-[120px] w-auto bg-gray-300 flex items-center justify-center overflow-hidden rounded-xl shrink-0">
                                    <img
                                        src="./img/News/news2.jpg"
                                        alt="Truy Tìm Long Diên Hương"
                                        className="object-cover h-full w-full rounded-xl cursor-pointer"
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between h-[100px] flex-1">
                                    <h3 className="text-md font-semibold text-gray-800 mb-2 cursor-pointer">
                                        [Review] Truy Tìm Long Diên Hương: Võ Thuật - Hài Dẫn Đầu Màn Ảnh Việt
                                    </h3>
                                    <div className="flex justify-start">
                                        <NavLink
                                            to="*"
                                            className="text-red-500 font-semibold hover:text-red-700 transition duration-200 cursor-pointer"
                                        >
                                            Read more &gt;&gt;
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            {/* Tin 3 */}
                            <div className="flex bg-white shadow-lg overflow-hidden rounded-xl transition-all duration-300 cursor-pointer">
                                <div className="h-[120px] w-auto bg-gray-300 flex items-center justify-center overflow-hidden rounded-xl shrink-0">
                                    <img
                                        src="./img/News/news3.jpg"
                                        alt="Trái Tim Què Quặt"
                                        className="object-cover h-full w-full rounded-xl cursor-pointer"
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between h-[100px] flex-1">
                                    <h3 className="text-md font-semibold text-gray-800 mb-2 cursor-pointer">
                                        [Review] Trái Tim Què Quặt: Hai Mối Tình Và Một Vụ Án Mạng
                                    </h3>
                                    <div className="flex justify-start">
                                        <NavLink
                                            to="*"
                                            className="text-red-500 font-semibold hover:text-red-700 transition duration-200 cursor-pointer"
                                        >
                                            Read more &gt;&gt;
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            {/* Tin 4 */}
                            <div className="flex bg-white shadow-lg overflow-hidden rounded-xl transition-all duration-300 cursor-pointer">
                                <div className="h-[120px] w-auto bg-gray-300 flex items-center justify-center overflow-hidden rounded-xl shrink-0">
                                    <img
                                        src="./img/News/news4.jpg"
                                        alt="Cục Vàng Của Ngoại"
                                        className="object-cover h-full w-full rounded-xl cursor-pointer"
                                    />
                                </div>
                                <div className="p-4 flex flex-col justify-between h-[100px] flex-1">
                                    <h3 className="text-md font-semibold text-gray-800 mb-2 cursor-pointer">
                                        [Review] Cục Vàng Của Ngoại: Việt Hương - Hồng Đào Lấy Nước Mắt Khán Giả
                                    </h3>
                                    <div className="flex justify-start">
                                        <NavLink
                                            to="*"
                                            className="text-red-500 font-semibold hover:text-red-700 transition duration-200 cursor-pointer"
                                        >
                                            Read more &gt;&gt;
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <NavLink
                            to="*"
                            className="relative inline-block text-red-500 font-semibold bg-white hover:bg-red-500 border hover:text-white border-red-500 rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                        >
                            <span className="relative z-10">See More</span>
                            <span className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
                        </NavLink>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
