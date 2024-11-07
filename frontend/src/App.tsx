import { useEffect } from "react";
import "./App.css";
import { HomeLayout } from "./layout/HomeLayout/HomeLayout";
import { NotesList } from "./pages/NotesList/NotesList";
import { Login } from "./pages/Login/Login";

function App() {
  useEffect(() => {
    const url = import.meta.env.VITE_API_URL;
    console.log(url);
  }, []);
  return (
    <Login />
    // <HomeLayout>
    //   <NotesList />
    // </HomeLayout>
  );
}

export default App;
