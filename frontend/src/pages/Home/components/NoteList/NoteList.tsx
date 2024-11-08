import { useList } from "../../../../hooks/useList";
import { NoDataAvailable } from "../../../../components/NoDataAvailable/NoDataAvailable";
import { Notes } from "../Notes/Notes";
import styles from "./NoteList.module.css";
import { useContext } from "react";
import {
  EditNoteContext,
  INITIAL_STATE_EDIT_NOTE,
} from "../../Context/EditNoteContext";
import { ModalLayout } from "../../../../layout/ModalLayout/ModalLayout";
import { FormNote } from "../FormNote/FormNote";
import { updateNoteByIdService } from "../../../../services/services/notes";
import { useSelector } from "react-redux";
import { RootState } from "../../../../entities/entity";
import { Select } from "../../../../components/Select/Select";
import { CreateCategoryResponse } from "../../../../entities/dtos/CreateCategoryResponse.dto";
import { CreateCategoryButton } from "../../../../components/CreateCategoryButton/CreateCategoryButton";

interface Props {
  categories: CreateCategoryResponse[];
}

export const NoteList: React.FC<Props> = ({ categories }) => {
  const { editNoteState, changeNoteState } = useContext(EditNoteContext);
  const { notes, setCategory } = useList(editNoteState.isOpen);
  const { token } = useSelector((root: RootState) => root.auth);
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    changeNoteState(INITIAL_STATE_EDIT_NOTE);
  };
  return (
    <div className={styles.mainContainer}>
      {editNoteState.isOpen && (
        <ModalLayout handleClose={handleClose}>
          <FormNote
            categories={categories}
            token={token}
            titleForm="Let's improve this note"
            handleAction={async (data) => {
              try {
                const res = await updateNoteByIdService(
                  editNoteState.idNote,
                  token,
                  data,
                  data.categories,
                );
                changeNoteState(INITIAL_STATE_EDIT_NOTE);
                console.log(res);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (error: any) {
                throw new Error(error);
              }
            }}
          />
        </ModalLayout>
      )}
      <Select categories={categories} setCategory={setCategory} />
      <CreateCategoryButton />
      <div className={styles.notesContainer}>
        {notes?.length === 0 ? (
          <NoDataAvailable message="No notes to show" />
        ) : (
          notes?.map((n) => {
            return (
              <Notes
                key={n.id}
                archive={n.archive}
                title={n.title}
                description={n.description}
                idNote={n.id}
                createdAt={n.created_at}
                categoryName={n.id_category}
                categories={categories}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
