import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods, fetchSeats } from "./slice";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import SeatList from "./seatList";
import Loading from "./loading";

const TicketBooking = () => {
  const location = useLocation();
  const { duration } = location.state || {};
  const { maLichChieu } = useParams();

  const dispatch = useDispatch();

  const stateSeats = useSelector((state) => state.seatsReducer);

  const { loading, dataSeats, dataFoods, error } = stateSeats;

  console.log(dataFoods);

  const [activeSeats, setActiveSeats] = useState([]);

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);

  const [selectedFoods, setSelectedFoods] = useState([]);

  const [modalFoodOpen, setModalFoodOpen] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const stateLogin = useSelector((state) => state.homeLoginReducer);

  const { dataUser } = stateLogin

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    dispatch(fetchSeats(maLichChieu));
    dispatch(fetchFoods())
  }, [maLichChieu, dispatch]);

  const getSeatsSelectedInformation = (activeSeats) => {
    setActiveSeats(activeSeats)
  };

  useEffect(() => {
    if (!dataUser) {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [dataUser]);


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
      setTimeout(() => setShowAlert(false), 1500);
    } else {
      setModalFoodOpen(true);
    }
  };

  const handleIncreaseFood = (food) => {
    setSelectedFoods((prev) => {
      const existed = prev.find((f) => f.id === food.id);

      if (!existed) {
        return [...prev, { ...food, quantity: 1 }];
      }

      return prev.map((f) =>
        f.id === food.id ? { ...f, quantity: f.quantity + 1 } : f
      );
    });
  };

  const handleDecreaseFood = (foodId) => {
    setSelectedFoods((prev) =>
      prev
        .map((f) =>
          f.id === foodId ? { ...f, quantity: f.quantity - 1 } : f
        )
        .filter((f) => f.quantity > 0)
    );
  };

  const snackList = dataFoods?.filter(item => item.type === "snack");

  const calculateFoodTotal = () => {
    return selectedFoods.reduce((total, f) => {
      return total + f.price * f.quantity;
    }, 0);
  };

  const calculateGrandTotal = () => {
    return calculateSubTotal() + calculateFoodTotal();
  };

  if (loading) {
    return (
      <Loading status={false} />
    );
  }

  if (!dataUser) {
    return !redirect
      ? <Loading status={true} />
      : <Navigate to="/" replace />;
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

        {/* MODAL FOODS */}
        {modalFoodOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            {/* CLICK OUTSIDE */}
            <div
              className="flex-1 cursor-pointer"
              onClick={() => setModalFoodOpen(false)}
            />

            {/* SIDEBAR */}
            <div
              className="
        w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]
        h-full bg-white shadow-2xl flex flex-col
        animate__animated animate__fadeInRight
      "
            >
              {/* HEADER */}
              <div className="px-4 sm:px-5 md:px-6 py-4 border-b flex justify-between items-center">
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400 tracking-wide">
                    STEP 2 OF 3
                  </p>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold">
                    Food & Drinks
                  </h2>
                </div>

                <button
                  onClick={() => setModalFoodOpen(false)}
                  className="cursor-pointer w-8 h-8 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
                >
                  <i className="fi fi-rr-cross-small"></i>
                </button>
              </div>

              {/* FOOD LIST */}
              <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-5 py-4 space-y-2">
                {snackList?.map(food => {
                  const selected = selectedFoods.find(f => f.id === food.id)
                  return (
                    <div
                      key={food.id}
                      className="flex items-center gap-3 p-3 rounded-xl border hover:shadow-md transition cursor-pointer"
                    >
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-lg object-cover border"
                      />

                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate text-xs sm:text-sm md:text-base">
                          {food.name}
                        </p>
                        <p className="text-red-500 font-bold text-[11px] sm:text-xs md:text-sm">
                          {food.price.toLocaleString("vi-VN")} đ
                        </p>
                      </div>

                      {/* ACTION */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleDecreaseFood(food.id)}
                          className="cursor-pointer w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
                        >
                          −
                        </button>

                        <span className="min-w-[18px] text-center font-semibold text-sm">
                          {selected?.quantity || 0}
                        </span>

                        <button
                          onClick={() => handleIncreaseFood(food)}
                          className="cursor-pointer w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* FOOTER */}
              <div className="border-t px-4 sm:px-5 md:px-6 py-4 space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Seats Selected</span>
                  <span className="font-semibold">
                    {calculateSubTotal().toLocaleString("vi-VN")} đ
                  </span>
                </div>

                <div className="flex justify-between text-sm sm:text-base">
                  <span>Food</span>
                  <span className="font-semibold">
                    {calculateFoodTotal().toLocaleString("vi-VN")} đ
                  </span>
                </div>

                <div className="flex justify-between text-base sm:text-lg font-extrabold text-red-500">
                  <span>Total</span>
                  <span>{calculateGrandTotal().toLocaleString("vi-VN")} đ</span>
                </div>

                <button
                  onClick={() => {
                    setModalFoodOpen(false)
                    setModalConfirmOpen(true)
                  }}
                  className="
            cursor-pointer w-full mt-2 py-2.5 rounded-xl
            bg-red-500 hover:bg-red-600 text-white font-extrabold
            transition shadow-lg
          "
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL CONFIRM */}
        {modalConfirmOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 min-h-screen">
            <div
              className="
        bg-white w-full max-w-xl
        rounded-2xl shadow-2xl
        p-4 sm:p-5 md:p-6 lg:p-7
      "
            >
              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold">
                  Confirm Booking
                </h2>
                <button
                  onClick={() => setModalConfirmOpen(false)}
                  className="cursor-pointer w-8 h-8 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white"
                >
                  <i className="fi fi-rr-cross-small"></i>
                </button>
              </div>

              {/* MOVIE INFO */}
              <div className="space-y-2 text-xs sm:text-sm md:text-base">
                {[
                  { icon: "fi fi-rr-screen-play", label: "Theater", value: dataSeats.thongTinPhim.tenCumRap },
                  { icon: "fa-solid fa-building", label: "Auditorium", value: dataSeats.thongTinPhim.tenRap },
                  { icon: "fa-regular fa-clock", label: "Time", value: dataSeats.thongTinPhim.gioChieu },
                  { icon: "fi fi-rr-calendar", label: "Date", value: dataSeats.thongTinPhim.ngayChieu },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <i className={`${item.icon} text-red-500`}></i>
                    <span className="font-medium">{item.label}:</span>
                    <span className="ml-auto font-semibold truncate max-w-[60%]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* SELECTED SEATS */}
              <div className="border-t mt-4 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fi fi-ss-couch text-red-500"></i>
                  <h3 className="font-bold text-sm sm:text-base">
                    Selected Seats
                  </h3>
                </div>

                <div className="flex gap-4">
                  {/* LEFT – SEAT LIST */}
                  <div className="flex-1 flex flex-wrap gap-2">
                    {activeSeats.map(seat => (
                      <span
                        key={seat.maGhe}
                        className="
        px-3 py-1.5
        rounded-lg
        bg-blue-200
        border border-gray-300
        text-gray-800
        font-semibold
        text-xs sm:text-sm
      "
                      >
                        {seat.tenGhe}
                      </span>
                    ))}
                  </div>

                  {/* RIGHT – SEAT TOTAL */}
                  <div className="flex justify-between text-xs sm:text-sm md:text-base">
                    <span className="font-bold text-red-500">
                      {calculateSubTotal().toLocaleString("vi-VN")} đ
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOD LIST */}
              <div className="border-t mt-4 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="fi fi-rr-popcorn text-red-500"></i>
                  <h3 className="font-bold text-sm sm:text-base">
                    Food & Drinks
                  </h3>
                </div>

                {selectedFoods.length > 0 ? (
                  <div className="space-y-2">
                    {selectedFoods.map(food => (
                      <div
                        key={food.id}
                        className="flex justify-between text-xs sm:text-sm md:text-base"
                      >
                        <span className="truncate">
                          {food.name} <span className="text-gray-400">x{food.quantity}</span>
                        </span>
                        <span className="font-bold text-red-500">
                          {(food.price * food.quantity).toLocaleString("vi-VN")} đ
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="italic text-gray-400 text-xs sm:text-sm">
                    No food selected
                  </p>
                )}
              </div>

              {/* TOTAL */}
              <div className="border-t mt-4 pt-4">
                <div className="
    flex justify-between items-center
    font-extrabold text-red-500
    text-base sm:text-lg md:text-xl
  ">
                  <span>Total Payment</span>
                  <span>{calculateGrandTotal().toLocaleString("vi-VN")} đ</span>
                </div>
              </div>


              {/* ACTION */}
              <div className="flex justify-end gap-2 mt-5">
                <button
                  onClick={() => setModalConfirmOpen(false)}
                  className="cursor-pointer px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>

                <Link
                  to={`/check-out/${maLichChieu}`}
                  state={{ activeSeats, selectedFoods }}
                  className="
            cursor-pointer px-5 py-2 rounded-lg
            bg-red-500 hover:bg-red-600 text-white font-bold shadow
          "
                >
                  Confirm & Pay
                </Link>
              </div>
            </div>
          </div>
        )}
      </div >

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-red-600 text-white font-semibold px-8 py-6 rounded-2xl shadow-2xl border-2 border-red-400 text-center max-w-sm">
            Please select at least one seat
          </div>
        </div>
      )
      }
    </>
  );
};

export default TicketBooking;
