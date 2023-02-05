import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    loggedIn: false,
    email : null,
  },
  reducers: {
    logIn: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.username = null;
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
