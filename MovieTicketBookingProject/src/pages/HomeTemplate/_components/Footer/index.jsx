import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const dataChainCinema = useSelector((state) => {
        return state.movieHomeReducer.dataHome?.dataChainCinema
    });

    const renderChainCinema = () => {
        return dataChainCinema?.map((cinema) => {
            return (
                <div key={cinema.maHeThongRap} className="w-10 h-10 flex items-center justify-center">
                    <img
                        src={cinema.logo}
                        alt={cinema.tenHeThongRap}
                        className="w-full h-full object-contain"
                    />
                </div>
            );
        });
    };

    return (
        <footer className="bg-[#383838] text-gray-300">

            <div className="h-1 w-full bg-linear-to-r from-red-600 to-red-400"></div>

            <div className="bg-black text-white flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-6">
                <h3 className="text-white text-xl font-semibold tracking-wide text-center sm:text-left">
                    Follow Us
                </h3>

                <ul className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center">
                    <li>
                        <a href="#" className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer">
                            <i className="fa-brands fa-facebook-f text-white text-lg"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer">
                            <i className="fa-brands fa-instagram text-white text-lg"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer">
                            <i className="fa-brands fa-tiktok text-white text-lg"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer">
                            <i className="fa-brands fa-youtube text-white text-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="container mx-auto py-15">
                <div className="flex xl:justify-between flex-wrap gap-12">

                    <div className="w-full sm:w-[45%] lg:w-[29%] flex flex-col gap-5">
                        <img src="/img/logo.png" className="w-60 sm:w-72 md:w-80 object-contain mx-auto lg:mx-0" alt="FeelDiamondCine Logo" />

                        <p className="text-gray-400 text-sm leading-relaxed text-left">
                            Bringing immersive cinematic experiences to every movie lover.
                        </p>

                        <div className="text-sm flex flex-col gap-2 text-gray-300 text-left">
                            <p><span className="font-semibold text-white">Address:</span> 123 Movie St, Cinema City</p>
                            <p><span className="font-semibold text-white">Hotline:</span> +1 234 567 890</p>
                            <p><span className="font-semibold text-white">Email:</span> info@feeldiamondcine.com</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-[45%] lg:w-[29%] flex flex-col gap-5">
                        <h3 className="text-white text-lg font-semibold tracking-wide border-b border-gray-700 pb-2">
                            Quick Links
                        </h3>

                        <ul className="text-sm flex flex-wrap gap-3 lg:flex-col xl:gap-0 xl:space-y-3">
                            <li><a href="#" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">FAQ</a></li>
                            <li><a href="#" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">About Us</a></li>
                            <li><a href="#" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Careers</a></li>
                            <li><a href="#" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Contact Us</a></li>
                            <li><a href="#" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Help</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[29%] flex flex-col gap-5">
                        <h3 className="text-white text-lg font-semibold tracking-wide border-b border-gray-700 pb-2">
                            Our Partners
                        </h3>

                        <p className="text-sm text-gray-400">
                            Collaborating with trusted brands to bring better cinematic experiences.
                        </p>

                        <div className="flex items-center gap-4 mt-2 flex-wrap">
                            {renderChainCinema()}
                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-[#1C1C1C] py-4 text-center text-xs sm:text-sm md:text-base tracking-wider text-white">
                © 2025 FeelDiamondCine. All rights reserved.
            </div>

        </footer>

    )
}

export default Footer
