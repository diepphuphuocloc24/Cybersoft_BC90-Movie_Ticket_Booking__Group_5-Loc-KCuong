import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  dataUser: null,
  error: null,
};

const homeLoginSlice = createSlice({
  name: "homeLoginSlice",
  initialState,
  reducers: {},
});

export default homeLoginSlice.reducer;
