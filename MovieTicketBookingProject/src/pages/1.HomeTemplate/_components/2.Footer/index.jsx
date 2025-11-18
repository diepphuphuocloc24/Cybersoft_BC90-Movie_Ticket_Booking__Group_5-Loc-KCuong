import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">

            <div className="container mx-auto p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700">

                <div className="space-y-3">
                    <img src="./img/logo.png" alt="FielDiamondCine Logo" className="h-10 w-auto object-contain" />

                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Press</a></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="text-lg font-bold">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Sitemap</a></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="text-lg font-bold">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Cookie Settings</a></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="text-lg font-bold">Connect</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-xl hover:text-blue-400">📘</a>
                        <a href="#" className="text-xl hover:text-blue-400">🐦</a>
                        <a href="#" className="text-xl hover:text-blue-400">📸</a>
                    </div>
                </div>
            </div>

            <div className="bg-black p-4">
                <div className="container mx-auto text-center text-xs text-gray-400">
                    <p className="py-2">
                        &copy; 2025 FeelDiamondCine. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
