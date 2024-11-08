import { BASE_URL_NOTES } from "../../../constants";
import { CreateNoteResponse } from "../../../entities/dtos/CreateNoteResponse.dto";
import { getWithAuth } from "../../api/getWithAuth";

export const findOneByIdService = async (
  id: number,
  token: string
): Promise<CreateNoteResponse> => {
  try {
    const res = await getWithAuth(`${BASE_URL_NOTES}/note/${id}`, token);
    const transformedResponse = new CreateNoteResponse(res);
    return transformedResponse;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
