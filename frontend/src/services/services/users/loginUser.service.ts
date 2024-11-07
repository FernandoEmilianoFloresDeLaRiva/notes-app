import { BASE_URL_USERS } from "../../../constants";
import { CreateLoginUserDTO } from "../../../entities/dtos";
import { ITokenResponse } from "../../../entities/entity";
import { postWithoutAuth } from "../../api/postWithoutAuth";

export const loginUserService = async (
  data: CreateLoginUserDTO
): Promise<ITokenResponse> => {
  try {
    const response = await postWithoutAuth(`${BASE_URL_USERS}/login`, data);
    console.log(response);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
