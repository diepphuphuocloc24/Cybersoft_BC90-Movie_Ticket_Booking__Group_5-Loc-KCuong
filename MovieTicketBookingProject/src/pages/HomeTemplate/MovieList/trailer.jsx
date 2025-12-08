import React from 'react';

const Trailer = ({ propTrailer, onClose }) => {
    const getEmbedUrl = (url) => {
        if (!url) return "";
        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        return url;
    };

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-[4%] -right-[2.5%] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center rounded-full bg-[#383838] border border-white/60 text-white hover:bg-red-500 transition cursor-pointer"
                >
                    <i className="fa-solid fa-xmark text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"></i>
                </button>

                <iframe
                    className="w-full h-full rounded-lg"
                    src={getEmbedUrl(propTrailer)}
                    title="Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Trailer;
