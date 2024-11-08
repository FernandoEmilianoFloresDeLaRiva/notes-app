import { useFunctionsNotes } from "../../hooks/useFunctionsNote";
import styles from "./Dropdown.module.css";

interface Props {
  idNote: number;
  archive: number;
}

export const DropdownBtn: React.FC<Props> = ({ idNote, archive }) => {
  const { deleteNote, archivedNote, openModal } = useFunctionsNotes(
    idNote,
    archive
  );
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        <i className="bi bi-three-dots-vertical"></i>
      </button>
      <div className={styles.dropdownContent}>
        <button onClick={archivedNote}>
          {archive == 1 ? "Unarchive" : "Archive"}
        </button>
        <button onClick={deleteNote}>Delete</button>
        <button onClick={openModal}>Edit</button>
      </div>
    </div>
  );
};
