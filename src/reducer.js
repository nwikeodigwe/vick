import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;
