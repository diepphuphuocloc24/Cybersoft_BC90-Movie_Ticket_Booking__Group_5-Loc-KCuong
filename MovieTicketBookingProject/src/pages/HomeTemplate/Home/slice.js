import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

const initialState = {
  loading: false,
  dataCarousel: null,
  error: null,
};

export const fetchMovieCarousel = createAsyncThunk(
  "carousel/fetchMovieCarousel",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.get("/QuanLyPhim/LayDanhSachBanner");

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const movieCarouselSlice = createSlice({
  name: "movieCarouselSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieCarousel.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMovieCarousel.fulfilled, (state, action) => {
      state.loading = false;
      state.dataCarousel = action.payload;
    });

    builder.addCase(fetchMovieCarousel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default movieCarouselSlice.reducer;
