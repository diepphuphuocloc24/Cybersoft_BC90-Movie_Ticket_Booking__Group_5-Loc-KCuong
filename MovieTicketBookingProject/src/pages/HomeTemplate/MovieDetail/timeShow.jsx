import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login";

const TimeShow = ({ propTimeShow, propShowCode, propDuration }) => {
    const dispatch = useDispatch()

    const stateLogin = useSelector((state) => state.homeLoginReducer);

    const { dataUser } = stateLogin

    const [openModal, setOpenModal] = useState(null);
    const handleCloseModal = () => setOpenModal(null);

    const [showAlert, setShowAlert] = useState(false);

    const handleSelectTimeShow = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
            setOpenModal("login");
        }, 1500);
    };

    const renderTimeShow = () => {
        if (dataUser) {
            return (
                <Link
                    to={`/buy-ticket/${propShowCode}`}
                    state={{ duration: propDuration }}
                    key={propShowCode}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5
        text-xs sm:text-sm md:text-base lg:text-base xl:text-lg
        rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl
        bg-white text-black font-medium sm:font-semibold
        shadow-md sm:shadow-lg md:shadow-xl
        hover:scale-105 hover:bg-amber-400 hover:shadow-2xl
        transition-all duration-300 ease-in-out
        cursor-pointer flex items-center justify-center"
                >
                    {new Date(propTimeShow).toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </Link>
            )
        } else {
            return (
                <button
                    key={propShowCode}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5
        text-xs sm:text-sm md:text-base lg:text-base xl:text-lg
        rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl
        bg-white text-black font-medium sm:font-semibold
        shadow-md sm:shadow-lg md:shadow-xl
        hover:scale-105 hover:bg-amber-400 hover:shadow-2xl
        transition-all duration-300 ease-in-out
        cursor-pointer flex items-center justify-center"
                    onClick={handleSelectTimeShow}
                >
                    {new Date(propTimeShow).toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </button>
            )
        }
    }

    return (
        <>
            {renderTimeShow()}

            {showAlert && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg z-50">
                    You must log in to book tickets
                </div>
            )}

            {openModal === "login" && <Login handleClose={handleCloseModal} />}
        </>
    );
};

export default TimeShow;
