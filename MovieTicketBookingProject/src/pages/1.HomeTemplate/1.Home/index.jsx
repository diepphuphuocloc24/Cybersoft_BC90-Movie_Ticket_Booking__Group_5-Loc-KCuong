import React from 'react'
import { NavLink } from 'react-router-dom'
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
    text-white px-6 py-3 h-10
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
            {/* CAROUSEL */}
            <div className="slider-container relative pb-10">
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
    text-white px-6 py-3 h-10
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
    text-white px-6 py-3 h-10
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
    text-white px-6 py-3 h-10
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
    text-white px-6 py-3 h-10
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
    text-white px-6 py-3 h-10
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
    text-white px-6 py-3 h-10
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

            {/* DEAL */}
            <div className="transition-all duration-300 pb-15">
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

            {/* TAB MOVIES */}
            <div className="pb-15">
                {/* Tabs */}
                <div className='container relative'>
                    <div className='absolute top-0 left-0'>
                        <div className="relative inline px-1 py-10 rounded-l-lg text-white text-xl font-medium bg-black">
                            SHOW ME
                            <span
                                className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2"
                                style={{
                                    width: 0,
                                    height: 0,
                                    borderTop: '52px solid transparent',
                                    borderBottom: '52px solid transparent',
                                    borderLeft: '52px solid #000',
                                }}
                            ></span>
                        </div>
                    </div>

                    <div>
                        <ul className="flex justify-center text-lg font-bold" id="movie-tab"
                            data-tabs-toggle="#movie-tab-content"
                            data-tabs-active-classes="text-red-500 border-b-2 border-red-600"
                            data-tabs-inactive-classes="text-black border-b-2 border-transparent hover:text-red-600"
                            role="tablist">

                            <ul className="flex items-center">
                                <li role="presentation" className="pr-5 relative">
                                    <button
                                        className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2 cursor-pointer"
                                        id="now-tab"
                                        data-tabs-target="#now-showing"
                                        type="button"
                                        role="tab"
                                    >
                                        NOW SHOWING
                                    </button>
                                    {/* Đường ngăn dọc bên phải, cao bằng chữ */}
                                    <div className="absolute right-0 top-1 h-7 w-px bg-gray-400"></div>
                                </li>

                                <li role="presentation" className="pl-5">
                                    <button
                                        className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2 cursor-pointer"
                                        id="upcoming-tab"
                                        data-tabs-target="#upcoming"
                                        type="button"
                                        role="tab"
                                    >
                                        UPCOMING
                                    </button>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                {/* CONTENT */}
                <div id="movie-tab-content">
                    {/* NOW SHOWING */}
                    <div id="now-showing" className="hidden py-8" role="tabpanel">
                        <div className='container'>
                            <div className="flex items-center mb-6">
                                <div className="flex flex-col justify-center flex-1 gap-1">
                                    <div className="border-t-2 border-black h-0.5"></div>
                                    <div className="border-t-2 border-black h-0.5"></div>
                                </div>
                                <h2 className="text-3xl font-extrabold text-black px-4">
                                    TOP MOVIES
                                </h2>
                                <div className="flex flex-col justify-center flex-1 gap-1">
                                    <div className="border-t-2 border-black h-0.5"></div>
                                    <div className="border-t-2 border-black h-0.5"></div>
                                </div>
                            </div>

                            <div className="slider-container relative">
                                <Slider className="movies-carousel" {...moviesSlide}>
                                    {renderNowMovieList()}
                                </Slider>
                            </div>

                            <div className="flex justify-center items-center mt-6">
                                <NavLink
                                    to="/movie-list"
                                    className="relative inline-block text-red-500 font-semibold bg-white hover:bg-red-500 border hover:text-white border-red-500 hover:border-red-500 rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                                >
                                    SHOW MORE
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* UPCOMING */}
                    <div id="upcoming" className="hidden py-8 bg-black" role="tabpanel">
                        <div className='container'>
                            <div className="flex items-center mb-6">
                                <div className="flex flex-col justify-center flex-1 gap-1">
                                    <div className="border-t-2 border-amber-500 h-0.5"></div>
                                    <div className="border-t-2 border-amber-500 h-0.5"></div>
                                </div>
                                <h2 className="text-3xl font-extrabold text-amber-500 px-4">
                                    COMING SOON
                                </h2>
                                <div className="flex flex-col justify-center flex-1 gap-1">
                                    <div className="border-t-2 border-amber-500 h-0.5"></div>
                                    <div className="border-t-2 border-amber-500 h-0.5"></div>
                                </div>
                            </div>

                            <div className="slider-container relative">
                                <Slider className="movies-carousel" {...moviesSlide}>
                                    {renderUpComingMovieList()}
                                </Slider>
                            </div>

                            <div className="flex justify-center items-center mt-6">
                                <NavLink
                                    to="/movie-list"
                                    className="relative inline-block text-amber-500 font-semibold bg-black hover:bg-amber-500 border hover:text-black border-amber-500 hover:border-amber-500 rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                                >
                                    SHOW MORE
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEWS */}
            <section className="container mx-auto pb-15">
                <div className="flex items-center mb-6 w-full relative">
                    <div className="flex-1 h-7 bg-amber-500 relative">
                        <div
                            style={{
                                position: 'absolute',
                                right: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: 0,
                                height: 0,
                                borderTop: '14px solid transparent',
                                borderBottom: '14px solid transparent',
                                borderLeft: '20px solid #f59e0b',
                            }}
                        ></div>
                    </div>

                    <h2 className="text-5xl font-extrabold text-black px-10">
                        NEWS & REVIEWS
                    </h2>

                    <div className="flex-1 h-7 bg-amber-500 relative">
                        <div
                            style={{
                                position: 'absolute',
                                left: '-20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: 0,
                                height: 0,
                                borderTop: '14px solid transparent',
                                borderBottom: '14px solid transparent',
                                borderRight: '20px solid #f59e0b',
                            }}
                        ></div>
                    </div>
                </div>

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
                        className="relative inline-block text-gray-500 font-semibold bg-white hover:bg-red-500 border hover:text-white border-gray-500 hover:border-red-500 rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                        SEE MORE NEWS
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default Home
