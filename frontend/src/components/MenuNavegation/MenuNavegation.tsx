import { useLocation } from "wouter";
import { useAppDispatch } from "../../entities/entity/reduxDispatch.entity";
import { logout } from "../../redux/Auth/auth.slice";
import { ItemNavegation } from "../ItemNavegation/ItemNavegation";
import styles from "./MenuNavegation.module.css";
import { useContext } from "react";
import { DashboardContext } from "../../pages/NotesList/Context/DashboardContext/DashboardContext";
import { DASHBOARD_NAMES } from "../../constants";

export const MenuNavegation = () => {
  const { dashboardName, setDashboardName } = useContext(DashboardContext);
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_location, setLocation] = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    setLocation("/");
  };
  return (
    <nav className={styles.navContainer}>
      <ul>
        <ItemNavegation
          itemText="See all"
          selectedItem={dashboardName}
          nameSelected={DASHBOARD_NAMES.SEE_ALL}
          handleClick={() => {
            setDashboardName(DASHBOARD_NAMES.SEE_ALL);
          }}
        >
          <i className="bi bi-journal"></i>
        </ItemNavegation>
        <ItemNavegation
          itemText="Write note"
          selectedItem={dashboardName}
          nameSelected={DASHBOARD_NAMES.WRITE_NOTE}
          handleClick={() => {
            setDashboardName(DASHBOARD_NAMES.WRITE_NOTE);
          }}
        >
          <i className="bi bi-plus-circle"></i>
        </ItemNavegation>
        <ItemNavegation
          itemText="Archives"
          selectedItem={dashboardName}
          nameSelected={DASHBOARD_NAMES.SEE_ARCHIVES}
          handleClick={() => {
            setDashboardName(DASHBOARD_NAMES.SEE_ARCHIVES);
          }}
        >
          <i className="bi bi-archive-fill"></i>
        </ItemNavegation>
        <ItemNavegation itemText="Sign out" handleClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
        </ItemNavegation>
      </ul>
    </nav>
  );
};
