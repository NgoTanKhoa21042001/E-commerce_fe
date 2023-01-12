import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const { logout, addNotifications, resetNotifications } =
  userSlice.actions;
export default userSlice.reducer;
