import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  dataUser: null,
  error: null,
};

const homeRegisterSlice = createSlice({
  name: "homeRegisterSlice",
  initialState,
  reducers: {},
});

export default homeRegisterSlice.reducer;
