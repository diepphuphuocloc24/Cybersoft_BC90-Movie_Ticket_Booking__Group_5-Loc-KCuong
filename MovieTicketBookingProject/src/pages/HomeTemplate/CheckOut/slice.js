import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";

const initialState = {
  loading: false,
  dataSelectedSeats: null,
  error: null,
};

export const seatsToCheckOut = createAsyncThunk(
  "ticket/seatsToCheckOut",
  async (selectedSeats, { rejectWithValue }) => {
    try {
      const response = await api.post("QuanLyDatVe/DatVe", selectedSeats);

      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const SeatsSlice = createSlice({
  name: "SeatsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // SEATS TO CHECKOUT
    builder.addCase(seatsToCheckOut.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(seatsToCheckOut.fulfilled, (state, action) => {
      state.loading = false;
      state.dataSelectedSeats = action.payload;
    });
    builder.addCase(seatsToCheckOut.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default SeatsSlice.reducer;
