import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList } from '../../HomeTemplate/MovieList/slice'
import { addMovie } from './slice'
import Movie from './movie'
import moment from 'moment'
import { useFormik } from 'formik'

const Movies = () => {
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch()
    const state = useSelector((state) => state.movieListReducer)
    const { data, loading } = state

    useEffect(() => {
        dispatch(fetchMovieList())
    }, [dispatch])

    const validate = values => {
        const errors = {};
        if (!values.tenPhim) errors.tenPhim = 'Movie name is required';
        if (!values.trailer) {
            errors.trailer = 'Trailer URL is required';
        } else {
            try {
                new URL(values.trailer);
            } catch (_) {
                errors.trailer = 'Invalid URL format';
            }
        }
        if (!values.moTa) errors.moTa = 'Description is required';
        if (!values.ngayKhoiChieu) errors.ngayKhoiChieu = 'Please select a release date';
        if (values.danhGia < 0 || values.danhGia > 10) errors.danhGia = 'Rating 0-10';
        if (!values.hinhAnh) errors.hinhAnh = 'Poster is required';
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            maNhom: 'GP01',
            ngayKhoiChieu: '',
            sapChieu: false,
            dangChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: null,
        },
        validate,
        onSubmit: async (values) => {
            const formData = new FormData();
            for (let key in values) {
                if (key === 'hinhAnh') {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                } else if (key === 'ngayKhoiChieu') {
                    formData.append(key, moment(values.ngayKhoiChieu).format('DD/MM/YYYY'));
                } else {
                    formData.append(key, values[key]);
                }
            }
            await dispatch(addMovie(formData));
            setShowModal(false);
            formik.resetForm();
            dispatch(fetchMovieList());
        },
    });

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        if (file) formik.setFieldValue('hinhAnh', file);
    };

    const filteredMovies = data?.filter((movie) =>
        movie.tenPhim.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderNowMovieList = () => {
        return filteredMovies?.map((movie) => {
            if (movie.dangChieu) {
                return <Movie key={movie.maPhim} propMovie={movie} />
            }
            return null;
        })
    }

    const renderUpComingMovieList = () => {
        return filteredMovies?.map((movie) => {
            if (!movie.dangChieu) {
                return <Movie key={movie.maPhim} propMovie={movie} />
            }
            return null;
        })
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <div className="animate-spin h-10 w-10 border-4 border-indigo-500 border-t-transparent rounded-full mb-4"></div>
                <p className="text-gray-500 text-lg font-medium">Loading...</p>
            </div>
        )
    }

    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-black mb-6">Movies Management</h1>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-2/3">
                        <input
                            type="text"
                            placeholder="Search Movie by Title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
                        />
                    </div>

                    <button
                        className="w-full md:w-auto bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all cursor-pointer"
                        onClick={() => setShowModal(true)}>
                        Add Movie
                    </button>
                </div>

                <div className="space-y-8">
                    {/* NOW SHOWING */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="px-6 py-4 border-b">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Now Showing Movies
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-gray-100 hidden sm:table-header-group">
                                    <tr>
                                        <th className="th">ID</th>
                                        <th className="th">Poster</th>
                                        <th className="th">Title</th>
                                        <th className="th hidden md:table-cell">Release</th>
                                        <th className="th hidden lg:table-cell">Showtime</th>
                                        <th className="th text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {renderNowMovieList()}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* UPCOMING */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="px-6 py-4 border-b">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Upcoming Movies
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <tbody className="divide-y">
                                    {renderUpComingMovieList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl relative overflow-y-auto max-h-[95%] ">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex justify-between items-center p-6 border-b border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-800">Add New Movie</h3>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors duration-200"
                                >
                                    <i className="fa-solid fa-xmark text-xl"></i>
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-gray-700 mb-2">Movie Name</label>
                                        <input name="tenPhim" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tenPhim} className={`w-full px-4 py-2 border rounded-lg ${formik.touched.tenPhim && formik.errors.tenPhim ? 'border-red-500' : 'border-gray-300'}`} />
                                        {formik.touched.tenPhim && formik.errors.tenPhim && <p className="text-red-500 text-xs mt-1">{formik.errors.tenPhim}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-gray-700 mb-2">Trailer URL</label>
                                        <input name="trailer" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.trailer} className={`w-full px-4 py-2 border rounded-lg ${formik.touched.trailer && formik.errors.trailer ? 'border-red-500' : 'border-gray-300'}`} />
                                        {formik.touched.trailer && formik.errors.trailer && <p className="text-red-500 text-xs mt-1">{formik.errors.trailer}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-gray-700 mb-2">Poster File</label>
                                        <input type="file" onChange={handleChangeFile} accept="image/*" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                        {formik.touched.hinhAnh && formik.errors.hinhAnh && <p className="text-red-500 text-xs mt-1">{formik.errors.hinhAnh}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-gray-700 mb-2">Release Date</label>
                                        <input name="ngayKhoiChieu" type="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ngayKhoiChieu} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                        {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu && <p className="text-red-500 text-xs mt-1">{formik.errors.ngayKhoiChieu}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Rating (0-10)</label>
                                        <input name="danhGia" type="number" onChange={formik.handleChange} value={formik.values.danhGia} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Showing</label>
                                        <select name="dangChieu" value={formik.values.dangChieu} onChange={e => formik.setFieldValue('dangChieu', e.target.value === 'true')} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Upcoming</label>
                                        <select name="sapChieu" value={formik.values.sapChieu} onChange={e => formik.setFieldValue('sapChieu', e.target.value === 'true')} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Hot</label>
                                        <select name="hot" value={formik.values.hot} onChange={e => formik.setFieldValue('hot', e.target.value === 'true')} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Description</label>
                                    <textarea name="moTa" onChange={formik.handleChange} value={formik.values.moTa} className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24" />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="cursor-pointer px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200"
                                >
                                    Close
                                </button>

                                <button
                                    type="submit"
                                    className="cursor-pointer px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-rose-600 transition duration-200 active:scale-95 shadow-sm"
                                >
                                    Add Movie
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Movies