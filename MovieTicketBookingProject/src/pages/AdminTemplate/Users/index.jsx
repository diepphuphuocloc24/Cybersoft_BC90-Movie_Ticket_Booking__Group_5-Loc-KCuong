import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData, addUserService, updateUserService } from './slice'
import User from './user'
import { useFormik } from 'formik'
import { validateUser } from './userValidation'

const Users = () => {
    const dispatch = useDispatch()
    const [showUserModal, setShowUserModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const initialUser = {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
        maNhom: "GP03",
        maLoaiNguoiDung: "KhachHang",
    };

    const stateUser = useSelector((state) => state.userManageReducer)
    const { dataUsers } = stateUser

    const filteredUsers = dataUsers?.filter((u) => {
        const search = searchTerm.toLowerCase();
        return (
            u.hoTen.toLowerCase().includes(search) ||
            u.taiKhoan.toLowerCase().includes(search)
        );
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialUser,
        validate: (values) => validateUser(values, isEditMode),
        onSubmit: (values) => {
            if (isEditMode) {
                handleUpdateUser(values);
            } else {
                handleAddUser(values);
            }
        },
    });

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch])

    const handleOpenAddModal = () => {
        setIsEditMode(false);
        formik.resetForm({ values: initialUser });
        setShowUserModal(true);
    };

    const handleEditClick = (selectedUser) => {
        setIsEditMode(true);
        formik.setValues({
            ...selectedUser,
            soDt: selectedUser.soDT || selectedUser.soDt,
            matKhau: "******"
        });
        setShowUserModal(true);
    };

    const handleAddUser = (values) => {
        dispatch(addUserService(values)).unwrap()
            .then(() => {
                setShowUserModal(false);
                dispatch(fetchUserData());
                alert("Add user success!");
            })
            .catch(err => alert(err));
    };

    const handleUpdateUser = (values) => {
        dispatch(updateUserService(values)).unwrap()
            .then(() => {
                setShowUserModal(false);
                dispatch(fetchUserData());
                alert("Update user success!");
            })
            .catch(err => alert("Update failed!"));
    };

    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold text-black mb-6">User Management</h1>

                <div className="flex justify-between mb-6">

                    <input
                        type="text"
                        placeholder="Search by name or account..."
                        className="p-3 rounded-xl border w-1/2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="bg-green-500 text-white py-3 px-6 rounded-xl cursor-pointer" onClick={handleOpenAddModal}>
                        Add User
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead className="bg-gray-100 hidden sm:table-header-group">
                                <tr>
                                    <th className="th">Account</th>
                                    <th className="th hidden md:table-cell">Full Name</th>
                                    <th className="th hidden lg:table-cell">Email</th>
                                    <th className="th hidden xl:table-cell">Phone</th>
                                    <th className="th">Role</th>
                                    <th className="th text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                {filteredUsers?.map((u) => (
                                    <User
                                        key={u.taiKhoan}
                                        propUser={u}
                                        onEdit={handleEditClick}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {showUserModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-3xl shadow-xl overflow-hidden">
                        <form onSubmit={formik.handleSubmit}>

                            {/* Header */}
                            <div className="flex justify-between items-center px-6 py-4 border-b">
                                <h3 className="text-xl font-semibold">
                                    {isEditMode ? "Edit User" : "Add New User"}
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => setShowUserModal(false)}
                                    className="text-gray-500 hover:text-red-500 cursor-pointer transition"
                                >
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </button>
                            </div>

                            {/* Body */}
                            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Username */}
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        name="taiKhoan"
                                        {...formik.getFieldProps('taiKhoan')}
                                        disabled={isEditMode}
                                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400
                        ${isEditMode ? "bg-gray-100 cursor-not-allowed" : ""}`}
                                    />
                                    {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.taiKhoan}</p>
                                    )}
                                </div>

                                {/* Full name */}
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        name="hoTen"
                                        {...formik.getFieldProps('hoTen')}
                                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    {formik.touched.hoTen && formik.errors.hoTen && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.hoTen}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        {...formik.getFieldProps('email')}
                                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <input
                                        name="soDt"
                                        {...formik.getFieldProps('soDt')}
                                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    {formik.touched.soDt && formik.errors.soDt && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.soDt}</p>
                                    )}
                                </div>

                                {/* Password */}
                                {!isEditMode && (
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            name="matKhau"
                                            type="password"
                                            {...formik.getFieldProps('matKhau')}
                                            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        {formik.touched.matKhau && formik.errors.matKhau && (
                                            <p className="text-red-500 text-sm mt-1">{formik.errors.matKhau}</p>
                                        )}
                                    </div>
                                )}

                                {/* Role */}
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Role
                                    </label>
                                    <select
                                        name="maLoaiNguoiDung"
                                        {...formik.getFieldProps('maLoaiNguoiDung')}
                                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="KhachHang">Customer</option>
                                        <option value="QuanTri">Admin</option>
                                    </select>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-end gap-3 px-6 py-4 border-t">
                                <button
                                    type="button"
                                    onClick={() => setShowUserModal(false)}
                                    className="cursor-pointer px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                                >
                                    Close
                                </button>

                                <button
                                    type="submit"
                                    className={`cursor-pointer px-5 py-2 rounded-lg text-white font-semibold transition
                    ${isEditMode ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
                                >
                                    {isEditMode ? "Save Changes" : "Add User"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </>

    )
}

export default Users;