import React from 'react'

const AdminTemplate = () => {
    return (
        <div class="flex h-screen">

            <aside class="w-64 bg-gray-900 text-white flex flex-col shadow-2xl">
                <div class="p-4 text-2xl font-extrabold text-blue-400 border-b border-gray-700">
                    Admin Panel ⚙️
                </div>
                <nav class="flex-1 p-4 space-y-2">
                    <a href="#" class="flex items-center p-3 rounded-lg bg-gray-800 text-blue-400">
                        <span class="mr-3">📊</span> Dashboard
                    </a>
                    <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-150">
                        <span class="mr-3">🎬</span> Quản Lý Phim
                    </a>
                    <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-150">
                        <span class="mr-3">🕒</span> Lịch Chiếu
                    </a>
                    <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-150">
                        <span class="mr-3">👤</span> Quản Lý User
                    </a>
                    <a href="#" class="flex items-center p-3 rounded-lg text-red-400 hover:bg-gray-700 transition duration-150">
                        <span class="mr-3">➡️</span> Đăng Xuất
                    </a>
                </nav>
            </aside>

            <div class="flex-1 overflow-y-auto">

                <header class="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
                    <h2 class="text-xl font-semibold text-gray-800">Dashboard Tổng Quan</h2>
                    <div class="flex items-center space-x-4">
                        <span class="text-gray-600">Xin chào, Admin!</span>
                        <button class="p-2 bg-gray-100 rounded-full hover:bg-gray-200">🔔</button>
                    </div>
                </header>

                <main class="p-6">

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                        <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <p class="text-sm font-medium text-gray-500">Tổng Doanh Thu</p>
                            <p class="text-2xl font-bold text-gray-900 mt-1">1,250,000,000 VNĐ</p>
                        </div>

                        <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
                            <p class="text-sm font-medium text-gray-500">Vé Đã Bán</p>
                            <p class="text-2xl font-bold text-gray-900 mt-1">50,000</p>
                        </div>

                        <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
                            <p class="text-sm font-medium text-gray-500">Số Phim</p>
                            <p class="text-2xl font-bold text-gray-900 mt-1">75</p>
                        </div>

                        <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
                            <p class="text-sm font-medium text-gray-500">User Mới</p>
                            <p class="text-2xl font-bold text-gray-900 mt-1">1,200</p>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-semibold mb-4 border-b pb-2">Danh Sách Phim</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Phim</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thời Lượng</th>
                                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tên Phim Bom Tấn A</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120 phút</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button class="text-indigo-600 hover:text-indigo-900 mr-3">Sửa</button>
                                            <button class="text-red-600 hover:text-red-900">Xóa</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Phim Hài Cuối Tuần B</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90 phút</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button class="text-indigo-600 hover:text-indigo-900 mr-3">Sửa</button>
                                            <button class="text-red-600 hover:text-red-900">Xóa</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default AdminTemplate
