import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeats, seatsToCheckOut } from "./slice";
import { Link, useLocation, useParams } from "react-router-dom";
import SeatList from "./seatList";
import Loading from "./loading";

const TicketBooking = () => {
  const location = useLocation();
  const { duration } = location.state || {};
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();

  const stateSeats = useSelector((state) => state.seatsReducer);
  const { loading, dataSeats } = stateSeats;

  const [activeSeats, setActiveSeats] = useState([]);

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);

  const [isConfirm, setIsConfirm] = useState({
    maLichChieu: null,
    danhSachVe: [],
  });

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchSeats(maLichChieu));
  }, [maLichChieu, dispatch]);

  const getSeatsSelectedInformation = (activeSeats) => {
    setActiveSeats(activeSeats)
  };

  const renderSeatList = () => (
    <SeatList
      propSeats={dataSeats?.danhSachGhe}
      activeSeats={activeSeats}
      onSelectSeat={getSeatsSelectedInformation}
    />
  );

  const renderMovieInformation = () => {
    if (!dataSeats?.thongTinPhim) return null;
    const { tenPhim, tenCumRap, diaChi, gioChieu, ngayChieu, tenRap, hinhAnh } =
      dataSeats.thongTinPhim;

    const formatDate = (dateStr) => {
      const [day, month, year] = dateStr.split("/");
      const date = new Date(`${year}-${month}-${day}`);
      return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    };

    return (
      <div className="w-full flex flex-row lg:flex-col justify-between items-start gap-4 lg:gap-5 text-xs sm:text-sm md:text-base lg:text-lg">
        <div className="w-full ">
          <img src={hinhAnh} alt={tenPhim} className="w-full lg:w-[60%]" />
        </div>

        <div className="w-full flex flex-col gap-3 lg:gap-4">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white tracking-wide">
            <span className="text-amber-400">{tenPhim}</span>
          </h3>
          <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400 font-medium flex items-center">
            <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center border border-gray-400 rounded-full text-[8px] sm:text-xs font-semibold mr-2">
              M
            </span>
            {duration} min
          </h4>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium">
            Format: <span className="text-amber-400 font-semibold">2D / IMAX</span>
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base">
            Location: <span className="text-amber-400 font-semibold">{tenCumRap} - {diaChi}</span>
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base">
            Time: <span className="text-amber-400 font-semibold">{gioChieu}</span> on{" "}
            <span className="text-amber-400 font-semibold">{formatDate(ngayChieu)}</span>
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base">
            Auditorium: <span className="text-amber-400 font-semibold">{tenRap}</span>
          </p>
        </div>
      </div>
    );
  };

  const renderInfoSeatSelected = () => {
    return activeSeats.length > 0 ? activeSeats.map((seats) => seats.tenGhe).join(", ") : "No seats selected"
  }

  const calculateSubTotal = () => {
    return activeSeats?.reduce((total, seat) => {
      return total + seat.giaVe;
    }, 0);
  };

  const handleProceed = () => {
    if (activeSeats.length === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false)
      }, 1500);
    } else {
      setModalConfirmOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalConfirmOpen(false)
  };

  const handleCancel = () => {
    setModalConfirmOpen(false);
  };

  const handleConfirm = () => {
    const bookingData = {
      maLichChieu: Number(maLichChieu),
      danhSachVe: activeSeats.map((seat) => ({
        maGhe: seat.maGhe,
        giaVe: seat.giaVe
      }))
    };

    // dispatch(seatsToCheckOut(bookingData));
  };

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <div className="bg-[#0F0F0F] lg:bg-white text-gray-800 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-5">
          {/* LEFT */}
          <div className="w-full lg:w-5/7">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white lg:text-gray-800 mb-4 sm:mb-5 md:mb-6 border-b pb-1 sm:pb-2 md:pb-2">
              SELECT SEATS
            </h2>

            <div className="flex flex-col items-center bg-[#1C1C1C] lg:bg-gray-200 p-2 sm:p-4 md:p-5 lg:p-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 rounded-lg border border-white">
              {/* SCREEN */}
              <div
                className="relative w-full bg-gray-200 text-black py-1 sm:py-2 md:py-3 lg:py-4 text-center font-extrabold text-sm sm:text-base md:text-lg lg:text-xl tracking-wider lg:bg-black lg:text-white lg:border-t-4 lg:border-b-4 lg:border-gray-500"
                style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }}>
                SCREEN
              </div>

              {/* EXIT */}
              <div className="w-full flex justify-between">
                <div className="bg-green-500 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 text-[9px] sm:text-[10px] md:text-sm lg:text-base font-semibold rounded-lg border border-green-800 shadow-md">
                  EXIT
                </div>
                <div className="bg-green-500 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 text-[9px] sm:text-[10px] md:text-sm lg:text-base font-semibold rounded-lg border border-green-800 shadow-md">
                  EXIT
                </div>
              </div>

              {/* SEATS */}
              <div className="w-full flex justify-center gap-0.5m:gap-[2px] md:gap-[3px] lg:gap-1 xl:gap-[5px]">
                <div className="w-[5%] h-height bg-indigo-200 lg:bg-red-800 border border-cyan-300 lg:border-red-900 shadow-md"></div>
                <div className="w-[90%] p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 grid grid-cols-16 gap-0.5 sm:gap-[3px] md:gap-1 lg:gap-[5px] xl:gap-1.5 bg-[#262626] lg:bg-white rounded-lg">
                  {renderSeatList()}
                </div>
                <div className="w-[5%] h-height bg-indigo-200 lg:bg-red-800 border border-cyan-300 lg:border-red-900 shadow-md"></div>
              </div>
            </div>

            {/* LEGEND */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pt-4 sm:pt-5 md:pt-6 lg:pt-7">
              {[
                { label: "Standard", color: "text-gray-300 lg:text-gray-400" },
                { label: "Your Seat", color: "text-lime-400" },
                { label: "Couple", color: "text-pink-600" },
                { label: "VIP", color: "text-orange-400" },
                { label: "Selected", color: "text-red-600" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-2">
                  <i className={`fi fi-ss-couch ${item.color} text-sm sm:text-lg`}></i>
                  <span className="text-white lg:text-black text-xs sm:text-sm md:text-base lg:text-lg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-2/7">
            <div
              className="
              bg-[#262626] text-white rounded-xl shadow-lg p-3 sm:p-4 md:p-5
              lg:bg-[#555555] lg:p-7 lg:rounded-2xl lg:shadow-xl lg:border lg:border-gray-100 lg:flex lg:flex-col lg:gap-7
              transition-all duration-300"
            >
              <div>
                {renderMovieInformation()}
              </div>

              <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-black lg:text-white z-10 flex flex-col justify-between items-center p-2 shadow-md sm:p-3 md:p-4 
              lg:static lg:translate-x-0 lg:left-0 lg:bg-transparent lg:p-0 lg:rounded-none lg:shadow-none">

                <div className="w-[85%] lg:w-full flex justify-between items-start text-sm sm:text-base md:text-lg border-b border-red-200">
                  <h3 className="font-semibold tracking-wide">Seats</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg text-right font-bold">
                      {renderInfoSeatSelected()}
                    </span>

                    {activeSeats.length > 0 && (
                      <button className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 flex items-center justify-center shrink-0 leading-none text-white bg-red-500 rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer" title="Clear selected seats"
                        onClick={() => setActiveSeats([])}
                      >
                        <i className="fa-solid fa-xmark text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] lg:text-[0.75rem]"></i>
                      </button>
                    )}
                  </div>
                </div>

                <div className="w-[85%] lg:w-full flex flex-row lg:flex-col justify-between">
                  {/* TOTAL */}
                  <div className="flex justify-between items-center pt-2 sm:pt-3 md:pt-4 lg:pt-5">
                    <h3 className="hidden lg:block text-amber-400 font-extrabold tracking-wide text-xl md:text-2xl lg:text-lg xl:text-2xl">
                      Subtotal
                    </h3>
                    <span className="text-xl md:text-2xl lg:text-lg xl:text-2xl font-extrabold lg:text-amber-400 text-red-500">
                      {calculateSubTotal().toLocaleString('vi-VN')} đ
                    </span>
                  </div>

                  {/* BUTTON */}
                  <div className="flex justify-end mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                    <button
                      className="
          bg-red-500 text-white font-extrabold 
          text-sm sm:text-base md:text-base lg:text-lg 
          py-1 sm:py-1 md:py-2 lg:py-3 
          px-3 sm:px-4 md:px-5 lg:px-6 
          rounded-md lg:rounded-lg xl:rounded-xl 
          hover:bg-red-600 transition-all duration-300 
          transform hover:scale-105 active:scale-95 cursor-pointer
        "
                      onClick={handleProceed}
                    >
                      PROCEED
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL CONFIRM */}
        {modalConfirmOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-3xl w-full max-w-lg p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 relative">

              <button
                onClick={handleCloseModal}
                className="absolute -top-[2%] -right-[2%] w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 flex items-center justify-center bg-black text-white rounded-full ring-2 ring-white transition duration-300 cursor-pointer hover:bg-red-500 leading-none"
                title="Close"
              >
                <i className="fi fi-rr-cross-small text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-none"></i>
              </button>

              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-wide">
                Confirm Booking
              </h2>

              <div className="space-y-2 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-700">
                {[
                  { icon: "fi fi-rr-screen-play", label: "Theater", value: dataSeats.thongTinPhim.tenCumRap },
                  { icon: "fi fi-ts-land-layer-location", label: "Address", value: dataSeats.thongTinPhim.diaChi },
                  { icon: "fa-solid fa-building", label: "Auditorium", value: dataSeats.thongTinPhim.tenRap },
                  { icon: "fa-regular fa-clock", label: "Showtime", value: dataSeats.thongTinPhim.gioChieu },
                  { icon: "fi fi-rr-calendar", label: "Date", value: dataSeats.thongTinPhim.ngayChieu },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 py-0.5 sm:py-1">
                    <i className={`${item.icon} text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl`}></i>
                    <span className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 font-medium">{item.label}:</span>
                    <span className="ml-auto text-right font-semibold text-orange-500 truncate max-w-[65%] sm:max-w-[70%] md:max-w-[75%] lg:max-w-[80%] xl:max-w-[85%]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-200 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-600">Selected Seats</p>
                    <p className="font-semibold text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{renderInfoSeatSelected()}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-600">Subtotal</p>
                    <p className="font-extrabold text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                      {calculateSubTotal().toLocaleString("vi-VN")} đ
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 sm:gap-2.5 mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7">
                <button
                  onClick={handleCancel}
                  className="px-2.5 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg"
                >
                  Cancel
                </button>

                <Link
                  to={`/check-out/${maLichChieu}`}
                  state={{ activeSeats }}
                  onClick={handleConfirm}
                  className="px-2.5 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 transition-all duration-300 cursor-pointer shadow-md text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg"
                >
                  Confirm
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-red-600 text-white font-semibold px-8 py-6 rounded-2xl shadow-2xl border-2 border-red-400 text-center max-w-sm">
            Please select at least one seat
          </div>
        </div>
      )}
    </>
  );
};

export default TicketBooking;
