import { ItemNavegation } from "../ItemNavegation/ItemNavegation";
import styles from "./MenuNavegation.module.css";

export const MenuNavegation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <ItemNavegation itemText="See all">
          <i className="bi bi-journal"></i>
        </ItemNavegation>
        <ItemNavegation itemText="Write note">
          <i className="bi bi-plus-circle"></i>
        </ItemNavegation>
        <ItemNavegation itemText="Archives">
          <i className="bi bi-archive-fill"></i>
        </ItemNavegation>
        <ItemNavegation itemText="Sign out">
          <i className="bi bi-box-arrow-right"></i>
        </ItemNavegation>
      </ul>
    </nav>
  );
};
