import { createReducer } from "@reduxjs/toolkit";

const initialState = { otp: false };
export const otpReducer = createReducer(initialState, {
  setOtp: (state, action) => {
    state.otp = action.payload;
  },
});
