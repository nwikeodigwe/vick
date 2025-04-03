import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { userApi } from "./services/userApi";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
