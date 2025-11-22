import { configureStore } from "@reduxjs/toolkit";
import movieTicketBooking from "./../pages/1.HomeTemplate/slice.js";

const Store = configureStore({
  reducer: {
    movieTicketBooking,
  },
});

export default Store;
