import { useSelector } from "react-redux";
import { RootState } from "../entities/entity";
import {
  deleteNoteByIdService,
  updateNoteByIdService,
} from "../services/services/notes";

export const useFunctionsNotes = (id: number, archive: number) => {
  const { token } = useSelector((state: RootState) => state.auth);

  const deleteNote = async () => {
    try {
      await deleteNoteByIdService(id, token);
      window.location.reload();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const archivedNote = async () => {
    try {
      const isArchive = archive === 1 ? 0 : 1;
      await updateNoteByIdService(id, token, { archive: isArchive });
      window.location.reload();
      // cambiar achivado al reves y mandarlo como body
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return { deleteNote, archivedNote };
};
