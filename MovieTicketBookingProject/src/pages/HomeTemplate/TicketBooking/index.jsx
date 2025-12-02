import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeats } from './slice'
import { Link, useLocation, useParams } from 'react-router-dom';
import SeatList from './seatList';

const TicketBooking = () => {
    const location = useLocation();
    const { duration } = location.state || {};
    const { maLichChieu } = useParams()

    const dispatch = useDispatch();

    const stateSeats = useSelector((state) => state.seatsReducer);

    const { dataSeats, loading } = stateSeats;

    const [activeSeats, setActiveSeats] = useState([
        {
            "maGhe": null,
            "giaVe": null
        }
    ]);

    const [modalConfirmOpen, setModalConfirmOpen] = useState(false);

    console.log('Mã lịch chiếu truyền qua:', maLichChieu);
    console.log('Data Seat tương đương là:', dataSeats);

    useEffect(() => {
        dispatch(fetchSeats(maLichChieu));
    }, [maLichChieu, dispatch]);

    if (loading) {
        return (
            <div className="animate-pulse p-8 max-w-4xl mx-auto">
                <div className="h-8 w-1/3 bg-gray-200 rounded-xl mb-6" />

                <div className="flex gap-8">
                    <div className="w-36 h-56 bg-gray-200 rounded-2xl shadow-inner" />

                    <div className="flex-1 space-y-4">
                        <div className="h-5 w-1/2 bg-gray-200 rounded-lg" />
                        <div className="h-5 w-1/3 bg-gray-200 rounded-lg" />
                        <div className="h-5 w-1/4 bg-gray-200 rounded-lg" />
                        <div className="h-5 w-2/3 bg-gray-200 rounded-lg mt-3" />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-8 gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />

                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />

                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />

                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                    <div className="w-9 h-9 bg-gray-200 rounded-lg shadow-sm" />
                </div>
            </div>
        )
    }

    const handleSelectSeat = (selectedSeats) => {
        console.log(selectedSeats);
        setActiveSeats(selectedSeats);
    };

    const renderSeatList = () => {
        return (
            <SeatList
                propSeats={dataSeats?.danhSachGhe}
                activeSeats={activeSeats}
                onSelectSeat={handleSelectSeat}
            />
        )
    }

    const renderMovieInformation = () => {
        if (!dataSeats?.thongTinPhim) return null;

        const { tenPhim, tenCumRap, diaChi, gioChieu, ngayChieu, tenRap, hinhAnh } = dataSeats.thongTinPhim;

        const formatDate = (dateStr) => {
            const [day, month, year] = dateStr.split('/');
            const date = new Date(`${year}-${month}-${day}`);
            return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        };


        return (
            <div className="space-y-2">
                <img src={hinhAnh} alt={tenPhim} className='w-40' />

                <h3 className="text-2xl font-extrabold mb-3 text-white tracking-wide">
                    <span className="text-amber-400">{tenPhim}</span>
                </h3>

                <h4 className="text-sm text-gray-400 font-medium flex items-center">
                    <span className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-xs font-semibold mr-2">
                        M
                    </span>
                    {duration} min
                </h4>

                <p className="text-base font-medium">
                    Format: <span className="text-amber-400 font-semibold">2D / IMAX</span>
                </p>

                <p className="text-base">
                    Location: <span className="text-amber-400 font-semibold">{tenCumRap} - {diaChi} </span>
                </p>

                <p className="text-base">
                    Time:
                    <span className="text-amber-400 font-semibold ml-1">{gioChieu}</span>
                    <span className="mx-1">on</span>
                    <span className="text-amber-400 font-semibold">{formatDate(ngayChieu)}</span>
                </p>

                <p className="text-base">
                    Auditorium: <span className="text-amber-400 font-semibold">{tenRap}</span>
                </p>
            </div>
        );
    };

    const calculateSubTotal = () => {
        const danhSachGhe = dataSeats?.danhSachGhe || [];

        const selectedSeatsDetails = danhSachGhe.filter((seat) => {
            return activeSeats.includes(seat.tenGhe)
        });

        const subTotal = selectedSeatsDetails.reduce((accumulator, currentSeat) => {
            return accumulator + currentSeat.giaVe;
        }, 0);

        return subTotal;
    };

    const handleProceed = () => {
        if (activeSeats.length === 0) {
            alert("You haven't selected any seats. Please choose your seats before proceeding with the booking process.")
        } else {
            setModalConfirmOpen(!modalConfirmOpen)
        }

    };

    const handleCloseModal = () => {
        setModalConfirmOpen(false);
    };

    const handleCancel = () => {
        setModalConfirmOpen(false);
        setActiveSeats([])
    }

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const parts = dateStr.split('/');
        if (parts.length !== 3) return dateStr;
        const [day, month, year] = parts;
        const d = new Date(`${year}-${month}-${day}`);
        try {
            return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="bg-white text-gray-800 py-12">
            <div className="container mx-auto px-4 flex justify-between items-start gap-5">
                {/* LEFT */}
                <div className='w-5/7'>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
                        SELECT SEATS
                    </h2>

                    <div className="flex flex-col items-center bg-gray-200 p-6 gap-6">

                        {/* SCREEN */}
                        <div className="relative w-full py-3 text-center text-white font-extrabold text-xl tracking-wider border-5 border-b border-gray-500"
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
                                backgroundColor: '#000',
                            }}>
                            SCREEN
                        </div>

                        {/* EXIT */}
                        <div className="w-full flex justify-between">
                            {/* LEFT EXIT */}
                            <div className="bg-green-500 text-white px-4 py-1 font-semibold rounded-lg border border-green-800 shadow-md">
                                EXIT
                            </div>

                            {/* RIGHT EXIT */}
                            <div className="bg-green-500 text-white px-4 py-1 font-semibold rounded-lg border border-green-800 shadow-md">
                                EXIT
                            </div>
                        </div>

                        {/* SEAT AREA */}
                        <div className="w-full flex justify-center gap-6">
                            {/* LEFT AISLE */}
                            <div className="w-15 h-height bg-red-800 border border-red-900 rounded-lg shadow-md"></div>

                            {/* SEATS */}
                            {renderSeatList()}

                            {/* RIGHT AISLE */}
                            <div className="w-15 h-height bg-red-800 border border-red-900 rounded-lg shadow-md"></div>
                        </div>
                    </div>

                    {/* LEGEND */}
                    <div className="flex flex-wrap items-center gap-10 pt-10 font-medium">
                        <div className="flex items-center gap-2">
                            <i className="fi fi-ss-couch text-gray-400 text-2xl"></i>
                            <span className="text-black text-lg ml-2">Standard</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <i className="fi fi-ss-couch text-lime-400 text-2xl"></i>
                            <span className="text-black text-lg ml-2">Your Seat</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <i className="fi fi-ss-couch text-pink-600 text-2xl"></i>
                            <span className="text-black text-lg ml-2">Couple</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <i className="fi fi-ss-couch text-orange-400 text-2xl"></i>
                            <span className="text-black text-lg ml-2">VIP</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <i className="fi fi-ss-couch text-red-600 text-2xl"></i>
                            <span className="text-black text-lg ml-2">Selected</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='w-2/7'>

                    <div className="bg-[#555555] text-white p-7 rounded-3xl shadow-xl flex flex-col gap-6 border border-gray-100 transition-all hover:shadow-2xl">
                        <div>
                            {renderMovieInformation()}
                        </div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold tracking-wide">
                                Seats
                            </h3>
                            <span className="text-xl font-bold max-w-50">
                                {activeSeats.length > 0 ? activeSeats.join(', ') : 'No seats selected'}
                            </span>
                        </div>

                        <div className="border-t pt-5 border-red-200 flex justify-between items-center">
                            <h3 className="text-xl text-amber-400 font-extrabold tracking-wide">
                                Subtotal
                            </h3>
                            <span className="text-3xl font-extrabold text-amber-400 drop-shadow-sm">
                                {calculateSubTotal().toLocaleString('vi-VN')} đ
                            </span>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-500 text-white font-extrabold py-3 px-8 rounded-2xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
                                onClick={handleProceed}
                            >
                                PROCEED
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {modalConfirmOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-2xl shadow-3xl w-full max-w-lg p-7 relative">

                        <button
                            onClick={handleCloseModal}
                            className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full ring-2 ring-white transition duration-300 cursor-pointer hover:bg-red-500 hover:text-white"
                        >
                            <i className="fi fi-rr-cross-small text-base leading-none shrink-0"></i>
                        </button>

                        <h2 className="text-2xl font-bold text-black mb-5 tracking-wide">
                            Confirm Booking
                        </h2>

                        <div className="space-y-5 text-gray-700">

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 py-2">
                                    <i className="fi fi-rr-screen-play text-lg text-red-500"></i>
                                    <span className="text-sm font-medium text-gray-600 w-32">Theater:</span>
                                    <span className="text-sm font-semibold text-orange-500 ml-auto text-right">{dataSeats.thongTinPhim.tenCumRap}</span>
                                </div>

                                <div className="flex items-start gap-3 py-2">
                                    <i className="fi fi-ts-land-layer-location text-lg text-red-500"></i>
                                    <span className="text-sm font-medium text-gray-600 w-32">Address:</span>
                                    <span className="text-sm font-semibold text-orange-500 ml-auto text-right max-w-[80%]">
                                        {dataSeats.thongTinPhim.diaChi}
                                    </span>
                                </div>

                                <div className="flex items-start gap-3 py-2">
                                    <i class="fa-solid fa-building text-xl text-red-500"></i>
                                    <span className="text-sm font-medium text-gray-600 w-32">Auditorium:</span>
                                    <span className="text-sm font-semibold text-orange-500 ml-auto text-right max-w-[80%]">
                                        {dataSeats.thongTinPhim.tenRap}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 py-2">
                                    <i className="fa-regular fa-clock text-lg text-red-500"></i>
                                    <span className="text-sm font-medium text-gray-600 w-32">Showtime:</span>
                                    <span className="text-sm font-semibold text-orange-500 ml-auto text-right">
                                        {dataSeats.thongTinPhim.gioChieu}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 py-2">
                                    <i className="fi fi-rr-calendar text-lg text-red-500"></i>
                                    <span className="text-sm font-medium text-gray-600 w-32">Date:</span>
                                    <span className="text-sm font-semibold text-orange-500 ml-auto text-right">
                                        {formatDate(dataSeats.thongTinPhim.ngayChieu)}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Selected Seats</p>
                                        <p className="text-2xl font-semibold text-black">
                                            {activeSeats.length > 0 ? activeSeats.join(', ') : 'None'}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Subtotal</p>
                                        <p className="text-2xl font-extrabold text-red-500">
                                            {calculateSubTotal().toLocaleString('vi-VN')} đ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-7">
                            <button
                                onClick={handleCancel}
                                className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 transition duration-300 cursor-pointer font-medium"
                            >
                                Cancel
                            </button>

                            <Link
                                to="/check-out"
                                className="px-5 py-2 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition duration-300 cursor-pointer shadow-md transform hover:-translate-y-0.5"
                            >
                                Confirm
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TicketBooking
