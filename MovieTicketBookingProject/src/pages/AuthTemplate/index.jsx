import React, { use, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AuthTemplate = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: ""
    })

    console.log(user);

    const [errorBlank, setErrorBlank] = useState(null)

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                    id="authForm"
                    name="authForm"
                    className="w-full max-w-xl mx-auto flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <div className="z-1 w-full flex flex-col gap-6 bg-white px-10 pt-20 pb-10 rounded-3xl border border-white/30">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <div className="flex items-center bg-black rounded-lg p-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded">
                                        <i className="fa-solid fa-user text-gray-300 text-lg"></i>
                                    </div>
                                    <input
                                        id="email"
                                        name="taiKhoan"
                                        type="email"
                                        className="flex-1 bg-gray-900 text-white placeholder-gray-400 focus:outline-none ml-4"
                                        placeholder="Enter your email"
                                        onChange={handleInput}
                                    />
                                </div>
                                <p className="text-red-500 text-sm mt-1">(*) Please enter your email</p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center bg-black rounded-lg p-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded">
                                        <i className="fa-solid fa-lock text-gray-300 text-lg"></i>
                                    </div>
                                    <input
                                        id="password"
                                        name="matKhau"
                                        type="password"
                                        className="flex-1 bg-gray-900 text-white placeholder-gray-400 focus:outline-none ml-4"
                                        placeholder="Enter your password"
                                        onChange={handleInput}
                                    />
                                </div>
                                <p className="text-red-500 text-sm mt-1">(*) Please enter your password</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                id="agree"
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
                        id="loginBtn"
                        name="loginBtn"
                        type="submit"
                        className="mt-0.5 w-[75%] mx-auto border border-white/30 bg-white text-xl text-red-600 font-semibold py-2 rounded-b-4xl shadow-lg hover:bg-pink-600 hover:text-white hover:border-pink-600 transition duration-300 cursor-pointer"
                    >
                        Sign In
                    </button>

                    {/* ERROR */}
                    <div className="mt-4 w-[75%] mx-auto bg-red-500 text-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-3 transform transition-all duration-500 ease-out">
                        <i className="fa-solid fa-triangle-exclamation text-xl"></i>
                        <p className="text-sm font-medium">
                            Incorrect email or password!
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AuthTemplate
