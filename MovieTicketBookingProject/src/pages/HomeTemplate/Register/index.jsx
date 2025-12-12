import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeUserRegister } from "./slice";
import Login from "../Login";

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();

  const stateRegister = useSelector((state) => state.homeRegisterReducer);

  const { loading, dataUser, error } = stateRegister;

  const [userRegister, setUserRegister] = useState(
    {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: "GP01",
    }
  );
  console.log(userRegister);

  const [errorBlank, setErrorBlank] = useState(
    {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    }
  )

  const [valid, setValid] = useState(
    {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    }
  )

  const [successMsg, setSuccessMsg] = useState(false);

  const [openModal, setOpenModal] = useState(null);
  const handleCloseModal = () => setOpenModal(null);

  const handleChangeToLogin = () => {
    setOpenModal("login");
  }

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin"></div>
          <span className="text-gray-700 font-medium">Logging in...</span>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (dataUser) {
      setSuccessMsg(true);
      const timer = setTimeout(() => {
        setSuccessMsg(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [dataUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserRegister({
      ...userRegister,
      [name]: value,
    });

    const newError = { ...errorBlank };

    // REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const fullNameRegex = /^[A-Za-z\s]+$/;        // Only letters + spaces
    const noSpaceUsernameRegex = /^\S+$/;         // No whitespace

    // --- REAL-TIME VALIDATION ---
    if (value.trim() === "") {
      newError[name] = "This field cannot be empty";
    } else {
      if (name === "email") {
        newError.email = emailRegex.test(value)
          ? ""
          : "Invalid email format";
      }

      if (name === "soDt") {
        newError.soDt = phoneRegex.test(value)
          ? ""
          : "Phone number must be exactly 10 digits";
      }

      if (name === "hoTen") {
        newError.hoTen = fullNameRegex.test(value)
          ? ""
          : "Full name can contain letters and spaces only";
      }

      if (name === "taiKhoan") {
        newError.taiKhoan = noSpaceUsernameRegex.test(value)
          ? ""
          : "Username cannot contain spaces";
      }

      if (name === "matKhau") {
        newError.matKhau = "";
      }
    }

    setErrorBlank(newError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};

    // REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const fullNameRegex = /^[A-Za-z\s]+$/;
    const noSpaceUsernameRegex = /^\S+$/;

    // EMPTY CHECK + FULL VALIDATION
    if (!userRegister.hoTen.trim()) {
      newError.hoTen = "Full name cannot be empty";
    } else if (!fullNameRegex.test(userRegister.hoTen)) {
      newError.hoTen = "Full name can contain letters and spaces only";
    }

    if (!userRegister.taiKhoan.trim()) {
      newError.taiKhoan = "Username cannot be empty";
    } else if (!noSpaceUsernameRegex.test(userRegister.taiKhoan)) {
      newError.taiKhoan = "Username cannot contain spaces";
    }

    if (!userRegister.email.trim()) {
      newError.email = "Email cannot be empty";
    } else if (!emailRegex.test(userRegister.email)) {
      newError.email = "Invalid email format";
    }

    if (!userRegister.matKhau.trim()) {
      newError.matKhau = "Password cannot be empty";
    }

    if (!userRegister.soDt.trim()) {
      newError.soDt = "Phone number cannot be empty";
    } else if (!phoneRegex.test(userRegister.soDt)) {
      newError.soDt = "Phone number must be exactly 10 digits";
    }

    setErrorBlank(newError);

    if (Object.keys(newError).length > 0) return;

    dispatch(homeUserRegister(userRegister));
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end items-center bg-black/60">
        <div className="relative w-[70%] sm:w-[50%] md:w-[40%] h-screen flex flex-col justify-center animate__animated animate__fadeInRight">
          <button
            onClick={handleClose}
            className="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#383838] border border-white/60 text-white hover:bg-red-500 transition cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-xs sm:text-sm md:text-base lg:text-base xl:text-base"></i>
          </button>

          <div className="bg-[#1C1C1C] rounded-xl shadow-lg text-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 h-full flex flex-col justify-center">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-center">
              Sign Up & Grab Your Seats!
            </h2>

            <form
              className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="hoTen"
                  placeholder="Full Name"
                  className="w-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
                  onChange={handleOnChange}
                />
                <p className="text-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5">
                  {errorBlank.hoTen}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  name="taiKhoan"
                  placeholder="Username"
                  className="w-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
                  onChange={handleOnChange}
                />
                <p className="text-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5">
                  {errorBlank.taiKhoan}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
                  onChange={handleOnChange}
                />
                <p className="text-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5">
                  {errorBlank.email}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  type="password"
                  name="matKhau"
                  placeholder="Password"
                  className="w-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
                  onChange={handleOnChange}
                />
                <p className="text-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5">
                  {errorBlank.matKhau}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  type="tel"
                  name="soDt"
                  placeholder="Phone Number"
                  className="w-full p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3 rounded-lg bg-[#383838] border border-gray-700 focus:outline-none focus:border-red-500 transition text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm"
                  onChange={handleOnChange}
                />
                <p className="text-red-500 text-[10px] sm:text-xs md:text-xs lg:text-sm mt-0.5">
                  {errorBlank.soDt}
                </p>
              </div>

              <button
                type="submit"
                className="mt-1.5 py-2 md:py-2.5 lg:py-3 w-full bg-linear-to-r from-blue-500 to-blue-600 rounded-xl font-semibold text-white shadow-md shadow-blue-900/30 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-900/40 active:scale-[0.98] transition duration-300 cursor-pointer text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-user-plus text-sm"></i>
                  Register
                </span>
              </button>
            </form>

            <p className="text-gray-400 text-center mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-5 text-[10px] sm:text-xs md:text-sm lg:text-sm">
              Already have an account?{" "}
              <button className="text-red-500 font-semibold hover:underline cursor-pointer text-[10px] sm:text-xs md:text-sm lg:text-sm"
                onClick={handleChangeToLogin}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      {successMsg && (
        <div className="fixed top-10 right-10 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Registration successful!
        </div>
      )}

      {openModal === "login" && <Login handleClose={handleCloseModal} />}
    </>
  );
};

export default Register;
