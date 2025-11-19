import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-900 py-12">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-10">

                        {/* Column 1: Logo + Description + Contact */}
                        <div className="md:w-1/3 flex flex-col gap-6">
                            <img
                                src="./img/logo.png"
                                alt="FeelDiamondCine Logo"
                                className="w-48 object-contain cursor-pointer"
                            />
                            {/* Description under logo */}
                            <p className="text-gray-400 text-sm max-w-sm">
                                FeelDiamond Cinema is the first independent cinema bringing immersive experiences to movie lovers everywhere.
                            </p>
                            <div className="text-gray-400 text-sm flex flex-col gap-1 mt-2">
                                <p><span className="font-semibold text-white">Address:</span> 123 Movie St, Cinema City</p>
                                <p><span className="font-semibold text-white">Hotline:</span> +1 234 567 890</p>
                                <p><span className="font-semibold text-white">Email:</span> info@feeldiamondcine.com</p>
                            </div>
                        </div>

                        {/* Column 2: Menu + Follow */}
                        <div className="md:w-2/3 flex flex-col justify-between gap-8">
                            <ul className="flex flex-wrap gap-6 text-sm font-medium tracking-wide text-white">
                                <li><a href="#" className="hover:text-red-400 transition cursor-pointer">FAQ</a></li>
                                <li><a href="#" className="hover:text-red-400 transition cursor-pointer">About Us</a></li>
                                <li><a href="#" className="hover:text-red-400 transition cursor-pointer">Careers</a></li>
                                <li><a href="#" className="hover:text-red-400 transition cursor-pointer">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-red-400 transition cursor-pointer">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-red-400 transition cursor-pointer">Contact Us</a></li>
                            </ul>

                            {/* Follow */}
                            <div className="flex flex-col gap-4 mt-6">
                                <p className="text-gray-300 font-semibold text-sm">Follow Us</p>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition cursor-pointer shadow">
                                        <i className="fa-brands fa-facebook-f text-white text-sm"></i>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition cursor-pointer shadow">
                                        <i className="fa-brands fa-instagram text-white text-sm"></i>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition cursor-pointer shadow">
                                        <i className="fa-brands fa-twitter text-white text-sm"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-black text-sm text-white py-4 tracking-wide">
                <div className="container mx-auto text-center">
                    &copy; 2025 FeelDiamondCine. All rights reserved.
                </div>
            </div>
        </footer>

    )
}

export default Footer
