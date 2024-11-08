import { BASE_URL_CATEGORIES } from "../../../constants";
import { CreateCategoryDTO } from "../../../entities/dtos";
import { generateAlertError, generateAlertSuccess } from "../../../utils";
import { postWithAuth } from "../../api/postWithAuth";

export const createCategoryService = async (
  token: string,
  data: string
): Promise<unknown> => {
  try {
    const reqCategory = new CreateCategoryDTO(data);
    const res = await postWithAuth(
      `${BASE_URL_CATEGORIES}`,
      token,
      reqCategory
    );
    generateAlertSuccess("Your category has been successfully created");
    console.log(res);
    window.location.reload();
    return res;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    generateAlertError("An error occurred while creating your category");
    throw new Error(err);
  }
};
