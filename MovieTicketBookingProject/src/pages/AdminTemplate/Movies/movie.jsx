import React from 'react'

const Movie = ({ propMovie }) => {
    return (
        <tr className="block sm:table-row hover:bg-gray-50 transition">
            {/* ID */}
            <td className="td font-bold">
                {propMovie.maPhim}
            </td>

            {/* Poster */}
            <td className="td">
                <img
                    src={propMovie.hinhAnh}
                    alt={propMovie.tenPhim}
                    className="w-16 h-24 object-cover rounded-lg"
                />
            </td>

            {/* Title */}
            <td className="td font-semibold max-w-xs">
                {propMovie.tenPhim}
            </td>

            {/* Release */}
            <td className="td hidden md:table-cell text-center">
                {propMovie.ngayKhoiChieu
                    ? new Date(propMovie.ngayKhoiChieu).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })
                    : ""}
            </td>

            {/* Showtime */}
            <td className="td hidden lg:table-cell text-center">
                7:00 PM
            </td>

            {/* Actions */}
            <td className="px-4 py-4 text-sm text-gray-700 block sm:table-cell">
                <div className="flex sm:justify-center gap-2">
                    <button
                        className="
        px-3 py-1 rounded-md
        bg-indigo-50 text-indigo-600
        hover:bg-indigo-100
        transition cursor-pointer
        active:scale-95
      "
                    >
                        Edit
                    </button>

                    <button
                        className="
        px-3 py-1 rounded-md
        bg-red-50 text-red-600
        hover:bg-red-100
        transition cursor-pointer
        active:scale-95
      "
                    >
                        Delete
                    </button>

                    <button
                        className="
        p-2 rounded-full
        bg-green-50 text-green-600
        hover:bg-green-100
        transition cursor-pointer
        active:scale-95
      "
                    >
                        <i className="fa-regular fa-calendar"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default Movie
