import { useSelector } from "react-redux";
import { RootState } from "../entities/entity";
import {
  deleteNoteByIdService,
  updateNoteByIdService,
} from "../services/services/notes";
import { useContext } from "react";
import { EditNoteContext } from "../pages/Home/Context/EditNoteContext";
import { findOneByIdService } from "../services/services/notes/findOneById.service";
import { CreateNoteResponse } from "../entities/dtos";

export const useFunctionsNotes = (id: number, archive: number) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { changeNoteState } = useContext(EditNoteContext);

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
      const res: CreateNoteResponse = await findOneByIdService(id, token);
      const categoryIds = res?.id_category.map(
        (category) => category.idCategory
      );
      const isArchive = archive === 1 ? 0 : 1;
      await updateNoteByIdService(id, token, { archive: isArchive }, categoryIds);
      window.location.reload();
      // cambiar achivado al reves y mandarlo como body
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const openModal = () => {
    changeNoteState({
      isOpen: true,
      idNote: id,
    });
  };

  return { deleteNote, archivedNote, openModal };
};
