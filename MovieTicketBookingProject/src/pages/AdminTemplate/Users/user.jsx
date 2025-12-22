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
        <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="px-6 py-4 text-sm text-black text-center">{propUser.taiKhoan}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{propUser.hoTen}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{propUser.email}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{propUser.soDT}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{propUser.maLoaiNguoiDung}</td>
            <td className="px-6 py-4 text-center flex justify-center items-center gap-2">
                <button 
                    onClick={() => onEdit(propUser)}
                    className="text-indigo-600 hover:text-indigo-900 px-3 py-1 rounded-md bg-gray-100 hover:bg-indigo-50 transition font-medium cursor-pointer"
                >
                    Edit
                </button>
                <button 
                    onClick={handleDelete}
                    className="text-red-600 hover:text-red-900 px-3 py-1 rounded-md bg-gray-100 hover:bg-red-50 transition font-medium cursor-pointer"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default User;