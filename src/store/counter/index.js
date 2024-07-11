import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    num: 0,
  },
  reducers: {
    addNum: (state, { payload }) => {
      state.num += payload;
    },
    subNum: (state, { payload }) => {
      state.num -= payload;
    },
  },
});

export const { addNum: addNumAction, subNum: subNumAction } =
  counterSlice.actions;
export default counterSlice.reducer;
