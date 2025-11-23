import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import axios from 'axios'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieLists from './movieList.json'
import MovieCarousel from './movieCarousel.json'

const Home = () => {
    const carouselSlide = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: "linear",
        waitForAnimate: false
    };

    const moviesSlide = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const renderNowMovieList = () => {
        return MovieLists.content.map((movie) => {
            if (movie.hot && movie.dangChieu) {
                return (
                    <div key={movie.maPhim}>
                        <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg 
        hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 
        transition-all duration-300 cursor-pointer p-4">

                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src={movie.hinhAnh}
                                    alt={movie.tenPhim}
                                    className="h-100 w-full object-cover"
                                />

                                <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow 
                opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    C16
                                </span>

                                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded-lg flex items-center gap-1 
                opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <i className="fa-solid fa-star text-amber-400"></i>
                                    <span>{movie.danhGia}</span>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col justify-between h-[120px]">
                                <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
                                    {movie.tenPhim}
                                </h3>

                                <NavLink
                                    to={`/movie-list/${movie.maPhim}`}
                                    className="block w-full py-2 rounded-2xl font-semibold text-white bg-red-500 
             hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    Buy Tickets
                                </NavLink>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    };

    const renderUpComingMovieList = () => {
        return MovieLists.content.map((movie) => {
            if (movie.hot && !movie.dangChieu) {
                return (
                    <div key={movie.maPhim}>
                        <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg 
        hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 
        transition-all duration-300 cursor-pointer p-4">

                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src={movie.hinhAnh}
                                    alt={movie.tenPhim}
                                    className="h-100 w-full object-cover"
                                />

                                <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow 
                opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    C16
                                </span>

                                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded-lg flex items-center gap-1 
                opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <i className="fa-solid fa-star text-amber-400"></i>
                                    <span>{movie.danhGia}</span>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col justify-between h-[120px]">
                                <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
                                    {movie.tenPhim}
                                </h3>

                                <NavLink
                                    to={`/movie-list/${movie.maPhim}`}
                                    className="block w-full py-2 rounded-2xl font-semibold text-white bg-red-500 
             hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    Movie Detail
                                </NavLink>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                );
            }
        });
    };

    const renderMovieCarousel = () => {
        return MovieCarousel.content.map((movie) => {
            return (
                <div key={movie.maBanner} className="item relative group">
                    <img
                        src={movie.hinhAnh}
                        className="w-full h-135 overflow-hidden object-cover"
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
                        <span className="flex items-center h-full">Get Tickets</span>

                        <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                            <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                        </span>
                    </NavLink>
                </div>
            )
        })
    }

    return (
        <>
            <div className="slider-container relative">
                <Slider {...carouselSlide}>
                    {/* Intro */}
                    <div className="item relative group">
                        <img
                            src="./img/Carousel/carousel0.gif"
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Phim 1 */}
                    <div className="item relative group">
                        <img
                            src="./img/Carousel/carousel0-1.jpg"
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
                            <span className="flex items-center h-full">Get Tickets</span>

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                            </span>
                        </NavLink>
                    </div>

                    {renderMovieCarousel()}

                    {/* Phim 2 */}
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
                            <span className="flex items-center h-full">Get Tickets</span>

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                            </span>
                        </NavLink>
                    </div>

                    {/* Phim 3 */}
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
                            <span className="flex items-center h-full">Get Tickets</span>

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                            </span>
                        </NavLink>
                    </div>

                    {/* Phim 4 */}
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
                            <span className="flex items-center h-full">Get Tickets</span>

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                            </span>
                        </NavLink>
                    </div>

                    {/* Phim 5 */}
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
                            <span className="flex items-center h-full">Get Tickets</span>

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                            </span>
                        </NavLink>
                    </div>

                    {/* Phim 6 */}
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
                            <span className="flex items-center h-full">Get Tickets</span>

                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white">
                                <i className="fi fi-rr-angle-double-small-right text-white text-base flex items-center justify-center leading-none"></i>
                            </span>
                        </NavLink>
                    </div>
                </Slider>
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

                        <div className="slider-container relative">
                            <Slider className="movies-carousel" {...moviesSlide}>
                                {renderNowMovieList()}
                            </Slider>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
                            UPCOMING MOVIES
                        </h2>


                        <div className="slider-container relative">
                            <Slider className="movies-carousel" {...moviesSlide}>
                                {renderUpComingMovieList()}
                            </Slider>
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
                            <span className="relative z-10">Browse all Articles</span>
                            <span className="absolute inset-0 bg-red-500 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
                        </NavLink>
                    </div>
                </section>
            </div>
            <Outlet />
        </>
    )
}

export default Home
