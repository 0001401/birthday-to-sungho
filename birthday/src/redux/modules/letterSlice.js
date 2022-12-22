import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  letter: [],
  isLoading: false,
  error: null,
};

export const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { letter } = letterSlice.actions;
export default letterSlice.reducer;
