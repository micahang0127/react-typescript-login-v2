import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import colorReducer from "./colorSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    color: colorReducer,
  },
});
