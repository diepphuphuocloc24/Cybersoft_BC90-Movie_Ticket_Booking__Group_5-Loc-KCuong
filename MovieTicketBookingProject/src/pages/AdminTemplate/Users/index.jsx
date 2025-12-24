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

            {showUserModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex justify-between p-6 border-b">
                                <h3 className="text-2xl font-bold">{isEditMode ? "Edit User" : "Add New User"}</h3>
                                <button type="button" onClick={() => setShowUserModal(false)}>✕</button>
                            </div>

                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-1 font-medium">Username</label>
                                    <input 
                                        name="taiKhoan" 
                                        {...formik.getFieldProps('taiKhoan')} 
                                        disabled={isEditMode} 
                                        className={`w-full px-4 py-2 border rounded-lg ${isEditMode ? 'bg-gray-100' : ''}`} 
                                    />
                                    {formik.touched.taiKhoan && formik.errors.taiKhoan && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.taiKhoan}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Full Name</label>
                                    <input name="hoTen" {...formik.getFieldProps('hoTen')} className="w-full px-4 py-2 border rounded-lg" />
                                    {formik.touched.hoTen && formik.errors.hoTen && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.hoTen}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Email</label>
                                    <input name="email" {...formik.getFieldProps('email')} className="w-full px-4 py-2 border rounded-lg" />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium">Phone</label>
                                    <input name="soDt" {...formik.getFieldProps('soDt')} className="w-full px-4 py-2 border rounded-lg" />
                                    {formik.touched.soDt && formik.errors.soDt && (
                                        <p className="text-red-500 text-sm mt-1">{formik.errors.soDt}</p>
                                    )}
                                </div>
                                {!isEditMode && (
                                    <div>
                                        <label className="block mb-1 font-medium">Password</label>
                                        <input name="matKhau" type="password" {...formik.getFieldProps('matKhau')} className="w-full px-4 py-2 border rounded-lg" />
                                        {formik.touched.matKhau && formik.errors.matKhau && (
                                            <p className="text-red-500 text-sm mt-1">{formik.errors.matKhau}</p>
                                        )}
                                    </div>
                                )}
                                <div>
                                    <label className="block mb-1 font-medium">Role</label>
                                    <select name="maLoaiNguoiDung" {...formik.getFieldProps('maLoaiNguoiDung')} className="w-full px-4 py-2 border rounded-lg">
                                        <option value="KhachHang">Customer</option>
                                        <option value="QuanTri">Admin</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 p-6 border-t">
                                <button type="button" className="px-5 py-2 bg-gray-300 rounded-lg" onClick={() => setShowUserModal(false)}>Close</button>
                                <button type="submit" className={`px-5 py-2 rounded-lg text-white ${isEditMode ? 'bg-blue-500' : 'bg-green-500'}`}>
                                    {isEditMode ? "Save Changes" : "Add User"}
                                </button>
                            </div>
                        </form>
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
                    <tbody className="divide-y">
                        
                        {filteredUsers?.map((u) => (
                            <User key={u.taiKhoan} propUser={u} onEdit={handleEditClick} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;