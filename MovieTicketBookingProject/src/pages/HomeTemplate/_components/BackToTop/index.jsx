import React, { useState, useEffect, memo } from 'react';

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button if user scrolls down past a certain point (e.g., 300px)
            window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-[20%] lg:bottom-[5%] right-[3%] w-10 h-10 lg:w-12 lg:h-12 bg-black/80 backdrop-blur text-white flex items-center justify-center rounded-full shadow-xl hover:bg-red-500 hover:shadow-2xl hover:scale-110 transition-all duration-300 z-2 cursor-pointer opacity-60 hover:opacity-100">
                    <i className="fa-solid fa-chevron-up text-sm sm:text-lg md:text-xl"></i>
                </button>

            )}
        </>
    );
};

export default memo(BackToTopButton);