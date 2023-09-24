import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  nafFormSubmitted: false,
};

export const nafFormSlice = createSlice({
  name: "nafForm",
  initialState: initailState,
  reducers: {
    setNafFomrSubmitted: (state, action) => {
      state.nafFormSubmitted = action.payload;
    },
  },
});

export const { setNafFomrSubmitted } = nafFormSlice.actions;

export const getNafFormSubmitted = (state) => {
  return state.nafForm.nafFormSubmitted;
};

export default nafFormSlice.reducer;
