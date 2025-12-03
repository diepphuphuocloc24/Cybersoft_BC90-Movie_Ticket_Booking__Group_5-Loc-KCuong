import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetail } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import ListCinema from './listcinema';
import Cinema from './cinema';

const MovieDetail = () => {
    const { maPhim } = useParams();

    const dispatch = useDispatch();

    const state = useSelector((state) => state.movieDetailReducer);

    const [selectedMaHeThongRap, setSelectedMaHeThongRap] = useState(null);

    const { dataDetail, loading } = state;

    useEffect(() => {
        dispatch(fetchMovieDetail(maPhim));
    }, [dispatch, maPhim]);

    const handleSelectCinemaSystem = (maHeThongRap) => {
        setSelectedMaHeThongRap(maHeThongRap);
    };

    if (loading) {
        return (
            <div className="p-6 space-y-6 animate-pulse">
                <div className="w-full h-80 bg-[#C6C6C6]/70 rounded-xl"></div>

                <div className="h-7 bg-[#C6C6C6]/70 rounded w-2/3"></div>

                <div className="space-y-3">
                    <div className="h-4 bg-[#C6C6C6]/70 rounded w-full"></div>
                    <div className="h-4 bg-[#C6C6C6]/70 rounded w-5/6"></div>
                    <div className="h-4 bg-[#C6C6C6]/70 rounded w-4/6"></div>
                </div>

                <div className="h-12 bg-[#C6C6C6]/70 rounded-xl w-40"></div>
            </div>
        )
    }

    const getEmbedUrl = (url) => {
        if (!url) return "";
        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        return url;
    };

    const renderListCinema = () => {
        return dataDetail?.heThongRapChieu?.map((chainCinema) => {
            return (
                <ListCinema
                    key={chainCinema.maHeThongRap}
                    propChainCinema={chainCinema}
                    onSelectedCinema={() => handleSelectCinemaSystem(chainCinema.maHeThongRap)}
                    isActive={selectedMaHeThongRap === chainCinema.maHeThongRap}
                />

            )
        })
    };

    const renderEachCinemas = () => {
        if (!selectedMaHeThongRap) return null;

        const selected = dataDetail?.heThongRapChieu?.find(
            (x) => x.maHeThongRap === selectedMaHeThongRap
        );

        return selected?.cumRapChieu?.map((cinema) => (
            <Cinema key={cinema.maCumRap} propEachCinema={cinema} />
        ));
    };

    const renderDuration = () => {
        const movieSet = new Set();
        const result = [];

        dataDetail?.heThongRapChieu?.forEach(chainCinema => {
            chainCinema?.cumRapChieu?.forEach(cinema => {
                cinema?.lichChieuPhim?.forEach(movieDetail => {
                    if (!movieSet.has(movieDetail.maPhim)) {
                        movieSet.add(movieDetail.maPhim);
                        result.push(
                            <p key={movieDetail.maPhim} className="text-sm text-gray-700">
                                {movieDetail.thoiLuong} min
                            </p>
                        );
                    }
                });
            });
        });

        return result;
    };

    return (
        <div className="bg-white text-gray-800 py-10">
            <div className="container mx-auto px-4">
                {/* DETAIL INFORMATION */}
                <div className="flex flex-col sm:flex-col-reverse md:flex-row gap-4 md:gap-6 lg:gap-8">

                    {/* LEFT CONTENT */}
                    <div className="order-2 sm:order-2 md:order-1 lg:order-1 lg:w-3/5 flex flex-col gap-2 sm:gap-3 md:gap-4">
                        {dataDetail?.dangChieu ? (
                            <p className="bg-amber-500 text-black font-bold w-max px-2 py-1 sm:px-3 sm:py-1.5 rounded-full mb-3 sm:mb-4 md:mb-5 text-[10px] sm:text-xs md:text-sm lg:text-base">
                                NOW SHOWING
                            </p>
                        ) : (
                            <p className="bg-black text-amber-500 font-semibold w-max px-2 py-1 sm:px-3 sm:py-1.5 rounded-full mb-3 sm:mb-4 md:mb-5 border border-orange-500 shadow-inner text-[10px] sm:text-xs md:text-sm lg:text-base">
                                COMING SOON
                            </p>
                        )}

                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold border-t-2 border-b-2 border-red-500 py-1 sm:py-2 md:py-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                            {dataDetail?.tenPhim}
                        </h2>

                        <p className="bg-amber-500 text-white font-bold w-max px-2 py-1 sm:px-3 sm:py-1.5 rounded mb-3 sm:mb-4 md:mb-5 text-[10px] sm:text-xs md:text-sm lg:text-base">
                            C16
                        </p>

                        <div className="mb-3 sm:mb-4 md:mb-5">
                            <h3 className="text-[11px] sm:text-sm md:text-base lg:text-lg text-red-600 font-semibold mb-1 tracking-wide uppercase">Synopsis</h3>
                            <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed">
                                {dataDetail?.moTa}
                            </p>
                        </div>

                        <div className="mb-3 sm:mb-4 md:mb-5">
                            <h3 className="text-[11px] sm:text-sm md:text-base lg:text-lg text-red-600 font-semibold mb-1 tracking-wide uppercase">Release Date</h3>
                            <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base">
                                {dataDetail?.ngayKhoiChieu
                                    ? new Date(dataDetail.ngayKhoiChieu).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                    : ""}
                            </p>
                        </div>

                        <div className="mb-3 sm:mb-4 md:mb-5">
                            <h3 className="text-[11px] sm:text-sm md:text-base lg:text-lg text-red-600 font-semibold mb-1 tracking-wide uppercase">Movie Trailer</h3>
                            {dataDetail?.trailer && (
                                <iframe
                                    className="w-full h-36 sm:h-48 md:h-60 lg:h-72 rounded"
                                    src={getEmbedUrl(dataDetail?.trailer)}
                                    title="Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="order-1 sm:order-1 md:order-2 lg:order-2 lg:w-2/5 flex flex-col gap-2 sm:gap-3 md:gap-4">
                        <img
                            src={dataDetail?.hinhAnh}
                            alt="Movie Poster"
                            className="rounded-lg shadow-lg w-[70%] sm:w-[75%] md:w-[80%] lg:w-[70%] mx-auto object-cover"
                        />

                        <div className="flex flex-row justify-between bg-gray-100 p-1 sm:p-2 md:p-3 border-t-2 border-b-2 border-red-500 text-[10px] sm:text-xs md:text-sm lg:text-base">
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">RUNTIME</h4>
                                {renderDuration()}
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">RATING</h4>
                                <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base flex items-center gap-1">
                                    <i className="fa-solid fa-star text-yellow-500"></i>
                                    {dataDetail?.danhGia}
                                </p>
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base">FORMAT</h4>
                                <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base">2D / IMAX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SHOWTIME TABLE */}
                <div className="mt-8 sm:mt-10 md:mt-12 space-y-4 sm:space-y-5 md:space-y-6">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-red-600 font-semibold mb-2 sm:mb-3 md:mb-4 tracking-wide uppercase">
                        Times & Tickets
                    </h3>

                    <div className='flex flex-col gap-2 sm:gap-3 md:gap-4'>
                        <label className="block mb-1 sm:mb-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-black dark:text-gray-100">
                            Cinema:
                        </label>

                        <div className="flex justify-start items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                            {renderListCinema()}
                        </div>
                    </div>

                    <div className="text-xs sm:text-sm md:text-base lg:text-base">
                        {renderEachCinemas()}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default MovieDetail
