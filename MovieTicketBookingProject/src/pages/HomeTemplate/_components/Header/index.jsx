import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../../Login";
import Register from "../../Register";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "./../../Login/slice";

const HomeHeader = () => {
  const dispatch = useDispatch()

  const [navOpen, setNavOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  const [isLogin, setIsLogin] = useState(false)

  const handleOpenLogin = () => setOpenModal("login");
  const handleOpenRegister = () => setOpenModal("register");
  const handleCloseModal = () => setOpenModal(null);

  const stateLogin = useSelector((state) => state.homeLoginReducer);
  const { dataUser } = stateLogin;

  const dropdownRef = useRef();

  const [showSuccess, setShowSuccess] = useState(false);

  const [openUserInfo, setOpenUserInfo] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (dataUser) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [dataUser]);

  useEffect(() => {
    if (dataUser) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }, [dataUser]);

  const handleOpenUserInformation = () => {
    setOpenUserInfo(true);
    setDropdownOpen(false);
    console.log(dataUser);
  };

  const renderUserMenu = () => {
    if (dataUser) {
      const handleLogOut = () => {
        dispatch(handleLogout());
        setDropdownOpen(false);
      };
      return (
        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center justify-end space-x-3 select-none cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="text-white text-lg">Hi,</span>
            <span className="text-amber-500 font-semibold text-lg hover:scale-105 transition-transform duration-300">
              {dataUser?.hoTen}
            </span>
            <div className="w-12 h-12 rounded-full border-2 border-gray-400 overflow-hidden hover:border-amber-500 hover:scale-105 transition-all duration-300">
              <img
                src="/img/avatarLogo.jpg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 sm:mt-3 w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60 2xl:w-64
    bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden
    transition-all duration-300"
            >
              {dataUser?.maLoaiNguoiDung === "QuanTri" ? (
                <NavLink
                  to="/admin"
                  className="block w-full text-left px-3 sm:px-4 py-2 sm:py-3 
          text-sm sm:text-base md:text-base lg:text-lg text-white 
          hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300 
          cursor-pointer font-medium"
                  onClick={() => setGoToAdmin(true)}
                >
                  Go to Admin
                </NavLink>
              ) : (
                <button
                  className="block w-full text-left px-3 sm:px-4 py-2 sm:py-3 
          text-sm sm:text-base md:text-base lg:text-lg text-white 
          hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300 
          cursor-pointer font-medium"
                  onClick={handleOpenUserInformation}
                >
                  View Profile
                </button>
              )}


              <button
                className="block w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-base lg:text-lg text-white 
      hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer font-medium"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center gap-2 w-full sm:flex-row sm:items-center sm:w-auto">
          <button
            className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-all duration-300 text-sm sm:text-base"
            onClick={handleOpenLogin}
          >
            Login
          </button>
          <button
            className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer transition-all duration-300 text-sm sm:text-base"
            onClick={handleOpenRegister}
          >
            Register
          </button>
        </div>

      );
    }
  };

  const handleSwitchModal = (type) => {
    setOpenModal(type);
  };

  return (
    <>
      <header className="bg-black text-white fixed w-full z-50 shadow-lg shadow-red-900/10 py-4 lg:py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
          {/* LOGO */}
          <NavLink
            to="/"
            className="order-1 w-full sm:max-w-[40%] lg:max-w-[23%] flex justify-center lg:justify-start"
          >
            <img src="/img/logo.png" alt="Logo" className="w-[60%] sm:w-full" />
          </NavLink>

          {/* TOGGLE MOBILE */}
          <div className="flex sm:hidden items-center justify-between w-full order-2 gap-2">
            <button
              onClick={() => {
                setNavOpen(!navOpen);
                setUserOpen(false);
              }}
              className={`w-full h-8 bg-gray-200 border border-amber-500 rounded-xl flex items-center justify-center cursor-pointer text-black font-semibold hover:bg-gray-300 hover:border-gray-500 hover:text-red-600 transition-all duration-300
      ${navOpen ? "text-red-500 border-amber-500" : ""}`}
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>

            <Link
              to="/movie-list"
              className="w-full h-8 bg-gray-200 border border-amber-500 rounded-xl flex items-center justify-center cursor-pointer text-black font-semibold hover:bg-gray-300 hover:border-gray-500 hover:text-red-600 transition-all duration-300"
            >
              <i className="fa-solid fa-ticket text-lg"></i>
            </Link>

            <Link
              to="/"
              className="w-full h-8 bg-gray-200 border border-amber-500 rounded-xl flex items-center justify-center cursor-pointer text-black font-semibold hover:bg-gray-300 hover:border-gray-500 hover:text-red-600 transition-all duration-300"
            >
              <i className="fa-solid fa-earth-africa text-lg"></i>
            </Link>

            <button
              onClick={() => {
                setUserOpen(!userOpen);
                setNavOpen(false);
              }}
              className={`w-full h-8 bg-gray-200 border border-amber-500 rounded-xl flex items-center justify-center cursor-pointer text-black font-semibold hover:bg-gray-300 hover:border-gray-500 hover:text-red-600 transition-all duration-300
      ${userOpen ? "text-red-500 border-amber-500" : ""}`}
            >
              <i className="fi fi-sr-user text-lg"></i>
            </button>
          </div>

          {/* NAVBAR */}
          <nav
            className={`order-4 md:order-3 lg:order-2
            ${navOpen ? "flex" : "hidden"} sm:flex
            flex-col lg:flex-row w-full lg:w-auto
            transition-all duration-300`}
          >
            <ul className="flex flex-row justify-between items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 w-full">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                    }`
                  }
                >
                  <i className="fa-solid fa-house text-xl sm:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                  <span className="text-xs sm:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                    Home
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movie-list"
                  className={({ isActive }) =>
                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                    }`
                  }
                >
                  <i className="fa-solid fa-film text-xl sm:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                  <span className="text-xs sm:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                    Movies
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cinema-system"
                  className={({ isActive }) =>
                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                    }`
                  }
                >
                  <i className="fi fi-sr-land-layer-location text-xl sm:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                  <span className="text-xs sm:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                    Cinemas
                  </span>
                </NavLink>
              </li>

              <li>
                <Link
                  to="/movie-list"
                  className="group flex flex-col items-center transition-all duration-300 text-gray-300 hover:text-red-400"
                >
                  <i className="fi fi-rs-ticket text-xl sm:text-2xl lg:text-2xl text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500"></i>
                  <span className="text-xs sm:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                    Buy Tickets
                  </span>
                </Link>
              </li>

              <li>
                <NavLink
                  to="*"
                  className={({ isActive }) =>
                    `group flex flex-col items-center transition-all duration-300 ${isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                    }`
                  }
                >
                  <i className="fi fi-rs-gift-box-benefits text-xl sm:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                  <span className="text-xs sm:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                    Promotions
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* USER MENU */}
          <div className="order-5 sm:order-2 lg:order-3 mt-2 lg:mt-0 gap-2 w-full sm:w-auto transition-all duration-300">
            <div className={`${userOpen ? "flex flex-col gap-2" : "hidden"} sm:flex sm:flex-row sm:gap-2`}>
              {renderUserMenu()}
            </div>
          </div>
        </div>

        {/* MODALS */}
        {openModal === "login" && (
          <Login
            onClose={handleCloseModal}
            onSwitch={handleSwitchModal}
          />
        )}

        {openModal === "register" && (
          <Register
            onClose={handleCloseModal}
            onSwitch={handleSwitchModal}
          />
        )}
      </header>

      {showSuccess && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 animate__animated animate__fadeInDown">
          Login successful!
        </div>
      )}

      {openUserInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-[90%] sm:w-[400px] bg-[#1C1C1C] rounded-xl p-6 text-white shadow-2xl animate__animated animate__flipInX">

            {/* CLOSE */}
            <button
              onClick={() => setOpenUserInfo(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-500 transition cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500">
                <img
                  src="/img/avatarLogo.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-500">
                  {dataUser?.hoTen}
                </h3>
                <p className="text-sm text-gray-400">
                  @{dataUser?.taiKhoan}
                </p>
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Email</span>
                <span>{dataUser?.email}</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Phone</span>
                <span>{dataUser?.soDT}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeHeader;
