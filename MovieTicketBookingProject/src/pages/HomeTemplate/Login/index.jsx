import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ handleClose }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.homeLoginReducer);

  const handleOnChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl sm:max-w-lg md:max-w-xl">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => {
            handleClose();
            setOpenModal("login");
          }}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#383838] border border-white/60 text-white hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-base"></i>
        </button>

        {/* MODAL CONTENT */}
        <div className="bg-[#1C1C1C] rounded-xl shadow-lg text-white p-6 sm:p-7 md:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
            Quick Login for Fast Booking!
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition"
                onChange={handleOnChange}
              />
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition"
                onChange={handleOnChange}
              />
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            </div>

            <button
              type="submit"
              className="mt-2 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-center my-4">or</p>

          {/* SOCIAL LOGIN */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="flex-1 flex items-center justify-center gap-3 py-3 bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer">
              <i className="fa-brands fa-google"></i>
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-3 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
              <i className="fa-brands fa-facebook"></i>
              Facebook
            </button>
          </div>

          <p className="text-gray-400 text-center mt-6">
            Don't have an account?{" "}
            <button className="text-red-500 font-semibold hover:underline cursor-pointer">
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
