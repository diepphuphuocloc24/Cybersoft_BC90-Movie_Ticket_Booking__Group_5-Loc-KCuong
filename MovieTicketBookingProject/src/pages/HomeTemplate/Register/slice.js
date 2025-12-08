import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";

const initialState = {
  loading: false,
  dataUser: null,
  error: null,
};

export const homeUserRegister = createAsyncThunk(
  "register/homeUserRegister",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post("QuanLyNguoiDung/DangKy", user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const homeRegisterSlice = createSlice({
  name: "homeRegisterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(homeUserRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(homeUserRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.dataUser = action.payload;
    });
    builder.addCase(homeUserRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default homeRegisterSlice.reducer;
