import { AUTHKEY_LOCALSTORAGE } from "../../../constants/authKey.localstorage";
import { CreateTokenResponse } from "../../../entities/dtos";

const savedData = window.localStorage.getItem(AUTHKEY_LOCALSTORAGE);

const initialToken = savedData
  ? JSON.parse(savedData)
  : { token: "", user: { id: 0, email: "" } };

export const initialStateAuth: CreateTokenResponse = new CreateTokenResponse(
  initialToken
);
