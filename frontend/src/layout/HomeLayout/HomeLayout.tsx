import { ReactNode } from "react";
import { MenuNavegation } from "../../components/MenuNavegation/MenuNavegation";
import styles from "./HomeLayout.module.css";

interface Props {
  children: ReactNode;
}

export const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.bodySection}>{children}</section>
      <MenuNavegation />
    </main>
  );
};
