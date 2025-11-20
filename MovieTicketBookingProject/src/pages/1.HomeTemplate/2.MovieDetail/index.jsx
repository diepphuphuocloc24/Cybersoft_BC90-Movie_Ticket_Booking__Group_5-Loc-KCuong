import React from 'react'

const MovieDetail = () => {
    return (
        <div className="bg-white text-gray-800 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-15">

                    {/* LEFT CONTENT */}
                    <div className="lg:w-3/5 flex flex-col">

                        <h2 className="text-3xl font-bold border-t-2 border-b-2 border-red-500 py-3 mb-8">
                            PREDATOR: BADLANDS (2025)
                        </h2>

                        <p className="bg-amber-500 text-white font-bold w-max px-4 py-1 rounded mb-10">
                            C16
                        </p>

                        <div className="mb-10">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Synopsis</h3>
                            <p className="text-gray-700 leading-relaxed">
                                In the future, on a remote planet, a young and ostracized Predator finds an unexpected ally in Thia and embarks on a perilous journey in search of the ultimate enemy. Directed by Dan Trachtenberg — the filmmaker behind Prey — the movie is part of the legendary Predator franchise.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Cast</h3>
                            <p className="text-gray-700">
                                Elle Fanning, Dimitrius Schuster-Koloamatang
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Director</h3>
                            <p className="text-gray-700">Dan Trachtenberg</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Release Date</h3>
                            <p className="text-gray-700">06 Nov 2025</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl text-red-600 font-semibold mb-3 tracking-wide uppercase">Movie Trailer</h3>
                            <iframe
                                className="w-full md:h-80 rounded"
                                src="https://www.youtube.com/embed/oFkbsEKaoSE?si=qHL1WXaFf2aPaGwb"
                                title="Trailer"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:w-2/5 flex flex-col gap-6">
                        <img
                            src="./img/MoviePoster/Predator Badlands.jpg"
                            alt=""
                            className="rounded-lg shadow-lg w-[70%] mx-auto object-cover"
                        />

                        <div className="flex justify-between bg-gray-100 p-4 border-t-2 border-b-2 border-red-500">
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">RUNTIME</h4>
                                <p className="text-sm text-gray-700">108 mins</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">GENRE</h4>
                                <p className="text-sm text-gray-700">Science Fiction</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">LANGUAGE</h4>
                                <p className="text-sm text-gray-700">English</p>
                            </div>
                            <div className="flex flex-col text-center">
                                <h4 className="text-red-600 font-semibold">FORMAT</h4>
                                <p className="text-sm text-gray-700">2D / IMAX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SHOWTIME TABLE */}
                <div className="mt-12 overflow-x-auto space-y-10">

                    {/* GOLD HALL 1 */}
                    <table className="w-full border-collapse shadow-xl rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-sm text-white">
                                <th className="px-4 py-3 bg-blue-700 border-r border-white font-bold text-lg">GOLD HALL 1</th>
                                <th className="px-4 py-3 bg-red-500">MONDAY</th>
                                <th className="px-4 py-3 bg-gray-800">TUESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">WEDNESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">THURSDAY</th>
                                <th className="px-4 py-3 bg-gray-800">FRIDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SATURDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SUNDAY</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-white">
                                <td className="px-4 py-4 bg-gray-900 text-white font-semibold border-r border-white">
                                    Predator: Badlands (2025)
                                </td>

                                <td colSpan={7} className="px-4 py-4 bg-gray-900">
                                    <div className="flex items-center gap-4">
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            10:50
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            13:25
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            19:00
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* PLATINUM HALL 2 */}
                    <table className="w-full border-collapse shadow-xl rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-sm text-white">
                                <th className="px-4 py-3 bg-blue-700 border-r border-white font-bold text-lg">PLATINUM HALL 2</th>
                                <th className="px-4 py-3 bg-red-500">MONDAY</th>
                                <th className="px-4 py-3 bg-gray-800">TUESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">WEDNESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">THURSDAY</th>
                                <th className="px-4 py-3 bg-gray-800">FRIDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SATURDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SUNDAY</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-white">
                                <td className="px-4 py-4 bg-gray-900 text-white font-semibold border-r border-white">
                                    Predator: Badlands (2025)
                                </td>

                                <td colSpan={7} className="px-4 py-4 bg-gray-900">
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            10:50
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            13:25
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            19:00
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* SILVER HALL 3 */}
                    <table className="w-full border-collapse shadow-xl rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-sm text-white">
                                <th className="px-4 py-3 bg-blue-700 border-r border-white font-bold text-lg">SILVER HALL 3</th>
                                <th className="px-4 py-3 bg-red-500">MONDAY</th>
                                <th className="px-4 py-3 bg-gray-800">TUESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">WEDNESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">THURSDAY</th>
                                <th className="px-4 py-3 bg-gray-800">FRIDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SATURDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SUNDAY</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-white">
                                <td className="px-4 py-4 bg-gray-900 text-white font-semibold border-r border-white">
                                    Predator: Badlands (2025)
                                </td>

                                <td colSpan={7} className="px-4 py-4 bg-gray-900">
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            10:50
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            13:25
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            19:00
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* CLASSIC HALL 4 */}
                    <table className="w-full border-collapse shadow-xl rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-sm text-white">
                                <th className="px-4 py-3 bg-blue-700 border-r border-white font-bold text-lg">CLASSIC HALL 4</th>
                                <th className="px-4 py-3 bg-red-500">MONDAY</th>
                                <th className="px-4 py-3 bg-gray-800">TUESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">WEDNESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">THURSDAY</th>
                                <th className="px-4 py-3 bg-gray-800">FRIDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SATURDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SUNDAY</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-white">
                                <td className="px-4 py-4 bg-gray-900 text-white font-semibold border-r border-white">
                                    Predator: Badlands (2025)
                                </td>

                                <td colSpan={7} className="px-4 py-4 bg-gray-900">
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            10:50
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            13:25
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            19:00
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* GOLD HALL 5 */}
                    <table className="w-full border-collapse shadow-xl rounded-lg overflow-hidden">
                        <thead>
                            <tr className="text-sm text-white">
                                <th className="px-4 py-3 bg-blue-700 border-r border-white font-bold text-lg">GOLD HALL 5</th>
                                <th className="px-4 py-3 bg-red-500">MONDAY</th>
                                <th className="px-4 py-3 bg-gray-800">TUESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">WEDNESDAY</th>
                                <th className="px-4 py-3 bg-gray-800">THURSDAY</th>
                                <th className="px-4 py-3 bg-gray-800">FRIDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SATURDAY</th>
                                <th className="px-4 py-3 bg-gray-800">SUNDAY</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-white">
                                <td className="px-4 py-4 bg-gray-900 text-white font-semibold border-r border-white">
                                    Predator: Badlands (2025)
                                </td>

                                <td colSpan={7} className="px-4 py-4 bg-gray-900">
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            10:50
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            13:25
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-amber-500 transition-all duration-300 cursor-pointer">
                                            19:00
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default MovieDetail
