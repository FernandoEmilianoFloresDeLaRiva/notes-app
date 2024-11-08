import { BASE_URL_USERS } from "../../../constants";
import { CreateUserT } from "../../../entities/entity";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const registerUserService = async (data: CreateUserT): Promise<void> => {
  try {
    const response = await postWithoutAuth(`${BASE_URL_USERS}`, data);
    console.log(response);
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
