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
                            <p key={movieDetail.maPhim} className="text-sm text-gray-700 text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm">
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
        <div className="bg-white text-gray-800 py-4 sm:py-10">
            <div className="container mx-auto">
                {/* DETAIL */}
                {/* MOBILE BADGE (ONLY BELOW SM) */}
                <div className="block sm:hidden mb-3">
                    {dataDetail?.dangChieu ? (
                        <p className="bg-amber-500 text-black font-bold w-max px-2 py-1 rounded-full text-xs">NOW SHOWING</p>
                    ) : (
                        <p className="bg-black text-amber-500 font-semibold w-max px-2 py-1 rounded-full border border-orange-500 shadow-inner text-xs">COMING SOON</p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12">
                    {/* LEFT */}
                    <div className="order-3 sm:order-1 md:order-1 lg:order-1 sm:w-3/5 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                        {/* DESKTOP BADGE (HIDDEN ON MOBILE) */}
                        <div className="hidden sm:block">
                            {dataDetail?.dangChieu ? (
                                <p className="bg-amber-500 text-black font-bold w-max px-3 py-1.5 rounded-full text-xs md:text-sm">NOW SHOWING</p>
                            ) : (
                                <p className="bg-black text-amber-500 font-semibold w-max px-3 py-1.5 rounded-full border border-orange-500 shadow-inner text-xs md:text-sm">COMING SOON</p>
                            )}
                        </div>

                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold border-t-2 border-b-2 border-red-500 py-1 sm:py-2 md:py-3 lg:py-4">
                            {dataDetail?.tenPhim}
                        </h2>

                        <p className="bg-amber-500 text-white font-bold w-max px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm">C16</p>

                        <div>
                            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-red-600 font-semibold mb-2 tracking-wide uppercase">Synopsis</h3>
                            <p className="text-gray-700 text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm leading-relaxed">{dataDetail?.moTa}</p>
                        </div>

                        <div>
                            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-red-600 font-semibold mb-2 tracking-wide uppercase">Release Date</h3>
                            <p className="text-gray-700 text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm">{dataDetail?.ngayKhoiChieu ? new Date(dataDetail.ngayKhoiChieu).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}</p>
                        </div>

                        <div>
                            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-red-600 font-semibold mb-2 tracking-wide uppercase">Movie Trailer</h3>
                            {dataDetail?.trailer && (
                                <div className="w-[80%] sm:w-full aspect-video">
                                    <iframe className="w-full h-full rounded" src={getEmbedUrl(dataDetail?.trailer)} title="Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="order-2 sm:order-2 md:order-2 lg:order-2 sm:w-2/5 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                        <img src={dataDetail?.hinhAnh} alt="Movie Poster" className="rounded-lg shadow-lg w-[70%] sm:w-[80%] mx-auto object-cover" />

                        <div className="grid grid-cols-3 gap-4 w-[90%] sm:w-full mx-auto bg-gray-100 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 border-t-2 border-b-2 border-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm">
                            <div className="flex flex-col items-center text-center space-y-1">
                                <h4 className="text-red-600 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">RUNTIME</h4>
                                {renderDuration()}
                            </div>

                            <div className="flex flex-col items-center text-center space-y-1">
                                <h4 className="text-red-600 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">RATING</h4>
                                <p className="text-gray-700 flex items-center gap-1"><i className="fa-solid fa-star text-yellow-500"></i>{dataDetail?.danhGia}</p>
                            </div>

                            <div className="flex flex-col items-center text-center space-y-1">
                                <h4 className="text-red-600 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">FORMAT</h4>
                                <p className="text-gray-700">2D / IMAX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TIME */}
                <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">

                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-red-600 font-semibold mb-2 tracking-wide uppercase">
                        Times & Tickets
                    </h3>

                    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                        <label className="block mb-2 sm:mb-2 text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm font-semibold text-gray-black dark:text-gray-100">
                            Cinemas Currently Available:
                        </label>

                        <div className="flex justify-start items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
                            {renderListCinema()}
                        </div>
                    </div>

                    <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        {renderEachCinemas()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
