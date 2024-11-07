import { useList } from "../../hooks/useList";
import { HomeLayout } from "../../layout/HomeLayout/HomeLayout";
import { Notes } from "./components/Notes";
import styles from "./NotesList.module.css";

export const NotesList = () => {
  const { isLoading, notes } = useList();

  return (
    <HomeLayout>
      <div className={styles.notesContainer}>
        {notes?.map((n) => {
          return (
            <Notes
              archive={n.archive}
              title={n.title}
              description={n.description}
              idNote={n.id}
              createdAt={n.created_at}
            />
          );
        })}
      </div>
    </HomeLayout>
  );
};
