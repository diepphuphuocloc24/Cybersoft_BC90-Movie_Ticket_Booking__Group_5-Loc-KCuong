import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList } from './../../1.HomeTemplate/2.MovieList/slice'
import Movie from './movie'

const Movies = () => {
    const dispatch = useDispatch()

    const state = useSelector((state) => state.movieListReducer)

    const { data, loading } = state

    useEffect(() => {
        dispatch(fetchMovieList())
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <svg
                    className="animate-spin h-10 w-10 text-indigo-500 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
                <p className="text-gray-500 text-lg font-medium">Loading...</p>
            </div>
        )
    }

    const renderNowMovieList = () => {
        return data?.map((movie) => {
            if (movie.dangChieu) {
                return <Movie key={data.maPhim} propMovie={movie} />
            }
        })
    }

    const renderUpComingMovieList = () => {
        return data?.map((movie) => {
            if (!movie.dangChieu) {
                return <Movie key={data.maPhim} propMovie={movie} />
            }
        })
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies Management</h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-2/3">
                    <input
                        type="text"
                        placeholder="Search Movie..."
                        className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
                    />
                    <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 
    hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 
    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 
    transition-all duration-200 shadow-sm cursor-pointer font-medium">
                        <i className="fi fi-rr-bars-filter"></i>
                        Filter
                    </button>
                </div>

                <button className="w-full md:w-auto bg-linear-to-r from-pink-500 to-purple-500 
    hover:from-pink-600 hover:to-purple-600 text-white font-semibold 
    py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 
    focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 cursor-pointer">
                    Add Movie
                </button>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Now Showing Movies</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Movie ID
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Poster
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider max-w-[200px] wrap-break-word text-center">
                                        Movie Title
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Release Date
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Showtime
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {renderNowMovieList()}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">Upcoming Movies</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Movie ID
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Poster
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider max-w-[200px] wrap-break-word text-center">
                                        Movie Title
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Release Date
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Showtime
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {renderUpComingMovieList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies
