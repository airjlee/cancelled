import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: { email: "you@gmail.com", uid: "demo" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.account = action.payload;
      localStorage.setItem("mail_account", JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.clear();
      state.account = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.account;

export default userSlice.reducer;
