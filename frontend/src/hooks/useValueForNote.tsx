import { UseFormSetValue } from "react-hook-form";
import { CreateNoteT } from "../entities/entity";
import { useContext, useEffect } from "react";
import { EditNoteContext } from "../pages/Home/Context/EditNoteContext";
import { findOneByIdService } from "../services/services/notes/findOneById.service";
import { CreateNoteResponse } from "../entities/dtos";

export const useValueForNote = (
  token: string,
  setValue: UseFormSetValue<CreateNoteT>,
  setSelectedCategories : any
) => {
  const { editNoteState } = useContext(EditNoteContext);
  const { idNote } = editNoteState;
  useEffect(() => {
    if (idNote === 0) return;
    const fetchTerrarium = async () => {
      try {
        const res: CreateNoteResponse = await findOneByIdService(idNote, token);
        const { title, description } = res;
        setValue("title", title);
        setValue("description", description);
        const categoryIds = res?.id_category.map(
          (category) => category.idCategory
        );
        setSelectedCategories(categoryIds);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTerrarium();
  }, [idNote]);
};
