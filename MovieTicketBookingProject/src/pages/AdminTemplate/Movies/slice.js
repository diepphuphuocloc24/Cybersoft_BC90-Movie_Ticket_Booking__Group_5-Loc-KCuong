import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";

export const addMovie = createAsyncThunk(
  "adminMovies/addMovie",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await api.post("QuanLyPhim/ThemPhimUploadHinh", formData);
      alert("Add movie sucess!");
      return result.data.content;
    } catch (error) {
      alert(error.response.data.content);
      return rejectWithValue(error.response.data.content);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "adminMovies/deleteMovie",
  async (maPhim, { rejectWithValue }) => {
    try {
      const result = await api.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
      alert("Delete movie success!");
      
      return result.data.content;
    } catch (error) {
      alert(error.response.data.content);
      return rejectWithValue(error.response.data.content);
    }
  }
);

const moviesManageSlice = createSlice({
  name: "moviesManageSlice",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(addMovie.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default moviesManageSlice.reducer;