import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData, addUserService, updateUserService } from './slice'
import User from './user'

const Users = () => {
    const dispatch = useDispatch()
    const [showUserModal, setShowUserModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    
    const initialUser = {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
        maNhom: "GP03",
        maLoaiNguoiDung: "KhachHang",
    };

    const [user, setUser] = useState(initialUser);

    const stateUser = useSelector((state) => state.userManageReducer)
    const { dataUsers, loading } = stateUser

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch])

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleOpenAddModal = () => {
        setIsEditMode(false);
        setUser(initialUser);
        setShowUserModal(true);
    };

    const handleEditClick = (selectedUser) => {
        setIsEditMode(true);
        setUser({
            ...selectedUser,
            soDt: selectedUser.soDT
        });
        setShowUserModal(true);
    };

    const handleAddUser = () => {
        dispatch(addUserService(user)).unwrap()
            .then(() => {
                setShowUserModal(false);
                dispatch(fetchUserData());
                alert("Add user success!");
            })
            .catch(err => alert(err));
    };

    const handleUpdateUser = () => {
    const payload = {
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        email: user.email,
        soDt: user.soDt || user.soDT,
        hoTen: user.hoTen,
        maNhom: user.maNhom,
        maLoaiNguoiDung: user.maLoaiNguoiDung
    };

    dispatch(updateUserService(payload)).unwrap()
        .then(() => {
            setShowUserModal(false);
            dispatch(fetchUserData());
            alert("Update user success!");
        })
        .catch(err => alert(typeof err === 'string' ? err : "Update failed!"));
};

    const renderUsers = () => {
        return dataUsers?.map((u) => {
            return <User key={u.taiKhoan} propUser={u} onEdit={handleEditClick} />
        })
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-black mb-6">User Management</h1>

            <div className="flex justify-between mb-6">
                <input type="text" placeholder="Search User..." className="p-3 rounded-xl border w-1/2" />
                <button 
                    className="bg-linear-to-r from-green-400 to-teal-500 text-white py-3 px-6 rounded-xl cursor-pointer"
                    onClick={handleOpenAddModal}
                >
                    Add User
                </button>
            </div>

            {showUserModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-3xl">
                        <div className="flex justify-between p-6 border-b">
                            <h3 className="text-2xl font-bold">{isEditMode ? "Edit User" : "Add New User"}</h3>
                            <button className="cursor-pointer" onClick={() => setShowUserModal(false)}>✕</button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">Username</label>
                                <input name="taiKhoan" value={user.taiKhoan} onChange={handleOnchange} disabled={isEditMode} className={`w-full px-4 py-2 border rounded-lg ${isEditMode ? 'bg-gray-100' : ''}`} />
                            </div>
                            <div>
                                <label className="block mb-2">Full Name</label>
                                <input name="hoTen" value={user.hoTen} onChange={handleOnchange} className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block mb-2">Email</label>
                                <input name="email" value={user.email} onChange={handleOnchange} className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block mb-2">Phone</label>
                                <input name="soDt" value={user.soDt} onChange={handleOnchange} className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            {!isEditMode && (
                                <div>
                                    <label className="block mb-2">Password</label>
                                    <input name="matKhau" onChange={handleOnchange} type="password" className="w-full px-4 py-2 border rounded-lg" />
                                </div>
                            )}
                            <div>
                                <label className="block mb-2">Role</label>
                                <select name="maLoaiNguoiDung" value={user.maLoaiNguoiDung} onChange={handleOnchange} className="w-full px-4 py-2 border rounded-lg">
                                    <option value="KhachHang">Customer</option>
                                    <option value="QuanTri">Admin</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 p-6 border-t">
                            <button className="px-5 py-2 bg-gray-300 rounded-lg" onClick={() => setShowUserModal(false)}>Close</button>
                            <button 
                                className={`px-5 py-2 rounded-lg text-white ${isEditMode ? 'bg-blue-500' : 'bg-green-500'}`}
                                onClick={isEditMode ? handleUpdateUser : handleAddUser}
                            >
                                {isEditMode ? "Save Changes" : "Add User"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">Account</th>
                            <th className="px-6 py-3">Full Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Phone</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">{renderUsers()}</tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;