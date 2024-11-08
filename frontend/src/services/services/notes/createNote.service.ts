import { BASE_URL_NOTES } from "../../../constants";
import { CreateNoteDTO } from "../../../entities/dtos";
import { CreateNoteT } from "../../../entities/entity";
import { postWithAuth } from "../../api/postWithAuth";

export const postNoteService = async (
  id: number,
  data: CreateNoteT,
  token: string
): Promise<unknown> => {
  try {
    const reqBody = new CreateNoteDTO(data, id);
    const response = await postWithAuth(BASE_URL_NOTES, token, reqBody);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
