import React, { memo, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Loading = ({ status = false }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/", { replace: true });
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black gap-3">

            {!status && (
                <>
                    <img
                        src="/img/loading.gif"
                        alt="Loading..."
                        className="w-[10%]"
                    />
                    <p className="text-sm lg:text-lg font-semibold tracking-wide animate-pulse text-center">
                        Hold on just a moment!
                    </p>
                </>
            )}

            {status && (
                <>
                    <div className="
      fixed inset-0 z-50
      flex flex-col items-center justify-center
      bg-black text-white
      gap-4
    ">
                        {/* Spinner */}
                        <div className="
        w-14 h-14
        rounded-full
        border-4 border-white/20
        border-t-red-500
        animate-spin
      " />

                        {/* Message */}
                        <p className="
        text-sm sm:text-base md:text-lg
        font-semibold tracking-wide
        animate-pulse
        text-center
      ">
                            Session expired. Redirecting to home...
                        </p>

                        {/* Sub text */}
                        <span className="text-xs text-gray-400">
                            Please login again to continue booking
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};

export default memo(Loading)
