import { CreateTokenResponse } from "../../../entities/dtos";
import { AUTHKEY_LOCALSTORAGE } from "../../../constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const logoutReducer = (_state: CreateTokenResponse) => {
  window.localStorage.removeItem(AUTHKEY_LOCALSTORAGE);
  return new CreateTokenResponse({
    token: "",
    user: { id: 0, username: "", email: "" },
  });
};
