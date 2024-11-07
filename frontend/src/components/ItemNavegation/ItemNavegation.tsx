import { ReactNode } from "react";
import styles from "./ItemNavegation.module.css";

interface Props {
  children: ReactNode;
  itemText: string;
}

export const ItemNavegation: React.FC<Props> = ({ children, itemText }) => {
  return (
    <li className={styles.itemContainer}>
      <span className={styles.contentContainer}>
        {children}
        <span>{itemText}</span>
      </span>
    </li>
  );
};
