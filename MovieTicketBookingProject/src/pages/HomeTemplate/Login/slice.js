import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";

const dataUserToJSON = localStorage.getItem("USER_LOGIN");
const dataUser = JSON.parse(dataUserToJSON);

const initialState = {
  loading: false,
  dataUser,
  error: null,
};

export const homeUserLogin = createAsyncThunk(
  "login/homeUserLogin",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post("QuanLyNguoiDung/DangNhap", user);
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const homeLoginSlice = createSlice({
  name: "homeLoginSlice",
  initialState,
  reducers: {
    handleLogout: (state) => {
      state.dataUser = null;
      state.error = null;
      localStorage.removeItem("USER_LOGIN");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(homeUserLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(homeUserLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.dataUser = action.payload;

      const dataUsertoString = JSON.stringify(action.payload);
      localStorage.setItem("USER_LOGIN", dataUsertoString);
    });
    builder.addCase(homeUserLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { handleLogout } = homeLoginSlice.actions;

export default homeLoginSlice.reducer;
