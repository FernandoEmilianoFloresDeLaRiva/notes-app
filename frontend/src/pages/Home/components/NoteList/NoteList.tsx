import { useList } from "../../../../hooks/useList";
import { NoDataAvailable } from "../../../../components/NoDataAvailable/NoDataAvailable";
import { Notes } from "../Notes/Notes";
export const NoteList = () => {
  const { isLoading, notes } = useList();
  return (
    <>
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
            />
          );
        })
      )}
    </>
  );
};
