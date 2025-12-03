import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.homeLoginReducer);

  const handleOnChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        {/* MODAL CONTENT */}
        <div className="bg-[#1C1C1C] rounded-xl shadow-lg text-white p-6 sm:p-7 md:p-8 relative">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => {
              handleClose();
              setOpenModal("register");
            }}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#383838] border border-white/60 text-white hover:bg-red-500 hover:text-white transition cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-base"></i>
          </button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            Sign Up & Grab Your Seats!
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition"
              onChange={handleOnChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition"
              onChange={handleOnChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition"
              onChange={handleOnChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition"
              onChange={handleOnChange}
            />

            <button
              type="submit"
              className="mt-2 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
            >
              Register
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6 text-sm sm:text-base">
            Already have an account?{" "}
            <button className="text-red-500 font-semibold hover:underline cursor-pointer">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
