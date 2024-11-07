import { Dispatch, SetStateAction, createContext } from "react";
import { DASHBOARD_NAMES } from "../../../../constants/DASHBOARD_NAMES";

interface DashboardContextType {
  dashboardName: string;
  setDashboardName: Dispatch<SetStateAction<string>>;
}

export const DashboardContext = createContext<DashboardContextType>({
  dashboardName: DASHBOARD_NAMES.SEE_ALL,
  setDashboardName: () => {},
});
