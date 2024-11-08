import { BASE_URL_NOTES } from "../../../constants";
import { UpdateNote } from "../../../entities/entity";
import { generateAlertError, generateAlertSuccess } from "../../../utils";
import { updateWithAuth } from "../../api";

export const updateNoteByIdService = async (
  id: number,
  token: string,
  body: UpdateNote,
  categories: number[]
): Promise<void> => {
  try {
    const reqBody = {
      title: body?.title,
      description: body?.description,
      active: body?.active,
      archive: body?.archive,
      idCategory: categories,
    };
    await updateWithAuth(`${BASE_URL_NOTES}/${id}`, token, reqBody);
    generateAlertSuccess("Your note has been successfully updated");
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    generateAlertError("An error occurred while updating your note");
    throw new Error(err);
  }
};
