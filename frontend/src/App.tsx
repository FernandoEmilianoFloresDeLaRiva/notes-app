import { useEffect } from "react";
import "./App.css";
import { HomeLayout } from "./layout/HomeLayout/HomeLayout";
import { NotesList } from "./pages/NotesList/NotesList";

function App() {
  useEffect(() => {
    const url = import.meta.env.VITE_API_URL;
    console.log(url);
  }, []);
  return (
    <HomeLayout>
      <NotesList />
    </HomeLayout>
  );
}

export default App;
