import { ReactNode, useState } from "react";
import { UpdateNoteContextI } from "../../../../entities/entity";
import { EditNoteContext } from "./EditNoteContext";
import { INITIAL_STATE_EDIT_NOTE } from "./EditNote_InitialState";

interface Props {
  children: ReactNode;
}

export const EditNoteProvider: React.FC<Props> = ({ children }) => {
  const [editNoteState, changeNoteState] = useState<UpdateNoteContextI>(
    INITIAL_STATE_EDIT_NOTE
  );
  return (
    <EditNoteContext.Provider value={{ editNoteState, changeNoteState }}>
      {children}
    </EditNoteContext.Provider>
  );
};
