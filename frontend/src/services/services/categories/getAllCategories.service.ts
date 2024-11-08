import { BASE_URL_CATEGORIES } from "../../../constants";
import { CreateCategoryResponse } from "../../../entities/dtos/CreateCategoryResponse.dto";
import { getWithAuth } from "../../api/getWithAuth";

export const getAllCategoriesService = async (
  token: string
): Promise<CreateCategoryResponse[]> => {
  try {
    const res = await getWithAuth(`${BASE_URL_CATEGORIES}`, token);
    const transformedResponse = res.map((c: unknown) => {
      return new CreateCategoryResponse(c);
    });
    return transformedResponse;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
