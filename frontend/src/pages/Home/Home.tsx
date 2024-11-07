import { useContext } from "react";
import { HomeLayout } from "../../layout/HomeLayout/HomeLayout";
import { NoteList } from "./components/NoteList/NoteList";
import styles from "./Home.module.css";
import { DashboardContext } from "./Context/DashboardContext/DashboardContext";

export const Home = () => {
  const { dashboardName } = useContext(DashboardContext);
  const viewComponents = {
    see_all: <NoteList />,
    write_note: null,
    see_archives: <NoteList />,
  };
  return (
    <HomeLayout>
      <div className={styles.notesContainer}>
        {viewComponents[dashboardName as keyof typeof viewComponents]}
      </div>
    </HomeLayout>
  );
};
