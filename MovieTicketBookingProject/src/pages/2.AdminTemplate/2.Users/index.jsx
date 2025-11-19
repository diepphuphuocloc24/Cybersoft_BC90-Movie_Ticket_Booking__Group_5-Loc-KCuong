import React from 'react'

const Users = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">User Management</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avatar</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">1</td>
                                <td className="px-6 py-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                                        <img src="./img/avatar1.jpg" alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">John Doe</td>
                                <td className="px-6 py-4 text-sm text-gray-500">john@example.com</td>
                                <td className="px-6 py-4 text-sm text-gray-500">User</td>
                                <td className="px-6 py-4 text-right text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">2</td>
                                <td className="px-6 py-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                                        <img src="./img/avatar2.jpg" alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">Jane Smith</td>
                                <td className="px-6 py-4 text-sm text-gray-500">jane@example.com</td>
                                <td className="px-6 py-4 text-sm text-gray-500">Admin</td>
                                <td className="px-6 py-4 text-right text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
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
