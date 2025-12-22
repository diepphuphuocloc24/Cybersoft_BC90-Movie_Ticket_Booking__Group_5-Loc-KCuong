import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../../services/api";

const initialState = {
  loading: false,
  dataUsers: [],
  addUserResult: null,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03");
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response?.data?.content || error.message);
    }
  }
);

export const addUserService = createAsyncThunk(
  "users/addUserService",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post("QuanLyNguoiDung/ThemNguoiDung", user);
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error.response?.data?.content || error.message);
    }
  }
);

export const deleteUserService = createAsyncThunk(
  "users/deleteUserService",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      const response = await api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error.response?.data?.content || error.message);
    }
  }
);

export const updateUserService = createAsyncThunk(
  "users/updateUserService",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user);
      return response.data.content;
    } catch (error) {
      return rejectWithValue(error.response?.data?.content || error.message);
    }
  }
);

const userManageSlice = createSlice({
  name: "userManage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => { state.loading = true; })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.dataUsers = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addUserService.pending, (state) => { state.loading = true; })
      .addCase(addUserService.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addUserService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteUserService.pending, (state) => { state.loading = true; })
      .addCase(deleteUserService.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteUserService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateUserService.pending, (state) => { state.loading = true; })
      .addCase(updateUserService.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userManageSlice.reducer;