import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovieHome } from "./slice";
import { fetchMovieList } from "../MovieList/slice";
import { fetchMovieDetail } from "../MovieDetail/slice";

import MovieSlider from "./movieSlider";
import Trailer from "../MovieList/trailer";
import Login from "../Login";

const Home = () => {

  const [activeTab, setActiveTab] = useState("now");

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
    waitForAnimate: false,
  };

  const moviesSlide = {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const dispatch = useDispatch();

  const stateList = useSelector((state) => state.movieListReducer);
  const { data, loading } = stateList;

  const stateLogin = useSelector((state) => state.homeLoginReducer);
  const { dataUser } = stateLogin

  const stateDetail = useSelector((state) => state.movieDetailReducer);
  const { dataDetail } = stateDetail

  useEffect(() => {
    dispatch(fetchMovieList());
    dispatch(fetchMovieHome());
  }, [dispatch]);

  const [openTrailerModal, setOpenTrailerModal] = useState(false);

  const [trailerUrl, setTrailerUrl] = useState("");

  const [selectedMovie, setSelectedMovie] = useState("")
  const [selectedCinema, setSelectedCinema] = useState("")
  const [selectedShowtime, setSelectedShowtime] = useState(null)

  const renderPlanMovie = () => {
    return data?.map((movie) => {
      if (movie.dangChieu) {
        return (
          <option key={movie.maPhim} value={movie.maPhim}>
            {movie.tenPhim}{" "}
          </option>
        );
      }
    });
  };

  const handleSelectMovie = (maPhim) => {
    setSelectedMovie(maPhim)
    setSelectedCinema("")
    setSelectedShowtime(null)

    if (maPhim) {
      dispatch(fetchMovieDetail(maPhim))
    }
  }

  const [openModal, setOpenModal] = useState(null);
  const handleCloseModal = () => setOpenModal(null);

  const [showAlert, setShowAlert] = useState(false);

  const [showNotify, setShowNotify] = useState(false);

  const handlePlanBookingButton = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false)
      setOpenModal("login");
    }, 1500);
  }

  const renderBookingButton = () => {
    if (!selectedShowtime) {
      return (
        <button
          disabled
          className="flex-1 py-3 rounded-full bg-[#555555] text-white font-bold cursor-not-allowed uppercase"
        >
          🎟 Book Ticket
        </button>
      )
    }

    if (dataUser) {
      return (
        <Link
          to={`/buy-ticket/${selectedShowtime.maLichChieu}`}
          state={{ duration: selectedShowtime.thoiLuong }}
          className="flex-1 py-3 flex items-center justify-center rounded-full bg-linear-to-r from-amber-400 to-orange-500 text-white font-bold text-sm md:text-base shadow-xl transition-all hover:scale-105 hover:shadow-amber-500/40 cursor-pointer uppercase"
        >
          🎟 Book Ticket
        </Link>
      )
    } else {
      return (
        <button
          className="flex-1 py-3 flex items-center justify-center rounded-full bg-linear-to-r from-amber-400 to-orange-500 text-white font-bold text-sm md:text-base shadow-xl transition-all hover:scale-105 hover:shadow-amber-500/40 cursor-pointer uppercase"
          onClick={handlePlanBookingButton}
        >
          🎟 Book Ticket
        </button>
      )
    }
  }

  const renderNowMovieList = () => {
    return data?.map((movie) => {
      if (movie.hot && movie.dangChieu) {
        return <MovieSlider
          key={movie.maPhim}
          propMovie={movie}
          onOpenTrailer={getInformationFromTrailer}
        />;
      }
    });
  };

  const renderUpComingMovieList = () => {
    return data?.map((movie) => {
      if (!movie.dangChieu) {
        return (
          <MovieSlider
            key={movie.maPhim}
            propMovie={movie}
            onNotify={() => {
              setShowNotify(true);
              setTimeout(() => setShowNotify(false), 1500);
            }}
          />
        );
      }
    });
  };

  const getInformationFromTrailer = (trailerLink) => {
    setTrailerUrl(trailerLink);
    setOpenTrailerModal(true);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-3 bg-gray-200 rounded w-1/3" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="animate-pulse space-y-3">
          <div className="w-full aspect-3/4 bg-gray-200 rounded-lg" />
          <div className="h-4 bg-gray-200 rounded w-3/5" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* CAROUSEL */}
      <section className="slider-container relative pb-10">
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
            <div className="absolute top-0 right-0 w-[30%] h-[10%] bg-linear-to-r from-green-700 to-lime-400 text-white flex items-center pl-[4%] rounded-bl-full shadow-lg">
              <p className="text-[8px] sm:text-xs md:text-sx lg:text-base xl:text-lg font-semibold tracking-wide">
                Don’t miss this hot new release!
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="absolute left-1/2 -translate-x-1/2 
  bottom-10 sm:bottom-14 md:bottom-16 lg:bottom-20 xl:bottom-24
  flex items-center justify-center gap-2 sm:gap-3
  bg-linear-to-r from-blue-500 to-purple-600 text-white 
  px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
  h-9 sm:h-10 md:h-11 lg:h-12
  rounded-full font-semibold 
  text-sm sm:text-base md:text-lg lg:text-xl
  shadow-lg opacity-0 translate-y-8 
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center 
    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 
    rounded-full border-2 border-white 
    transition-all duration-300 hover:translate-x-1">
                <i className="fi fi-rr-angle-double-small-right 
      text-xs sm:text-sm md:text-base lg:text-lg 
      flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {/* Phim 2 */}
          <div className="item relative group">
            <img
              src="./img/Carousel/carousel1.jpg"
              className="w-full object-cover"
            />
            <div className="absolute top-0 right-0 w-[30%] h-[10%] bg-linear-to-r from-green-700 to-lime-400 text-white flex items-center pl-[4%] rounded-bl-full shadow-lg">
              <p className="text-[8px] sm:text-xs md:text-sx lg:text-base xl:text-lg font-semibold tracking-wide">
                Don’t miss this hot new release!
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="
                          group relative overflow-hidden
                          flex items-center justify-center gap-2
                          w-full py-2.5 rounded-2xl
                          font-semibold text-white
                          bg-gradient-to-r from-red-500 via-rose-500 to-red-600
                          shadow-md shadow-red-500/30
                          hover:shadow-lg hover:shadow-red-500/40
                          transition-all duration-300
                          cursor-pointer
                          text-xs sm:text-sm md:text-base
                        "
            >
              <span className="
                          absolute inset-0 -translate-x-full
                          bg-gradient-to-r from-transparent via-white/20 to-transparent
                          group-hover:translate-x-full
                          transition-transform duration-700
                        " />
              <i className="fi fi-rs-ticket-alt"></i>
              <span className="relative z-10">Get Tickets</span>
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
              className="absolute left-1/2 -translate-x-1/2 
  bottom-10 sm:bottom-14 md:bottom-16 lg:bottom-20 xl:bottom-24
  flex items-center justify-center gap-2 sm:gap-3
  bg-linear-to-r from-blue-500 to-purple-600 text-white 
  px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
  h-9 sm:h-10 md:h-11 lg:h-12
  rounded-full font-semibold 
  text-sm sm:text-base md:text-lg lg:text-xl
  shadow-lg opacity-0 translate-y-8 
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center 
    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 
    rounded-full border-2 border-white 
    transition-all duration-300 hover:translate-x-1">
                <i className="fi fi-rr-angle-double-small-right 
      text-xs sm:text-sm md:text-base lg:text-lg 
      flex items-center justify-center leading-none"></i>
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
              className="absolute left-1/2 -translate-x-1/2 
  bottom-10 sm:bottom-14 md:bottom-16 lg:bottom-20 xl:bottom-24
  flex items-center justify-center gap-2 sm:gap-3
  bg-linear-to-r from-blue-500 to-purple-600 text-white 
  px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
  h-9 sm:h-10 md:h-11 lg:h-12
  rounded-full font-semibold 
  text-sm sm:text-base md:text-lg lg:text-xl
  shadow-lg opacity-0 translate-y-8 
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center 
    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 
    rounded-full border-2 border-white 
    transition-all duration-300 hover:translate-x-1">
                <i className="fi fi-rr-angle-double-small-right 
      text-xs sm:text-sm md:text-base lg:text-lg 
      flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {/* Phim 5 */}
          <div className="item relative group">
            <img
              src="./img/Carousel/carousel4.jpg"
              className="w-full object-cover"
            />
            <div className="absolute top-0 right-0 w-[30%] h-[10%] bg-linear-to-r from-green-700 to-lime-400 text-white flex items-center pl-[4%] rounded-bl-full shadow-lg">
              <p className="text-[8px] sm:text-xs md:text-sx lg:text-base xl:text-lg font-semibold tracking-wide">
                Don’t miss this hot new release!
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="absolute left-1/2 -translate-x-1/2 
  bottom-10 sm:bottom-14 md:bottom-16 lg:bottom-20 xl:bottom-24
  flex items-center justify-center gap-2 sm:gap-3
  bg-linear-to-r from-blue-500 to-purple-600 text-white 
  px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
  h-9 sm:h-10 md:h-11 lg:h-12
  rounded-full font-semibold 
  text-sm sm:text-base md:text-lg lg:text-xl
  shadow-lg opacity-0 translate-y-8 
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center 
    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 
    rounded-full border-2 border-white 
    transition-all duration-300 hover:translate-x-1">
                <i className="fi fi-rr-angle-double-small-right 
      text-xs sm:text-sm md:text-base lg:text-lg 
      flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>

          {/* Phim 6 */}
          <div className="item relative group">
            <img
              src="./img/Carousel/carousel5.jpg"
              className="w-full object-cover"
            />
            <div className="absolute top-0 right-0 w-[30%] h-[10%] bg-linear-to-r from-green-700 to-lime-400 text-white flex items-center pl-[4%] rounded-bl-full shadow-lg">
              <p className="text-[8px] sm:text-xs md:text-sx lg:text-base xl:text-lg font-semibold tracking-wide">
                Don’t miss this hot new release!
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <NavLink
              to="*"
              className="absolute left-1/2 -translate-x-1/2 
  bottom-10 sm:bottom-14 md:bottom-16 lg:bottom-20 xl:bottom-24
  flex items-center justify-center gap-2 sm:gap-3
  bg-linear-to-r from-blue-500 to-purple-600 text-white 
  px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 
  h-9 sm:h-10 md:h-11 lg:h-12
  rounded-full font-semibold 
  text-sm sm:text-base md:text-lg lg:text-xl
  shadow-lg opacity-0 translate-y-8 
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-500 ease-out 
  hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <span className="flex items-center h-full">Get Tickets</span>

              <span className="flex items-center justify-center 
    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 
    rounded-full border-2 border-white 
    transition-all duration-300 hover:translate-x-1">
                <i className="fi fi-rr-angle-double-small-right 
      text-xs sm:text-sm md:text-base lg:text-lg 
      flex items-center justify-center leading-none"></i>
              </span>
            </NavLink>
          </div>
        </Slider>
      </section>

      {/* DEAL BANNER */}
      <section className="transition-all duration-300 pb-15">
        <div className="container mx-auto">
          <NavLink to="/now-showing">
            <img
              src="./img/deal1.jpg"
              className="w-full object-cover rounded-xl"
              alt="deal"
            />
          </NavLink>
        </div>
      </section>

      {/* QUICK BOOK TICKETS */}
      <section className="bg-black py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8">
            Ready to Grab Your Tickets?
          </h2>

          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-end lg:flex-wrap gap-4 md:gap-6">
              {/* Select Movie */}
              <div className="flex flex-col flex-1 ">
                <label className="text-sm sm:text-md md:text-base lg:text-base xl:text-lg 2xl:text-xl font-semibold text-white mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 uppercase">
                  Select Movie
                </label>

                <select
                  onChange={(e) => handleSelectMovie(e.target.value)}
                  className="
      w-full px-5 py-3 rounded-full
      bg-black text-white
      border border-zinc-700
      text-sm sm:text-base
      cursor-pointer
      transition-all
      focus:outline-none
      focus:border-amber-500
      focus:ring-2 focus:ring-amber-500/40
      hover:border-zinc-500
    "
                >
                  <option value="">Select Movie</option>
                  {renderPlanMovie()}
                </select>
              </div>

              {/* Select Cinema */}
              <div className="flex flex-col flex-1 ">
                <label className="text-sm sm:text-md md:text-base lg:text-base xl:text-lg 2xl:text-xl font-semibold text-white mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 uppercase">
                  Select Cinema
                </label>

                <select
                  value={selectedCinema}
                  onChange={(e) => setSelectedCinema(e.target.value)}
                  disabled={!dataDetail}
                  className="
      w-full px-5 py-3 rounded-full
      bg-black text-white
      border border-zinc-700
      text-sm sm:text-base
      cursor-pointer
      transition-all
      focus:outline-none
      focus:border-amber-500
      focus:ring-2 focus:ring-amber-500/40
      hover:border-zinc-500
      disabled:opacity-40
      disabled:cursor-not-allowed
    "
                >
                  <option value="">Select Cinema</option>
                  {dataDetail?.heThongRapChieu.flatMap(heThong =>
                    heThong.cumRapChieu.map(cumRap => (
                      <option key={cumRap.maCumRap} value={cumRap.maCumRap}>
                        {cumRap.tenCumRap}
                      </option>
                    ))
                  )}
                </select>
              </div>

              {/* Select Date */}
              <div className="flex flex-col flex-1 ">
                <label className="text-sm sm:text-md md:text-base lg:text-base xl:text-lg 2xl:text-xl font-semibold text-white mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 uppercase">
                  Select Showtime
                </label>

                <select
                  value={selectedShowtime?.maLichChieu || ""}
                  onChange={(e) => {
                    const lich = dataDetail.heThongRapChieu
                      .flatMap(h => h.cumRapChieu)
                      .flatMap(c => c.lichChieuPhim)
                      .find(l => l.maLichChieu === e.target.value)

                    setSelectedShowtime(lich)
                  }}
                  disabled={!selectedCinema}
                  className="
      w-full px-5 py-3 rounded-full
      bg-black text-white
      border border-zinc-700
      text-sm sm:text-base
      cursor-pointer
      transition-all
      focus:outline-none
      focus:border-amber-500
      focus:ring-2 focus:ring-amber-500/40
      hover:border-zinc-500
      disabled:opacity-40
      disabled:cursor-not-allowed
    "
                >
                  <option value="">Select Time</option>
                  {dataDetail?.heThongRapChieu.flatMap(h =>
                    h.cumRapChieu
                      .filter(c => c.maCumRap === selectedCinema)
                      .flatMap(c =>
                        c.lichChieuPhim.map(lich => (
                          <option key={lich.maLichChieu} value={lich.maLichChieu}>
                            {lich.ngayChieuGioChieu.slice(11, 16)}
                          </option>
                        ))
                      )
                  )}
                </select>
              </div>

              {/* Book Button */}
              {renderBookingButton()}
            </div>
          </div>
        </div>
      </section>

      {/* MOVIES TABS */}
      <section className="py-15">
        <div className="container relative">
          <div className="md:block hidden absolute top-0 left-0">
            <div className="relative inline px-1 py-10 rounded-l-2xl text-white text-xl font-medium bg-black">
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

          <div className="flex justify-center text-lg font-bold mt-4">
            <button
              className={`${activeTab === "now"
                ? "text-red-500 border-b lg:border-b-2 border-red-600 text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-extrabold mb-6 pb-2"
                : "text-gray-800 text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-extrabold mb-6 pb-2"
                } hover:text-red-600 transition-colors duration-300 cursor-pointer`}
              onClick={() => setActiveTab("now")}
            >
              NOW SHOWING
            </button>

            <button
              className={`${activeTab === "upcoming"
                ? "text-red-500 border-b lg:border-b-2 border-red-600 text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-extrabold mb-6 pb-2 ml-5"
                : "text-gray-800 text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-extrabold mb-6 pb-2 ml-5"
                } hover:text-red-600 transition-colors duration-300 cursor-pointer`}
              onClick={() => setActiveTab("upcoming")}
            >
              UPCOMING
            </button>
          </div>
        </div>

        {activeTab === "now" && (
          <div className="py-4 sm:py-6 md:py-8">
            <div className="container">
              <div className="flex items-center mb-6">
                <div className="flex flex-col justify-center flex-1 gap-1">
                  <div className="border-t-2 border-black h-0.5"></div>
                  <div className="border-t-2 border-black h-0.5"></div>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold text-black px-4">
                  TOP MOVIES
                </h2>
                <div className="flex flex-col justify-center flex-1 gap-1">
                  <div className="border-t-2 border-black h-0.5"></div>
                  <div className="border-t-2 border-black h-0.5"></div>
                </div>
              </div>

              <div className="slider-container relative">
                <Slider className="movies-carousel" {...moviesSlide}>
                  <div
                    className="group bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg 
                  hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 
                  transition-all duration-300 cursor-pointer p-2 lg:p-3 xl:p-4"
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="/img/MoviePoster/Predator Badlands.jpg"
                        alt="Predator Badlands"
                        className="w-full h-60 sm:h-65 md:h-70 lg:h-75 xl:h-80 object-cover"
                      />

                      <span
                        className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-500 text-white text-[10px] sm:text-xs md:text-sm font-bold px-2 py-1 rounded-lg shadow 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        C16
                      </span>

                      <div
                        className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs md:text-sm px-1 sm:px-2 py-1 rounded-lg flex items-center gap-1 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        <i className="fa-solid fa-star text-amber-400 text-xs sm:text-sm md:text-base"></i>
                        <span className="text-[10px] sm:text-xs md:text-sm">
                          9
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-amber-500 text-white text-xs sm:text-sm md:text-base font-bold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:bg-orange-500">
                          TRAILER
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-3 md:pt-4 flex flex-col justify-between h-[90px] sm:h-[110px] md:h-[130px] lg:h-[150px]">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight line-clamp-2">
                        Predator: Badlands (2025)
                      </h3>

                      <span className="text-gray-300 text-sm sm:text-md md:text-base mt-1 mb-1 flex items-center gap-2">
                        <span>110 min</span>
                        <span className="w-px h-4 bg-gray-500"></span>
                        <span>November 6, 2025</span>
                      </span>

                      <button
                        className="group relative overflow-hidden
      flex items-center justify-center gap-2
      w-full py-2.5 rounded-2xl
      font-semibold text-white
      bg-gradient-to-r from-red-500 via-rose-500 to-red-600
      shadow-md shadow-red-500/30
      hover:shadow-lg hover:shadow-red-500/40
      transition-all duration-300
      text-xs sm:text-sm md:text-base"
                      >
                        <span className="
      absolute inset-0 -translate-x-full
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    " />

                        <i className="fi fi-rs-ticket-alt text-sm md:text-base leading-none"></i>
                        <span className="relative z-10 tracking-wide">
                          Get Tickets
                        </span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="group bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg 
                  hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 
                  transition-all duration-300 cursor-pointer p-2 lg:p-3 xl:p-4"
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="/img/MoviePoster/Wicked For Good.jpg"
                        alt="Wicked For Good"
                        className="w-full h-60 sm:h-65 md:h-70 lg:h-75 xl:h-80 object-cover"
                      />

                      <span
                        className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-500 text-white text-[10px] sm:text-xs md:text-sm font-bold px-2 py-1 rounded-lg shadow 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        C16
                      </span>

                      <div
                        className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs md:text-sm px-1 sm:px-2 py-1 rounded-lg flex items-center gap-1 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        <i className="fa-solid fa-star text-amber-400 text-xs sm:text-sm md:text-base"></i>
                        <span className="text-[10px] sm:text-xs md:text-sm">
                          7
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-amber-500 text-white text-xs sm:text-sm md:text-base font-bold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:bg-orange-500">
                          TRAILER
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-3 md:pt-4 flex flex-col justify-between h-[90px] sm:h-[110px] md:h-[130px] lg:h-[150px]">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight line-clamp-2">
                        Wicked For Good
                      </h3>

                      <span className="text-gray-300 text-sm sm:text-md md:text-base mt-1 mb-1 flex items-center gap-2">
                        <span>137 min</span>
                        <span className="w-px h-4 bg-gray-500"></span>
                        <span>November 20, 2025</span>
                      </span>

                      <button
                        className="group relative overflow-hidden
      flex items-center justify-center gap-2
      w-full py-2.5 rounded-2xl
      font-semibold text-white
      bg-gradient-to-r from-red-500 via-rose-500 to-red-600
      shadow-md shadow-red-500/30
      hover:shadow-lg hover:shadow-red-500/40
      transition-all duration-300
      text-xs sm:text-sm md:text-base"
                      >
                        <span className="
      absolute inset-0 -translate-x-full
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    " />

                        <i className="fi fi-rs-ticket-alt text-sm md:text-base leading-none"></i>
                        <span className="relative z-10 tracking-wide">
                          Get Tickets
                        </span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="group bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg 
                  hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 
                  transition-all duration-300 cursor-pointer p-2 lg:p-3 xl:p-4"
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="/img/MoviePoster/Disney's Zootopia 2.jpg"
                        alt="Disney's Zootopia 2"
                        className="w-full h-60 sm:h-65 md:h-70 lg:h-75 xl:h-80 object-cover"
                      />

                      <span
                        className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-500 text-white text-[10px] sm:text-xs md:text-sm font-bold px-2 py-1 rounded-lg shadow 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        C16
                      </span>

                      <div
                        className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs md:text-sm px-1 sm:px-2 py-1 rounded-lg flex items-center gap-1 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        <i className="fa-solid fa-star text-amber-400 text-xs sm:text-sm md:text-base"></i>
                        <span className="text-[10px] sm:text-xs md:text-sm">
                          8
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-amber-500 text-white text-xs sm:text-sm md:text-base font-bold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:bg-orange-500">
                          TRAILER
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-3 md:pt-4 flex flex-col justify-between h-[90px] sm:h-[110px] md:h-[130px] lg:h-[150px]">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight line-clamp-2">
                        Disney's Zootopia 2
                      </h3>

                      <span className="text-gray-300 text-sm sm:text-md md:text-base mt-1 mb-1 flex items-center gap-2">
                        <span>108 min</span>
                        <span className="w-px h-4 bg-gray-500"></span>
                        <span>November 27, 2025</span>
                      </span>

                      <button
                        className="group relative overflow-hidden
      flex items-center justify-center gap-2
      w-full py-2.5 rounded-2xl
      font-semibold text-white
      bg-gradient-to-r from-red-500 via-rose-500 to-red-600
      shadow-md shadow-red-500/30
      hover:shadow-lg hover:shadow-red-500/40
      transition-all duration-300
      text-xs sm:text-sm md:text-base"
                      >
                        <span className="
      absolute inset-0 -translate-x-full
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    " />

                        <i className="fi fi-rs-ticket-alt text-sm md:text-base leading-none"></i>
                        <span className="relative z-10 tracking-wide">
                          Get Tickets
                        </span>
                      </button>
                    </div>
                  </div>

                  <div
                    className="group bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg 
                  hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 
                  transition-all duration-300 cursor-pointer p-2 lg:p-3 xl:p-4"
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src="/img/MoviePoster/Now You See Me Now You Don't.jpg"
                        alt="Now You See Me Now You Don't"
                        className="w-full h-60 sm:h-65 md:h-70 lg:h-75 xl:h-80 object-cover"
                      />

                      <span
                        className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-amber-500 text-white text-[10px] sm:text-xs md:text-sm font-bold px-2 py-1 rounded-lg shadow 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        C16
                      </span>

                      <div
                        className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/70 text-white text-[10px] sm:text-xs md:text-sm px-1 sm:px-2 py-1 rounded-lg flex items-center gap-1 
                      opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      >
                        <i className="fa-solid fa-star text-amber-400 text-xs sm:text-sm md:text-base"></i>
                        <span className="text-[10px] sm:text-xs md:text-sm">
                          9
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-amber-500 text-white text-xs sm:text-sm md:text-base font-bold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:bg-orange-500">
                          TRAILER
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-3 md:pt-4 flex flex-col justify-between h-[90px] sm:h-[110px] md:h-[130px] lg:h-[150px]">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight line-clamp-2">
                        Now You See Me Now You Don't
                      </h3>

                      <span className="text-gray-300 text-sm sm:text-md md:text-base mt-1 mb-1 flex items-center gap-2">
                        <span>113 min</span>
                        <span className="w-px h-4 bg-gray-500"></span>
                        <span>November 13, 2025</span>
                      </span>

                      <button
                        className="group relative overflow-hidden
      flex items-center justify-center gap-2
      w-full py-2.5 rounded-2xl
      font-semibold text-white
      bg-gradient-to-r from-red-500 via-rose-500 to-red-600
      shadow-md shadow-red-500/30
      hover:shadow-lg hover:shadow-red-500/40
      transition-all duration-300
      text-xs sm:text-sm md:text-base"
                      >
                        <span className="
      absolute inset-0 -translate-x-full
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      group-hover:translate-x-full
      transition-transform duration-700
    " />

                        <i className="fi fi-rs-ticket-alt text-sm md:text-base leading-none"></i>
                        <span className="relative z-10 tracking-wide">
                          Get Tickets
                        </span>
                      </button>
                    </div>
                  </div>

                  {renderNowMovieList()}
                </Slider>
              </div>

              <div className="flex justify-center items-center mt-6">
                <NavLink
                  to="/movie-list"
                  className="relative inline-block text-red-500 font-semibold bg-white hover:bg-red-500 border hover:text-white border-red-500 hover:border-red-500 
    rounded-md sm:rounded-lg md:rounded-xl 
    px-3 sm:px-4 md:px-6 xl:px-8 
    py-1.5 sm:py-2 md:py-3 
    text-xs sm:text-sm md:text-base lg:text-lg 
    shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  SHOW MORE
                </NavLink>
              </div>
            </div>
          </div>
        )}

        {activeTab === "upcoming" && (
          <div className="py-4 sm:py-6 md:py-8 bg-black">
            <div className="container">
              <div className="flex items-center mb-6">
                <div className="flex flex-col justify-center flex-1 gap-1">
                  <div className="border-t-2 border-amber-500 h-0.5"></div>
                  <div className="border-t-2 border-amber-500 h-0.5"></div>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold text-amber-500 px-4">
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
                  className="relative inline-block text-amber-500 font-semibold bg-black hover:bg-amber-500 border hover:text-black border-amber-500 hover:border-amber-500 
    rounded-md sm:rounded-lg md:rounded-xl 
    px-3 sm:px-4 md:px-6 xl:px-8 
    py-1.5 sm:py-2 md:py-3 
    text-xs sm:text-sm md:text-base lg:text-lg 
    shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  SHOW MORE
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* NEWS */}
      <section className="container mx-auto pb-10 sm:pb-12 md:pb-14 lg:pb-16">
        {/* HEADING */}
        <div className="flex items-center mb-4 sm:mb-6 w-full relative">
          {/* LEFT BAR */}
          <div className="flex-1 h-6 bg-amber-500 relative">
            <div
              style={{
                position: "absolute",
                right: "-16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: 0,
                height: 0,
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                borderLeft: "16px solid #f59e0b",
              }}
            ></div>
          </div>

          {/* TITLE */}
          <h2
            className="
        text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 
        font-extrabold text-black px-6 md:px-8 lg:px-10
        text-center transition-all
      "
          >
            NEWS & REVIEWS
          </h2>

          {/* RIGHT BAR */}
          <div className="flex-1 h-6 bg-amber-500 relative">
            <div
              style={{
                position: "absolute",
                left: "-16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: 0,
                height: 0,
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                borderRight: "16px solid #f59e0b",
              }}
            ></div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="flex flex-wrap gap-6 sm:gap-8 justify-center md:flex-col lg:flex-row"
        >
          {/* LEFT BIG CARD */}
          <div className="w-full sm:w-[90%] md:w-full lg:flex-1 min-w-[260px]">
            <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
              <div className="h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80 bg-gray-300 overflow-hidden">
                <img
                  src="./img/News/news1.jpg"
                  alt="Predator Badlands"
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <h3
                  className="
                text-sm sm:text-base md:text-lg lg:text-xl 
                font-semibold text-gray-800 mb-2 transition
                hover:text-red-600
            "
                >
                  [Review] Predator Badlands: Sự Hồi Sinh Của Thương Hiệu Quái
                  Thú Lừng Lẫy
                </h3>

                <NavLink
                  to="*"
                  className="text-xs md:text:sm lg:text-base text-red-500 font-semibold hover:text-red-700 transition duration-300"
                >
                  Read more &gt;&gt;
                </NavLink>
              </div>
            </div>
          </div>

          {/* RIGHT THREE CARDS */}
          <div className="w-full sm:w-[90%] md:w-full lg:flex-1 flex flex-col gap-6 sm:gap-8 min-w-[260px]">
            {/* CARD 1 */}
            <div className="flex bg-white shadow-lg overflow-hidden rounded-xl cursor-pointer">
              <div className="overflow-hidden shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 h-24 sm:h-28 md:h-32 lg:h-36">
                <img
                  src="./img/News/news2.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <h3 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 hover:text-red-600 transition truncate sm:whitespace-normal sm:line-clamp-none line-clamp-2">
                  [Review] Truy Tìm Long Diên Hương: Võ Thuật - Hài Dẫn Đầu Màn Ảnh Việt
                </h3>
                <NavLink
                  to="*"
                  className="text-xs md:text:sm lg:text-base text-red-500 font-semibold hover:text-red-700 transition duration-300"
                >
                  Read more &gt;&gt;
                </NavLink>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex bg-white shadow-lg overflow-hidden rounded-xl cursor-pointer">
              <div className="overflow-hidden shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 h-24 sm:h-28 md:h-32 lg:h-36">
                <img
                  src="./img/News/news3.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <h3 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 hover:text-red-600 transition truncate sm:whitespace-normal sm:line-clamp-none line-clamp-2">
                  [Review] Trái Tim Què Quặt: Hai Mối Tình Và Một Vụ Án Mạng
                </h3>
                <NavLink
                  to="*"
                  className="text-xs md:text:sm lg:text-base text-red-500 font-semibold hover:text-red-700 transition duration-300"
                >
                  Read more &gt;&gt;
                </NavLink>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex bg-white shadow-lg overflow-hidden rounded-xl cursor-pointer">
              <div className="overflow-hidden shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 h-24 sm:h-28 md:h-32 lg:h-36">
                <img
                  src="./img/News/news4.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <h3 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-2 hover:text-red-600 transition truncate sm:whitespace-normal sm:line-clamp-none line-clamp-2">
                  [Review] Cục Vàng Của Ngoại: Việt Hương - Hồng Đào Lấy Nước Mắt Khán Giả
                </h3>
                <NavLink
                  to="*"
                  className="text-xs md:text:sm lg:text-base text-red-500 font-semibold hover:text-red-700 transition duration-300"
                >
                  Read more &gt;&gt;
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-6">
          <NavLink
            to="*"
            className="relative inline-block font-semibold text-gray-600 bg-white border border-gray-400 rounded-md px-2 py-0.5 text-[10px] shadow hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 sm:px-2.5 sm:py-1 sm:text-xs md:px-3 md:text-sm lg:px-4 lg:py-2 lg:text-base xl:px-5 xl:py-2 xl:text-lg 2xl:px-6 2xl:py-2 2xl:text-xl"
          >
            SEE MORE NEWS
          </NavLink>
        </div>
      </section>

      {/* Modal Trailer */}
      {openTrailerModal && (
        <Trailer
          propTrailer={trailerUrl}
          onClose={() => setOpenTrailerModal(false)}
        />
      )}

      {showAlert && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg z-50">
          You must log in to book tickets
        </div>
      )}

      {openModal === "login" && <Login handleClose={handleCloseModal} />}

      {/* NOTIFY TOAST */}
      {showNotify && (
        <div className="
            fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-amber-900 font-medium
            bg-amber-300
            shadow-md px-5 py-3 rounded-lg shadow-2xl z-50 animate__animated animate__fadeInDown animate__fast
          ">
          <i className="fi fi-rs-bell-ring"></i>
          <span>You’ll be notified when tickets are available</span>
        </div>
      )}

    </>
  );
};

export default Home;
