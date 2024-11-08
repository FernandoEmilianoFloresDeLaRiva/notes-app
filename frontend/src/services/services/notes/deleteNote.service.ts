import { BASE_URL_NOTES } from "../../../constants";
import { generateAlertError, generateAlertSuccess } from "../../../utils";
import { deleteWithAuth } from "../../api/deleteWithAuth";

export const deleteNoteByIdService = async (
  id: number,
  token: string
): Promise<void> => {
  try {
    await deleteWithAuth(`${BASE_URL_NOTES}/${id}`, token);
    generateAlertSuccess("Your note has been successfully deleted");
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    generateAlertError("An error occurred while deleting your note");
    throw new Error(err);
  }
};
