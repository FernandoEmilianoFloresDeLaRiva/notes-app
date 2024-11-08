import { BASE_URL_NOTES } from "../../../constants";
import { CreateNoteDTO } from "../../../entities/dtos";
import { CreateNoteT } from "../../../entities/entity";
import { generateAlertError, generateAlertSuccess } from "../../../utils";
import { postWithAuth } from "../../api/postWithAuth";

export const postNoteService = async (
  id: number,
  data: CreateNoteT,
  token: string
): Promise<unknown> => {
  try {
    const reqBody = new CreateNoteDTO(data, id);
    const response = await postWithAuth(BASE_URL_NOTES, token, reqBody);
    generateAlertSuccess("Your note has been successfully created");
    window.location.reload();
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    generateAlertError("An error occurred while creating your note");
    throw new Error(err);
  }
};
