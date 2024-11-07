import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { ReduxSliceName } from "../../entities/entity";
import { initialStateAuth } from "./state/initialState";
import {
  logoutReducer,
  setAuthReducerFulfilled,
  setAuthReducerRejected,
} from "./reducers";
import { loginUserAsync } from "./thunks/loginUser.async";

export const authSlice = createSlice({
  name: ReduxSliceName.AUTH,
  initialState: initialStateAuth,
  reducers: {
    logout: logoutReducer,
  },
  extraReducers: (
    builder: ActionReducerMapBuilder<typeof initialStateAuth>
  ) => {
    //login
    builder.addCase(loginUserAsync.fulfilled, setAuthReducerFulfilled);
    builder.addCase(loginUserAsync.rejected, setAuthReducerRejected);
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
