import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";

const initialState = {
  loading: false,
  dataSeats: null,
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

const SeatsSlice = createSlice({
  name: "SeatsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export default SeatsSlice.reducer;
