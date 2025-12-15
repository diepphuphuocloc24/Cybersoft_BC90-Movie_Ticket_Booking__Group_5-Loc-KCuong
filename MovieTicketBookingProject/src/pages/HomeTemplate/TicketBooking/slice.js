import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";
import axios from "axios";

const initialState = {
  loading: false,
  dataSeats: null,
  dataFoods: null,
  error: null,
};

export const fetchSeats = createAsyncThunk(
  "ticket/fetchSeats",
  async (maLichChieu, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
      );

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchFoods = createAsyncThunk(
  "food/fetchFoods",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://68e90f09f2707e6128cd5c12.mockapi.io/api/cinema"
      );
      return response.data;
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
    // RENDER SEATS
    builder.addCase(fetchSeats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSeats.fulfilled, (state, action) => {
      state.loading = false;
      state.dataSeats = action.payload;
    });
    builder.addCase(fetchSeats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // RENDER FOODS
    builder.addCase(fetchFoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.dataFoods = action.payload;
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default SeatsSlice.reducer;
