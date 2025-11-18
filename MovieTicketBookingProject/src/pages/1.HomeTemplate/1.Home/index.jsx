import React from 'react'
import axios from 'axios'

const Home = () => {
    const promise = axios(
        {
            url: '',
            method: 'GET',
        }
    )

    promise
        .then((result) => {
            console.log(result.data)
        })
        .catch((error) => {
            console.log(error)
        }
        )

    return (
        <section className="container mx-auto p-6 mt-4">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">NOW SHOWING / ADVANCED SALES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                    <div className="h-64 bg-gray-300 flex items-center justify-center">
                        <img src="./img/559705297_17926020432114954_265302695889768123_n.jpg" alt="" />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-white truncate">Predator: Badlands (2025)</h3>
                        <p className="text-sm text-amber-500 mb-3">Hành động | 120 phút</p>
                        <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200">
                            Buy Tickets
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
