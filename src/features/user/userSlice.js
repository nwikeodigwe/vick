import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: { id: null, name: null, email: null },
    preferences: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setPreferences: (state, action) => {
      state.preferences = action.payload;
    },
  },
});

export const { setCurrentUser, setPreferences } = userSlice.actions;
export default userSlice.reducer;
