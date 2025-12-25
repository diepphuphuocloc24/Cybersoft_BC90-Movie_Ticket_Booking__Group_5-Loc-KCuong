import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./../pages/HomeTemplate/MovieList/slice";
import movieHomeReducer from "./../pages/HomeTemplate/Home/slice";
import botChatReducer from "./../pages/HomeTemplate/_components/BotChat/slice";
import cinemaReducer from "./../pages/HomeTemplate/CinemaSystem/slice";
import movieDetailReducer from "./../pages/HomeTemplate/MovieDetail/slice";
import seatsReducer from "./../pages/HomeTemplate/TicketBooking/slice";
import homeLoginReducer from "./../pages/HomeTemplate/Login/slice";
import homeRegisterReducer from "./../pages/HomeTemplate/Register/slice";

import authLoginReducer from "./../pages/AdminTemplate/Auth/slice";
import userManageReducer from "./../pages/AdminTemplate/Users/slice";
import moviesManageReducer from "./../pages/AdminTemplate/Movies/slice";

const Store = configureStore({
  reducer: {
    movieListReducer,
    movieHomeReducer,
    botChatReducer,
    cinemaReducer,
    movieDetailReducer,
    seatsReducer,
    authLoginReducer,
    userManageReducer,
    homeLoginReducer,
    homeRegisterReducer,
    moviesManageReducer,
  },
});

export default Store;
