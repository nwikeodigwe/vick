import { isRejectedWithValue } from "@reduxjs/toolkit";
import { logout } from "@/features/auth/authSlice";
import { store } from "../store";

export const authMiddleware = () => (next) => (action) => {
  if (isRejectedWithValue(action) && action.payload.status === 401) {
    store.dispatch(logout());
    window.location.href = "/auth";
  }
  return next(action);
};
