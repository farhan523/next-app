import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  isAuthenticated: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    id: "",
  },
};

export const userslice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logOutUser: (state, action) => {
      state.user = initailState.user;
      state.isAuthenticated = false;
    },
  },
});

export const { setCurrentUser, logOutUser } = userslice.actions;

export const getCurrentUser = (state) => {
  return state.user.user ?? {};
};

export const getIsAuthenticated = (state) => {
  return state.user.isAuthenticated;
};

export default userslice.reducer;
