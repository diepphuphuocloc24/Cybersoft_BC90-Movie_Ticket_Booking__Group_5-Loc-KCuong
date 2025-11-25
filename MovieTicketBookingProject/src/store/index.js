import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./../pages/1.HomeTemplate/2.MovieList/slice";
import movieCarouselReducer from "./../pages/1.HomeTemplate/1.Home/slice";
import movieDetailReducer from "./../pages/1.HomeTemplate/3.MovieDetail/slice";
import userManageReducer from "./../pages/2.AdminTemplate/3.Users/slice";

const Store = configureStore({
  reducer: {
    movieListReducer,
    movieCarouselReducer,
    movieDetailReducer,
    userManageReducer,
  },
});

export default Store;
