import { PayloadAction } from "@reduxjs/toolkit";
import { CreateTokenResponse } from "../../../entities/dtos";
import { AUTHKEY_LOCALSTORAGE } from "../../../constants/authKey.localstorage";

export const setAuthReducerFulfilled = (
  _state: CreateTokenResponse,
  action: PayloadAction<CreateTokenResponse>
) => {
  const token = action.payload;
  console.log(token);
  window.localStorage.setItem(AUTHKEY_LOCALSTORAGE, JSON.stringify(token));
  return token;
};
