import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchSeats } from './../TicketBooking/slice';
import { seatsToCheckOut } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import QRpayment from './QRpayment';
import YourTicket from '../Ticket';

const CheckOut = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { maLichChieu } = useParams();

    const location = useLocation();

    const { activeSeats = [], foodOrders = [] } = location.state || {};

    const stateSeatsInformation = useSelector((state) => state.seatsReducer);

    const { dataSeats } = stateSeatsInformation;

    const [codeInput, setCodeInput] = useState('');

    const [appliedCode, setAppliedCode] = useState(null);

    const [message, setMessage] = useState('');

    const [isConfirm, setIsConfirm] = useState({
        maLichChieu: null,
        danhSachVe: [],
    });

    const [step, setStep] = useState("none");

    useEffect(() => {
        dispatch(fetchSeats(maLichChieu));
    }, [maLichChieu, dispatch]);

    if (!dataSeats?.thongTinPhim) return null;

    const { tenPhim, tenCumRap, diaChi, gioChieu, ngayChieu, tenRap, hinhAnh } = dataSeats.thongTinPhim;

    const formatDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        const date = new Date(`${year}-${month}-${day}`);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    const totalTicketPrice = activeSeats.reduce((a, s) => a + (s.giaVe || 0), 0);

    const totalFoodPrice = foodOrders.reduce((a, i) => a + (i.price || 0) * (i.quantity || 1), 0);

    const discountCatalog = {
        CINEMA10: { type: 'fixed', value: 10000, label: '10,000 VND off' },
        SUPER20: { type: 'fixed', value: 20000, label: '20,000 VND off' },
        PERCENT10: { type: 'percent', value: 10, label: '10% off' }
    };

    const discountValue = appliedCode
        ? appliedCode.type === 'fixed'
            ? appliedCode.value
            : Math.round((totalTicketPrice + totalFoodPrice) * (appliedCode.value / 100))
        : 0;

    const totalPayment = Math.max(0, totalTicketPrice + totalFoodPrice - discountValue);

    const handleApplyCode = () => {
        const code = codeInput.trim().toUpperCase();
        const found = discountCatalog[code];
        if (!code) return setMessage('Please enter a discount code.');
        if (!found) return setMessage('Invalid code.');
        setAppliedCode({ code, ...found });
        setMessage(`Applied ${code}: ${found.label}`);
    };

    const handleRemoveCode = () => {
        setAppliedCode(null);
        setCodeInput('');
        setMessage('Discount removed.');
    };

    const handleChangeSeats = () => {
        navigate(`/buy-ticket/${maLichChieu}`);
    };

    const bookingData = {
        maLichChieu,
        danhSachVe: activeSeats.map((s) => ({
            maGhe: s.maGhe,
            giaVe: s.giaVe
        })),
        taiKhoanNguoiDung: JSON.parse(localStorage.getItem("USER_LOGIN"))?.taiKhoan || "",
    };

    const handlePay = () => {
        setStep("qr");

        const timer1 = setTimeout(() => {
            setStep("success");
        }, 5000);

        const timer2 = setTimeout(async () => {
            const result = await dispatch(seatsToCheckOut(bookingData));

            if (seatsToCheckOut.fulfilled.match(result)) {
                setStep("your-ticket");
                navigate("/your-ticket",
                    {
                        state: {
                            maLichChieu,
                            totalPayment,
                            activeSeats,
                            foodOrders,
                        }
                    }
                );
            } else {
                setStep("failed");
            }
        }, 7000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    };


    return (
        <>
            <section className="bg-white py-10 sm:py-12 md:py-14">
                <div className="container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-6">
                    {/* LEFT */}
                    <div className="w-full lg:w-[65%] bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200">

                        <div className="flex flex-col sm:flex-row items-start lg:items-center justify-between gap-6">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                                    Review & Payment
                                </h1>
                                <p className="text-sm sm:text-base text-gray-600 mt-2">
                                    Check your booking details before completing payment.
                                </p>
                            </div>

                            <div className="text-right bg-yellow-100 px-5 py-3 rounded-xl border border-yellow-300 shadow-sm">
                                <p className="text-xs text-yellow-700 font-semibold">Showtime</p>
                                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                    {formatDate(ngayChieu)} — {gioChieu}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 bg-linear-to-br from-red-100 via-red-50 to-white border border-red-200 hover:border-red-300 shadow-md hover:shadow-lg rounded-3xl p-6 sm:p-8 transition-all">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <img
                                    src={hinhAnh}
                                    alt={tenPhim}
                                    className="w-28 sm:w-32 md:w-36 rounded-2xl object-cover border-4 border-red-300 shadow-lg"
                                />

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{tenPhim}</h2>
                                    <p className="text-gray-700 text-sm sm:text-base">{tenRap} — {tenCumRap}</p>
                                    <p className="text-gray-500 text-sm">{diaChi}</p>

                                    <div className="mt-2 flex flex-col gap-2">

                                        {/* Header + Change */}
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-gray-900 text-sm sm:text-base">
                                                Your Seats
                                            </span>

                                            <button
                                                onClick={handleChangeSeats}
                                                className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-indigo-700 duration-300 cursor-pointer"
                                            >
                                                Change
                                            </button>
                                        </div>

                                        {/* List of seats */}
                                        <div className="flex flex-wrap gap-2">
                                            {activeSeats.map((s, idx) => (
                                                <span
                                                    key={idx}
                                                    className="
          px-3 py-1
          text-xs sm:text-sm
          font-semibold
          bg-red-600 text-white
          rounded-xl shadow-md
        "
                                                >
                                                    {s.tenGhe}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 bg-green-50 border border-green-200 hover:bg-green-100 transition rounded-3xl shadow-sm hover:shadow-md p-6 sm:p-8">
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Food & Drinks Ordered</h2>
                                <p className="text-sm sm:text-base text-gray-700 font-medium">
                                    Subtotal: {totalFoodPrice.toLocaleString()} VND
                                </p>
                            </div>

                            {foodOrders.length > 0 ? (
                                <ul className="text-sm sm:text-base text-gray-700 space-y-1">
                                    {foodOrders.map((item, i) => (
                                        <li key={i}>
                                            {item.name} x{item.quantity} — {(item.price * item.quantity).toLocaleString()} VND
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-sm">No food or drinks ordered.</p>
                            )}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-[35%] bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 flex flex-col space-y-6">

                        {/* DISCOUNT CODE */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Discount Code
                            </label>

                            <div className="w-full flex flex-wrap">
                                <input
                                    type="text"
                                    value={codeInput}
                                    onChange={(e) => {
                                        setCodeInput(e.target.value);
                                        setMessage('');
                                    }}
                                    placeholder="Enter discount code"
                                    className="w-[75%] px-3 py-2 rounded-l-xl border border-gray-300 focus:ring-2 focus:ring-red-400"
                                />

                                {!appliedCode ? (
                                    <button
                                        onClick={handleApplyCode}
                                        className="w-[25%] px-4 py-2 bg-black text-white rounded-r-xl hover:bg-[#1C1C1C] cursor-pointer transition-all duration-300"
                                    >
                                        Apply
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleRemoveCode}
                                        className="w-[25%] px-4 py-2 bg-[#AAAAAA] text-gray-800 rounded-r-xl hover:bg-[#717171] cursor-pointer transition-all duration-300"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            {appliedCode && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 font-medium rounded-full">
                                    <span>{appliedCode.code}</span>
                                    <span className="px-2 py-0.5 bg-green-200 rounded-full text-xs">
                                        {appliedCode.label}
                                    </span>
                                </div>
                            )}

                            {message && (
                                <p
                                    className={
                                        message.includes('Applied') || message === 'Discount removed.'
                                            ? 'text-green-600 text-sm'
                                            : 'text-red-600 text-sm'
                                    }
                                >
                                    {message}
                                </p>
                            )}
                        </div>

                        <div className="border-t border-gray-300"></div>

                        {/* ORDER SUMMARY TITLE */}
                        <h3 className="text-2xl font-bold text-gray-900">Order Summary</h3>

                        {/* ORDER LINES */}
                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                                <span>Tickets ({activeSeats.length})</span>
                                <span className="font-semibold text-gray-900">
                                    {totalTicketPrice.toLocaleString()} VND
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                                <span>Food & Drinks</span>
                                <span className="font-semibold text-gray-900">
                                    {totalFoodPrice.toLocaleString()} VND
                                </span>
                            </div>

                            <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                                <span>Discount</span>
                                <span className="font-semibold text-green-600">
                                    -{discountValue.toLocaleString()} VND
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-gray-300"></div>

                        {/* TOTAL */}
                        <div className="flex flex-wrap items-center justify-between gap-1 lg:gap-2 xl:gap-3">
                            <p className="text-gray-600 text-sm">
                                Total Payment
                            </p>

                            <p className="text-xl sm:text-2xl lg:text-[26px] font-bold text-red-600">
                                {totalPayment.toLocaleString()} VND
                            </p>
                        </div>

                        {/* BUTTON PAY */}
                        <div className="fixed bottom-0 left-0 w-full bg-[#101010] sm:bg-transparent border-t border-red-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-4 py-4 pb-[calc(env(safe-area-inset-bottom)+14px)] flex items-center justify-center sm:static sm:shadow-none sm:border-none sm:px-0 sm:py-0 sm:flex-col">
                            <button
                                onClick={handlePay}
                                className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 cursor-pointer">Pay Now ({totalPayment.toLocaleString()} VND)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {step === "qr" && (
                <QRpayment />
            )}

            {step === "success" && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-green-600 text-white px-5 py-3 rounded-lg shadow-2xl z-50 animate__animated animate__fadeInDown animate__fast">
                    <i className="fa-solid fa-circle-check text-lg"></i>
                    <span className="font-medium text-sm sm:text-base">
                        Payment successful!
                    </span>
                </div>
            )}

            {step === "your-ticket" && (
                <YourTicket />
            )}
        </>
    );
};

export default CheckOut;
