import { useContext } from "react";
import { HomeLayout } from "../../layout/HomeLayout/HomeLayout";
import { NoteList } from "./components/NoteList/NoteList";
import { DashboardContext } from "./Context/DashboardContext/DashboardContext";
import { FormNote } from "./components/FormNote/FormNote";

export const Home = () => {
  const { dashboardName } = useContext(DashboardContext);
  const viewComponents = {
    see_all: <NoteList />,
    write_note: <FormNote />,
    see_archives: <NoteList />,
  };
  return (
    <HomeLayout>
      {viewComponents[dashboardName as keyof typeof viewComponents]}
    </HomeLayout>
  );
};
