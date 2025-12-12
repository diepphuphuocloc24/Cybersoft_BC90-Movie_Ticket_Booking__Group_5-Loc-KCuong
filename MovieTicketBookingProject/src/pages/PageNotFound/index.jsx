import React, { memo } from 'react'

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1C1C1C] text-white px-4">
            <h1 className="text-9xl font-extrabold mb-4 text-red-500 animate-pulse">404</h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Oops! Page Not Found
            </h2>

            <p className="text-center text-gray-300 text-lg max-w-md">
                The page you're looking for doesn’t exist, may have been moved, or is no longer available.
            </p>
        </div>
    );
};

export default memo(PageNotFound)
