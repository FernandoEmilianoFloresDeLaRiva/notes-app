import { ReactNode } from "react";
import styles from "./ItemNavegation.module.css";

interface Props {
  children: ReactNode;
  itemText: string;
  nameSelected?: string;
  selectedItem?: string;
  handleClick: () => void;
}

export const ItemNavegation: React.FC<Props> = ({
  children,
  itemText,
  nameSelected = "",
  selectedItem,
  handleClick,
}) => {
  return (
    <li className={styles.itemContainer}>
      <span
        className={`${styles.contentContainer} ${
          selectedItem === nameSelected ? styles.selected : ""
        }`}
        onClick={handleClick}
      >
        {children}
        <span>{itemText}</span>
      </span>
    </li>
  );
};
