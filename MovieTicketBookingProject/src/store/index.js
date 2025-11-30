import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./../pages/HomeTemplate/MovieList/slice";
import movieCarouselReducer from "./../pages/HomeTemplate/Home/slice";
import movieDetailReducer from "./../pages/HomeTemplate/MovieDetail/slice";
import seatsReducer from "./../pages/HomeTemplate/TicketBooking/slice";
import userManageReducer from "./../pages/AdminTemplate/Users/slice";

const Store = configureStore({
  reducer: {
    movieListReducer,
    movieCarouselReducer,
    movieDetailReducer,
    seatsReducer,
    userManageReducer,
  },
});

export default Store;
