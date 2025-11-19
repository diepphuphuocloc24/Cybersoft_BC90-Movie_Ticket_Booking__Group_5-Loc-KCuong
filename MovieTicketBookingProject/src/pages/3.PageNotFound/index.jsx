import React from 'react'

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
            <h1 className="text-9xl font-extrabold mb-4 text-red-500 animate-pulse">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Oops! Page Not Found</h2>
            <p className="text-center text-gray-300 text-lg">
                Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
        </div>
    );
};

export default PageNotFound
