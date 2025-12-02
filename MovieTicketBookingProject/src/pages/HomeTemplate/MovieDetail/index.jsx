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
                <div className="flex flex-col lg:flex-row gap-15">

                    {/* LEFT CONTENT */}
                    <div className="lg:w-3/5 flex flex-col">
                        {dataDetail?.dangChieu ? (
                            <p className="bg-amber-500 text-black font-bold w-max p-2 rounded-full mb-5 shadow-lg border-black">
                                NOW SHOWING
                            </p>
                        ) : (
                            <p className="bg-black text-amber-500 font-semibold w-max p-2 rounded-full mb-5 border border-orange-500 shadow-inner">
                                COMING SOON
                            </p>
                        )}

                        <h2 className="text-3xl font-bold border-t-2 border-b-2 border-red-500 py-3 mb-8">
                            {dataDetail?.tenPhim}
                        </h2>

                        <p className="bg-amber-500 text-white font-bold w-max px-4 py-1 rounded mb-10">
                            C16
                        </p>

                        <div className="mb-10">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Synopsis</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {dataDetail?.moTa}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Release Date</h3>
                            <p className="text-gray-700">
                                {dataDetail?.ngayKhoiChieu
                                    ? new Date(dataDetail.ngayKhoiChieu).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                    : ""}
                            </p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Movie Trailer</h3>
                            {dataDetail?.trailer && (
                                <iframe
                                    className="w-full md:h-80 rounded"
                                    src={getEmbedUrl(dataDetail?.trailer)}
                                    title="Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                            )}
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:w-2/5 flex flex-col gap-6">
                        <img
                            src={dataDetail?.hinhAnh}
                            alt="Movie Poster"
                            className="rounded-lg shadow-lg w-[70%] mx-auto object-cover"
                        />

                        <div className="flex justify-between bg-gray-100 p-4 border-t-2 border-b-2 border-red-500">
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">RUNTIME</h4>
                                {renderDuration()}
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">RATING</h4>
                                <p className="text-sm text-gray-700 flex items-center gap-1">
                                    <i className="fa-solid fa-star text-yellow-500"></i>
                                    {dataDetail?.danhGia}
                                </p>

                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">FORMAT</h4>
                                <p className="text-sm text-gray-700">2D / IMAX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SHOWTIME TABLE */}
                <div className="mt-12 space-y-6">
                    <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">
                        Times & Tickets
                    </h3>

                    <div className='flex flex-col'>
                        <label className="block mb-2 text-lg font-semibold text-gray-black dark:text-gray-100">
                            Cinema:
                        </label>

                        <div className="flex justify-start items-center gap-5">
                            {renderListCinema()}
                        </div>
                    </div>

                    {renderEachCinemas()}
                </div>
            </div >
        </div >
    )
}

export default MovieDetail
