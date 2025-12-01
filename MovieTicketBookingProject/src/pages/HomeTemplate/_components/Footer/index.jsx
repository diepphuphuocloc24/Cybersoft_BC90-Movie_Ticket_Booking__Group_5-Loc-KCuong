import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const dataChainCinema = useSelector((state) => {
        return state.movieHomeReducer.dataHome?.dataChainCinema
    });

    const renderChainCinema = () => {
        return dataChainCinema?.map((cinema) => {
            return (
                <div key={cinema.maHeThongRap} className="w-14 h-14 flex items-center justify-center">
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
        <footer className="bg-gray-900 text-gray-300">

            {/* TOP BORDER LINE */}
            <div className="h-1 w-full bg-linear-to-r from-red-600 to-red-400"></div>

            {/* FOLLOW */}
            <div className="bg-black text-white flex items-center justify-center gap-6 py-6">
                <h3 className="text-white text-xl font-semibold tracking-wide">
                    Follow Us
                </h3>

                <ul className="flex items-center gap-5">
                    <li>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full border border-white flex items-center justify-center
                hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer"
                        >
                            <i className="fa-brands fa-facebook-f text-white text-lg"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full border border-white flex items-center justify-center
                hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer"
                        >
                            <i className="fa-brands fa-instagram text-white text-lg"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full border border-white flex items-center justify-center
                hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer"
                        >
                            <i className="fa-brands fa-tiktok text-white text-lg"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full border border-white flex items-center justify-center
                hover:bg-red-600 transition-colors duration-300 shadow-md cursor-pointer"
                        >
                            <i className="fa-brands fa-youtube text-white text-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* MAIN FOOTER CONTENT */}
            <div className="container mx-auto py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Logo + Info */}
                    <div className="flex flex-col gap-6">
                        <img
                            src="/img/logo.png"
                            className="w-80 object-contain mx-auto md:mx-0"
                            alt="FeelDiamondCine Logo"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
                            Bringing immersive cinematic experiences to every movie lover.
                        </p>

                        <div className="text-sm flex flex-col gap-2 text-gray-300">
                            <p>
                                <span className="font-semibold text-white">Address:</span> 123 Movie St, Cinema City
                            </p>
                            <p>
                                <span className="font-semibold text-white">Hotline:</span> +1 234 567 890
                            </p>
                            <p>
                                <span className="font-semibold text-white">Email:</span> info@feeldiamondcine.com
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-white text-lg font-semibold tracking-wide border-b border-gray-700 pb-2">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-2">
                                    Help
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Partners */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-white text-lg font-semibold tracking-wide border-b border-gray-700 pb-2">
                            Our Partners
                        </h3>

                        <p className="text-sm text-gray-400">
                            Collaborating with trusted brands to bring better cinematic experiences.
                        </p>

                        <div className="flex items-center gap-4 mt-2">
                            {renderChainCinema()}
                        </div>


                    </div>

                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="bg-black py-4 text-center text-sm tracking-wider text-white">
                © 2025 FeelDiamondCine. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
