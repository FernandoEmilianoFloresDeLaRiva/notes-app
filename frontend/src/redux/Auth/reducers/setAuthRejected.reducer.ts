import { PayloadAction } from "@reduxjs/toolkit";
import { CreateTokenResponse } from "../../../entities/dtos";
import { AUTHKEY_LOCALSTORAGE } from "../../../constants";

export const setAuthReducerRejected = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _state: CreateTokenResponse,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  _action: PayloadAction<any>
) => {
  window.localStorage.removeItem(AUTHKEY_LOCALSTORAGE);
  return new CreateTokenResponse({
    token: "",
    user: { id: 0, username: "", email: "" },
  });
};
