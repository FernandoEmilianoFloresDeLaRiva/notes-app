import { ReactNode, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import { DASHBOARD_NAMES } from "../../../../constants/DASHBOARD_NAMES";

interface Props {
  children: ReactNode;
}

export const DashboardProvider: React.FC<Props> = ({ children }) => {
  const [dashboardName, setDashboardName] = useState<string>(
    DASHBOARD_NAMES.SEE_ALL
  );
  return (
    <DashboardContext.Provider value={{ dashboardName, setDashboardName }}>
      {children}
    </DashboardContext.Provider>
  );
};
