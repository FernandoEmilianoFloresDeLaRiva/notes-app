import { BASE_URL_NOTES } from "../../../constants";
import { UpdateNote } from "../../../entities/entity";
import { updateWithAuth } from "../../api";

export const updateNoteByIdService = async (
  id: number,
  token: string,
  body: UpdateNote
): Promise<void> => {
  try {
    await updateWithAuth(`${BASE_URL_NOTES}/${id}`, token, body);
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
