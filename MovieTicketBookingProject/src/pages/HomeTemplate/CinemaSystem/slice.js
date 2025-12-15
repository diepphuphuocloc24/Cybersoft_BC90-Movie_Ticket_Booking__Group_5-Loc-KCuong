import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";

const initialState = {
  loading: false,
  dataCinema: [],
  error: null,
};

export const fetchCinema = createAsyncThunk(
  "cinema/fetchCinema",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
      );
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cinemaSlice = createSlice({
  name: "cinemaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCinema.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCinema.fulfilled, (state, action) => {
      state.loading = false;
      state.dataCinema = action.payload;
    });
    builder.addCase(fetchCinema.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cinemaSlice.reducer;
