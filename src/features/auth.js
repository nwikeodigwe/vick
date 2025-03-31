import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  refresh: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refresh = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { setAuthToken, setRefreshToken, logout } = authSlice.actions;
export default authSlice.reducer;
