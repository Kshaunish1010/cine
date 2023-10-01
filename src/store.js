import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";
import { otpReducer } from "./OteReducer";
const store = configureStore({
  reducer: {
    customReducer: customReducer,
    otpReducer: otpReducer,
  },
});

export default store;
