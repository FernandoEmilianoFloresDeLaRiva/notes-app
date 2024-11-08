import { useContext } from "react";
import { HomeLayout } from "../../layout/HomeLayout/HomeLayout";
import { NoteList } from "./components/NoteList/NoteList";
import { DashboardContext } from "./Context/DashboardContext/DashboardContext";
import { FormNote } from "./components/FormNote/FormNote";
import { postNoteService } from "../../services/services/notes/createNote.service";
import { useSelector } from "react-redux";
import { RootState } from "../../entities/entity";

export const Home = () => {
  const { dashboardName } = useContext(DashboardContext);
  const { user, token } = useSelector((root: RootState) => root.auth);

  const viewComponents = {
    see_all: <NoteList />,
    write_note: (
      <FormNote
        token={token}
        titleForm="Let's created a new note!"
        handleAction={async (data) => {
          try {
            const res = await postNoteService(user.id, data, token);
            console.log(res);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            throw new Error(error);
          }
        }}
      />
    ),
    see_archives: <NoteList />,
  };
  return (
    <HomeLayout>
      {viewComponents[dashboardName as keyof typeof viewComponents]}
    </HomeLayout>
  );
};
