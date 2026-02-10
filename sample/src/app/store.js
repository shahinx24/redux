import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: useReducer
  }
});
