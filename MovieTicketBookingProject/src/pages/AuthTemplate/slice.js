import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  dataAuth: null,
  error: null,
};

export const authLogin = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02",
        user
      );
      console.log(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authLoginSlice = createSlice({
  name: "authLoginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.dataAuth = action.payload;
      state.error = null;
    });

    builder.addCase(authLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authLoginSlice.reducer;
