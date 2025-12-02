import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authService } from './slice'
import { Navigate } from 'react-router-dom'

const AuthTemplate = () => {
    const dispatch = useDispatch()

    const authState = useSelector((state) => state.authLoginReducer)

    const { loading, data, error } = authState

    console.log(data);

    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: ""
    })
    console.log(user);

    const [errorBlank, setErrorBlank] = useState(null)

    if (loading) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce animation-delay-400"></div>
                </div>
                <p className="mt-6 text-white text-xl font-semibold">Loading...</p>
            </div>
        )
    }

    if (data) {
        return <Navigate to="/admin" />;
    }

    const handleOnchange = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(authService(user))
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-10"
            style={{ background: "linear-gradient(135deg, #ffe6f0, #e0c3ff, #a8d4ff, #0b3d91)" }}
        >
            <div className='relative pt-14'>
                <div className="absolute z-2 top-0 left-40 w-30 h-30 rounded-full bg-indigo-900 text-white flex items-center justify-center text-6xl shadow-2xl border border-white/30">
                    <i className="fas fa-user-shield"></i>
                </div>

                <form
                    name="authForm"
                    className="w-full max-w-xl mx-auto flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <div className="z-1 w-full flex flex-col gap-6 bg-white px-10 pt-20 pb-10 rounded-3xl border border-white/30">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <div className="flex items-center bg-black rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                                        <i className="fa-solid fa-user text-gray-300 text-lg"></i>
                                    </div>
                                    <input
                                        name="taiKhoan"
                                        type="text"
                                        className="flex-1 ml-4 bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                                        placeholder="Enter your email"
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <p className="text-red-500 text-sm mt-1">(*) Please enter your email</p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center bg-black rounded-xl p-4 mt-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                                        <i className="fa-solid fa-lock text-gray-300 text-lg"></i>
                                    </div>
                                    <input
                                        name="matKhau"
                                        type="password"
                                        className="flex-1 ml-4 bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
                                        placeholder="Enter your password"
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <p className="text-red-500 text-sm mt-1">(*) Please enter your password</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                name="agree"
                                type="checkbox"
                                className="mt-1 w-5 h-5 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                            />
                            <label htmlFor="agree" className="text-gray-700 text-sm leading-relaxed">
                                I agree to the
                                <span className="text-blue-700 font-medium underline hover:text-blue-800 transition-colors"> Terms of Service</span>
                                and
                                <span className="text-blue-700 font-medium underline hover:text-blue-800 transition-colors"> Privacy Policy</span>.
                            </label>
                        </div>
                    </div>

                    <button
                        name="loginBtn"
                        type="submit"
                        className="mt-0.5 w-[75%] mx-auto border border-white/30 bg-white text-xl text-red-600 font-semibold py-2 rounded-b-4xl shadow-lg hover:bg-pink-600 hover:text-white hover:border-pink-600 transition duration-300 cursor-pointer"
                    >
                        Sign In
                    </button>

                    {/* ERROR */}
                    {error && (
                        <div className="mt-4 w-[75%] mx-auto bg-red-500 text-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-3 transform transition-all duration-500 ease-out">
                            <i className="fa-solid fa-triangle-exclamation text-xl"></i>
                            <div>
                                <span className="font-medium">Error!</span> {error.response.data.content}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default AuthTemplate
