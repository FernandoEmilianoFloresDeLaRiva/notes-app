import { BASE_URL_NOTES } from "../../../constants";
import { deleteWithAuth } from "../../api/deleteWithAuth";

export const deleteNoteByIdService = async (
  id: number,
  token: string
): Promise<void> => {
  try {
    await deleteWithAuth(`${BASE_URL_NOTES}/${id}`, token);
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err);
  }
};
