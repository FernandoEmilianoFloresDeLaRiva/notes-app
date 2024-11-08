import { BASE_URL_USERS } from "../../../constants";
import { CreateUserT } from "../../../entities/entity";
import { generateAlertError, generateAlertSuccess } from "../../../utils";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const registerUserService = async (data: CreateUserT): Promise<void> => {
  try {
    const response = await postWithoutAuth(`${BASE_URL_USERS}`, data);
    generateAlertSuccess("User successfully registered");
    console.log(response);
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    generateAlertError("There was an error creating the user");
    throw new Error(err);
  }
};
