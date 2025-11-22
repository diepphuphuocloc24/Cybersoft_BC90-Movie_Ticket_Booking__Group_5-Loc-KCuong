import React, { useState, useEffect } from 'react';

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
            behavior: 'smooth' // Provides a smooth scrolling animation
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-4 w-12 h-12 bg-black text-white flex items-center justify-center rounded-full shadow-lg hover:bg-red-500 hover:scale-110 transition-all duration-500 z-50 cursor-pointer opacity-50 hover:opacity-100"
                >
                    <i className="fa-solid fa-chevron-up text-lg"></i>
                </button>
            )}
        </>
    );
};

export default BackToTopButton;