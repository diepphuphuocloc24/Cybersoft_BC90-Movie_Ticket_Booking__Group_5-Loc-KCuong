import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  dataUsers: null,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03",
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MCIsIkhldEhhblN0cmluZyI6IjI5LzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MDAxMjgwMDAwMCIsIm5iZiI6MTc1MzAzMDgwMCwiZXhwIjoxNzgwMTYwNDAwfQ.KkGRtLpEsgoM4M_TapjOZIzvAwbay3QvXIwwN8XUqWk",
        },
      });
      return result.data.content;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

const userManageSlice = createSlice({
  name: "userManageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.dataUsers = action.payload;
    });

    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userManageSlice.reducer;
