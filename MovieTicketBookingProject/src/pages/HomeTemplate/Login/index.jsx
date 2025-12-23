import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeUserLogin } from './slice'

const Login = ({ onClose, onSwitch }) => {
  const dispatch = useDispatch();

  const stateLogin = useSelector((state) => state.homeLoginReducer);

  const { loading, dataUser, error } = stateLogin

  const [userLogin, setUserLogin] = useState(
    {
      taiKhoan: "",
      matKhau: ""
    }
  )
  console.log(userLogin);

  const [errorBlank, setErrorBlank] = useState(
    {
      taiKhoan: "",
      matKhau: ""
    }
  )

  useEffect(() => {
    if (dataUser && typeof onClose === "function") {
      onClose();
    }
  }, [dataUser, onClose]);

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setUserLogin({
      ...userLogin,
      [name]: value
    })

    const newErrorBlank = { ...errorBlank };

    if (value.trim() === "") {
      newErrorBlank[name] = "This field cannot be empty";
    } else {
      newErrorBlank[name] = "";
    }

    setErrorBlank(newErrorBlank);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};

    if (!userLogin.taiKhoan.trim()) {
      newError.taiKhoan = "Username cannot be empty";
    }

    if (!userLogin.matKhau.trim()) {
      newError.matKhau = "Password cannot be empty";
    }

    setErrorBlank(newError);

    if (Object.keys(newError).length > 0) {
      return;
    }

    dispatch(homeUserLogin(userLogin));
    handleClose()
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin"></div>
          <span className="text-gray-700 font-medium">Logging in...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center bg-black/60">
      <div className="relative w-[70%] sm:w-[50%] md:w-[40%] h-screen flex flex-col justify-center animate__animated animate__fadeInRight">
        <button
          onClick={onClose}
          className="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#383838] border border-white/60 text-white hover:bg-red-500 transition cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-xs sm:text-sm md:text-base lg:text-base xl:text-base"></i>
        </button>

        <div className="bg-[#1C1C1C] rounded-xl shadow-lg text-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 h-full flex flex-col justify-center">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-center">
            Quick Login for Fast Booking!
          </h2>

          <form className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                type="text"
                name="taiKhoan"
                placeholder="Username"
                className="w-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
                onChange={handleOnChange}
              />

              <p className="text-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5">{errorBlank.taiKhoan}</p>
            </div>

            <div className="flex flex-col">
              <input
                type="password"
                name="matKhau"
                placeholder="Password"
                className="w-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
                onChange={handleOnChange}
              />

              <p className="text-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5">{errorBlank.matKhau}</p>
            </div>

            <button
              type="submit"
              className="mt-1.5 py-2 md:py-2.5 lg:py-3 w-full bg-linear-to-r from-red-500 to-red-600 rounded-xl font-semibold text-white shadow-md shadow-red-900/30 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-900/40 active:scale-[0.98] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                <i className="fa-solid fa-right-to-bracket text-sm"></i>
                Login
              </span>
            </button>
          </form>

          <p className="text-gray-400 text-center my-2 sm:my-3 md:my-4 lg:my-5 xl:my-5 text-[10px] sm:text-xs md:text-sm lg:text-sm">
            or
          </p>

          <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-3 lg:gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-2.5 md:py-3 lg:py-3 bg-red-500 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer text-xs sm:text-xs md:text-sm lg:text-sm">
              <i className="fa-brands fa-google text-xs sm:text-sm md:text-sm lg:text-base"></i>
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-2.5 md:py-3 lg:py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer text-xs sm:text-xs md:text-sm lg:text-sm">
              <i className="fa-brands fa-facebook text-xs sm:text-sm md:text-sm lg:text-base"></i>
              Facebook
            </button>
          </div>

          <p className="text-gray-400 text-center mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-5 text-[10px] sm:text-xs md:text-sm lg:text-sm">
            Don't have an account?{" "}
            <button
              className="text-red-500 font-semibold hover:underline cursor-pointer text-[10px] sm:text-xs md:text-sm lg:text-sm"
              onClick={() => onSwitch("register")}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
