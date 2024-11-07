import { BASE_URL_NOTES } from "../../../constants";
import { CreateNoteResponse } from "../../../entities/dtos/CreateNote.dto";
import { getWithAuth } from "../../api/getWithAuth";

export const getNoteByUserIdAndArchiveService = async (
  id: number,
  token: string,
  status: number
): Promise<CreateNoteResponse[]> => {
  try {
    const res = await getWithAuth(
      `${BASE_URL_NOTES}/${id}?archive=${status}`,
      token
    );
    const transformedResponse = res.map((note: CreateNoteResponse) => {
      return new CreateNoteResponse(note);
    });
    return transformedResponse;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
