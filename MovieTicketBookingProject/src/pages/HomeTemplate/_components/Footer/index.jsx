import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const dataChainCinema = useSelector((state) => {
    return state.movieHomeReducer.dataHome?.dataChainCinema;
  });

  const renderChainCinema = () => {
    return dataChainCinema?.map((cinema) => {
      return (
        <div
          key={cinema.maHeThongRap}
          className="w-10 h-10 flex items-center justify-center"
        >
          <img
            src={cinema.logo}
            alt={cinema.tenHeThongRap}
            className="w-full h-full object-contain"
          />
        </div>
      );
    });
  };

  return (
    <footer className="bg-[#383838] text-gray-300">
      <div className="h-1 w-full bg-linear-to-r from-red-600 to-red-400"></div>

      {/* FOLLOW SECTION */}
      <div
        className="
    bg-black text-white flex flex-col sm:flex-row 
    items-center justify-center gap-2 sm:gap-6 
    py-3 sm:py-6 md:py-7
  "
      >
        <h3
          className="
      text-white font-semibold tracking-wide 
      text-base sm:text-xl md:text-2xl lg:text-2xl
      text-center sm:text-left
    "
        >
          Follow Us
        </h3>

        <ul className="flex items-center gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 flex-wrap justify-center">
          {/* FACEBOOK */}
          <li>
            <a
              href="#"
              className="
          w-10 h-10
          sm:w-10 sm:h-10
          md:w-11 md:h-11
          lg:w-12 lg:h-12
          xl:w-14 xl:h-14
          rounded-full border border-white flex items-center justify-center
          hover:bg-red-600 transition-colors duration-300 shadow-md
        "
            >
              <i
                className="
            fa-brands fa-facebook-f text-white
            text-base md:text-lg lg:text-xl xl:text-2xl
          "
              ></i>
            </a>
          </li>

          {/* INSTAGRAM */}
          <li>
            <a
              href="#"
              className="
          w-10 h-10
          sm:w-10 sm:h-10
          md:w-11 md:h-11
          lg:w-12 lg:h-12
          xl:w-14 xl:h-14
          rounded-full border border-white flex items-center justify-center
          hover:bg-red-600 transition-colors duration-300 shadow-md
        "
            >
              <i
                className="
            fa-brands fa-instagram text-white
            text-base md:text-lg lg:text-xl xl:text-2xl
          "
              ></i>
            </a>
          </li>

          {/* TIKTOK */}
          <li>
            <a
              href="#"
              className="
          w-10 h-10
          sm:w-10 sm:h-10
          md:w-11 md:h-11
          lg:w-12 lg:h-12
          xl:w-14 xl:h-14
          rounded-full border border-white flex items-center justify-center
          hover:bg-red-600 transition-colors duration-300 shadow-md
        "
            >
              <i
                className="
            fa-brands fa-tiktok text-white
            text-base md:text-lg lg:text-xl xl:text-2xl
          "
              ></i>
            </a>
          </li>

          {/* YOUTUBE */}
          <li>
            <a
              href="#"
              className="
          w-10 h-10
          sm:w-10 sm:h-10
          md:w-11 md:h-11
          lg:w-12 lg:h-12
          xl:w-14 xl:h-14
          rounded-full border border-white flex items-center justify-center
          hover:bg-red-600 transition-colors duration-300 shadow-md
        "
            >
              <i
                className="
            fa-brands fa-youtube text-white
            text-base md:text-lg lg:text-xl xl:text-2xl
          "
              ></i>
            </a>
          </li>
        </ul>
      </div>

      {/* FOOTER CONTENT */}
      <div className="container mx-auto py-10 sm:py-12 md:py-14 lg:py-15">
        <div className="flex xl:justify-between flex-wrap gap-10 sm:gap-12">
          {/* COLUMN 1 */}
          <div className="w-full sm:w-[45%] lg:w-[29%] flex flex-col gap-4 sm:gap-5">
            <img
              src="/img/logo.png"
              className="
            w-70 sm:w-55 md:w-60 lg:w-65 xl:w-75
            object-contain mx-auto sm:mx-0
          "
              alt="FeelDiamondCine Logo"
            />

            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed sm:text-left text-center">
              Bringing immersive cinematic experiences to every movie lover.
            </p>

            <div className="text-xs sm:text-sm md:text-base flex flex-col gap-2 text-gray-300 text-left">
              <p>
                <span className="font-semibold text-white">Address:</span> 123
                Movie St, Cinema City
              </p>
              <p>
                <span className="font-semibold text-white">Hotline:</span> +1
                234 567 890
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@feeldiamondcine.com
              </p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="w-full sm:w-[45%] lg:w-[29%] flex flex-col gap-4 sm:gap-5">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide border-b border-gray-700 pb-2">
              Quick Links
            </h3>

            <ul className="text-xs sm:text-sm md:text-base flex flex-wrap gap-2 sm:gap-3 lg:flex-col xl:gap-0 xl:space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[29%] flex flex-col gap-4 sm:gap-5">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide border-b border-gray-700 pb-2">
              Our Partners
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              Collaborating with trusted brands to bring better cinematic
              experiences.
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mt-2 flex-wrap">
              {renderChainCinema()}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className="
      bg-[#1C1C1C] py-3 sm:py-4 text-center 
      text-[10px] sm:text-xs md:text-sm lg:text-base
      tracking-wider text-white
    "
      >
        © 2025 FeelDiamondCine. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
