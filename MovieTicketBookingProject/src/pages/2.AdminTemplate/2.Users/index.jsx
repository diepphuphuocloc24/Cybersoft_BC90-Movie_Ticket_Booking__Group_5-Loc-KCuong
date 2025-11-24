import React from 'react'

const Users = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">User Management</h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search user..."
                    className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
                />
                <button className="flex items-center gap-2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer">
                    <i class="fi fi-rr-bars-filter"></i>
                    Filter
                </button>
                <button className="w-full md:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow cursor-pointer">
                    Add User
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
                                <td className="px-6 py-4 text-sm text-gray-500">John Doe</td>
                                <td className="px-6 py-4 text-sm text-gray-500">john@example.com</td>
                                <td className="px-6 py-4 text-sm text-gray-500">User</td>
                                <td className="px-6 py-4 text-right text-sm font-medium flex justify-end items-center gap-2">
                                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Edit</button>
                                    <button className="text-red-600 hover:text-red-900 cursor-pointer">Delete</button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Jane Smith</td>
                                <td className="px-6 py-4 text-sm text-gray-500">jane@example.com</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Admin</td>
                                <td className="px-6 py-4 text-right text-sm font-medium flex justify-end items-center gap-2">
                                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Edit</button>
                                    <button className="text-red-600 hover:text-red-900 cursor-pointer">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users
