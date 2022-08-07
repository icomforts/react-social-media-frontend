import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    addCount: (state, action) => {
      state.count++;
    },
    minusCount: (state, action) => {
      state.count--;
    },
  },
});
export const selectCount = (state) => state.count;
export const { addCount, minusCount } = countSlice.actions;
export default countSlice.reducer;
