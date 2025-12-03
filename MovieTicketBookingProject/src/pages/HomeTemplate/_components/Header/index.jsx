import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../../Login";
import Register from "../../Register";

const HomeHeader = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  const handleOpenLogin = () => setOpenModal("login");
  const handleOpenRegister = () => setOpenModal("register");
  const handleCloseModal = () => setOpenModal(null);

  return (
    <header className="bg-black text-white fixed w-full z-50 shadow-lg shadow-red-900/10 py-4 lg:py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
        {/* LOGO */}
        <NavLink
          to="/"
          className="order-1 w-full sm:max-w-[40%] lg:max-w-[23%] flex justify-center lg:justify-start"
        >
          <img src="/img/logo.png" alt="Logo" className="w-[60%] sm:w-full" />
        </NavLink>

        {/* TOGGLE */}
        <div className="flex sm:hidden items-center justify-between w-full order-2 gap-2">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="w-full h-8 bg-gray-200 border border-amber-500 rounded-xl flex items-center justify-center cursor-pointer text-black font-semibold hover:bg-gray-300 hover:border-gray-500 hover:text-red-600 transition-all duration-300"
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
            onClick={() => setUserOpen(!userOpen)}
            className="w-full h-8 bg-gray-200 border border-amber-500 rounded-xl flex items-center justify-center cursor-pointer text-black font-semibold hover:bg-gray-300 hover:border-gray-500 hover:text-red-600 transition-all duration-300"
          >
            <i className="fi fi-sr-user text-lg"></i>
          </button>
        </div>

        {/* NAVBAR */}
        <nav
          className={`
    order-4 md:order-3 lg:order-2
    ${navOpen ? "flex" : "hidden"} sm:flex
    flex-col lg:flex-row w-full lg:w-auto
    transition-all duration-300
  `}
        >
          <ul className="flex flex-row justify-between items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 w-full">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group flex flex-col items-center transition-all duration-300 ${isActive
                    ? "text-red-400"
                    : "text-gray-300 hover:text-red-400"
                  }`
                }
              >
                <i className="fa-solid fa-house text-xl sm:text-2xl md:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie-list"
                className={({ isActive }) =>
                  `group flex flex-col items-center transition-all duration-300 ${isActive
                    ? "text-red-400"
                    : "text-gray-300 hover:text-red-400"
                  }`
                }
              >
                <i className="fa-solid fa-film text-xl sm:text-2xl md:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                  Movies
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="*"
                className={({ isActive }) =>
                  `group flex flex-col items-center transition-all duration-300 ${isActive
                    ? "text-red-400"
                    : "text-gray-300 hover:text-red-400"
                  }`
                }
              >
                <i className="fi fi-sr-land-layer-location text-xl sm:text-2xl md:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                  Cinemas
                </span>
              </NavLink>
            </li>
            <li>
              <Link
                to="/movie-list"
                className="group flex flex-col items-center transition-all duration-300 text-gray-300 hover:text-red-400"
              >
                <i className="fi fi-rs-ticket text-xl sm:text-2xl md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500"></i>
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                  Buy Tickets
                </span>
              </Link>
            </li>
            <li>
              <NavLink
                to="*"
                className={({ isActive }) =>
                  `group flex flex-col items-center transition-all duration-300 ${isActive
                    ? "text-red-400"
                    : "text-gray-300 hover:text-red-400"
                  }`
                }
              >
                <i className="fi fi-rs-gift-box-benefits text-xl sm:text-2xl md:text-2xl lg:text-2xl group-hover:text-red-400"></i>
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm mt-1 group-hover:text-red-400">
                  Promotions
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* USER BUTTONS */}
        <div
          className={`${userOpen ? "flex" : "hidden"
            } sm:flex order-5 sm:order-2 lg:order-3 mt-2 lg:mt-0 gap-2 flex-col sm:flex-row w-full sm:w-auto transition-all duration-300`}
        >
          <button
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-all duration-300 text-sm sm:text-base"
            onClick={handleOpenLogin}
          >
            Login
          </button>
          <button
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer transition-all duration-300 text-sm sm:text-base"
            onClick={handleOpenRegister}
          >
            Register
          </button>
        </div>
      </div>

      {/* MODALS */}
      {openModal === "login" && <Login handleClose={handleCloseModal} />}
      {openModal === "register" && <Register handleClose={handleCloseModal} />}
    </header>
  );
};

export default HomeHeader;
