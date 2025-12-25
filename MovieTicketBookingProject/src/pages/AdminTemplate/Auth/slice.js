import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../../services/api";

const userInfoToString = localStorage.getItem("USER_ADMIN");

const data = userInfoToString ? JSON.parse(userInfoToString) : null;

const initialState = {
  loading: false,
  data,
  error: null,
};

export const authService = createAsyncThunk(
  "authentication/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post("QuanLyNguoiDung/DangNhap", user);

      const roles = response.data.content.maLoaiNguoiDung;
      console.log(roles);

      if (roles === "KhachHang") {
        return rejectWithValue({
          response: {
            data: {
              content: "You do not have permission to access this page.",
            },
          },
        });
      }

      const converToString = JSON.stringify(response.data.content);
      localStorage.setItem("USER_ADMIN", converToString);

      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authenticationSlice = createSlice({
  name: "authenticationSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.error = null;
      localStorage.removeItem("USER_ADMIN");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authService.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(authService.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(authService.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
