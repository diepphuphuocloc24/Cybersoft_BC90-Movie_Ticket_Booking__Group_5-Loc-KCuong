import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUserService, fetchUserData } from './slice'

const User = ({ propUser, onEdit }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${propUser.taiKhoan}?`)) {
            dispatch(deleteUserService(propUser.taiKhoan))
                .unwrap()
                .then(() => {
                    alert("Delete success!");
                    dispatch(fetchUserData());
                })
                .catch((err) => alert(err));
        }
    };

    return (
        <tr className="
                        block sm:table-row
                        hover:bg-gray-50 transition
                        ">
            {/* Account */}
            <td className="td font-semibold">
                {propUser.taiKhoan}
            </td>

            {/* Full Name */}
            <td className="td hidden md:table-cell">
                {propUser.hoTen}
            </td>

            {/* Email */}
            <td className="td hidden lg:table-cell">
                {propUser.email}
            </td>

            {/* Phone */}
            <td className="td hidden xl:table-cell">
                {propUser.soDT}
            </td>

            {/* Role */}
            <td className="td">
                <span className={`
      inline-block px-3 py-1 rounded-full text-xs font-semibold
      ${propUser.maLoaiNguoiDung === "QuanTri"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"}
    `}>
                    {propUser.maLoaiNguoiDung}
                </span>
            </td>

            {/* Actions */}
            <td className="px-4 py-4 text-sm text-gray-700 text-right sm:text-center">
                <div className="flex sm:justify-center gap-2">
                    <button
                        onClick={() => onEdit(propUser)}
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
                        onClick={handleDelete}
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
                </div>
            </td>
        </tr>
    )
}

export default User;