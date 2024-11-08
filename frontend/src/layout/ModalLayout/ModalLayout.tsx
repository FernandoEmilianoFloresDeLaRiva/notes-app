import { ReactNode } from "react";
import styles from "./ModalLayout.module.css";

interface Props {
  handleClose: (e: React.MouseEvent) => void;
  children: ReactNode;
}
export const ModalLayout: React.FC<Props> = ({ handleClose, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerButton}>
          <i className="bi bi-x-circle" onClick={handleClose}></i>
        </div>
        {children}
      </div>
    </div>
  );
};
