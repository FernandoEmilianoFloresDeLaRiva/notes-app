import { Dispatch, SetStateAction, createContext } from "react";
import { UpdateNoteContextI } from "../../../../entities/entity";
import { INITIAL_STATE_EDIT_NOTE } from "./EditNote_InitialState";

interface EditTerrariumType {
  editNoteState: UpdateNoteContextI;
  changeNoteState: Dispatch<SetStateAction<UpdateNoteContextI>>;
}

export const EditNoteContext = createContext<EditTerrariumType>({
  editNoteState: INITIAL_STATE_EDIT_NOTE,
  changeNoteState: () => {},
});
