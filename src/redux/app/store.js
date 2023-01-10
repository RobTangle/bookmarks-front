import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import resourceSlice from "../features/resource/resourceSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    resource: resourceSlice,
  },
});
