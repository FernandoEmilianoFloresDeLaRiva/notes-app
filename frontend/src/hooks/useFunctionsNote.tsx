import { useSelector } from "react-redux";
import { RootState } from "../entities/entity";
import { deleteNoteByIdService } from "../services/services/notes";

export const useFunctionsNotes = (id: number, archive : number) => {
  const { token } = useSelector((state: RootState) => state.auth);

  const deleteNote = async () => {
    try {
      await deleteNoteByIdService(id, token);
      window.location.reload();
    } catch (error : any) {
      throw new Error(error);
    }
  };

  const archivedNote = async () => {
    try {
        // cambiar achivado al reves y mandarlo como body
    } catch (error) {
        throw new Error(error);
    }
  }
};
