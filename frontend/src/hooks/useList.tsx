import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../pages/Home/Context/DashboardContext/DashboardContext";
import { RootState } from "../entities/entity";
import { useSelector } from "react-redux";
import { DASHBOARD_NAMES } from "../constants";
import { CreateNoteResponse } from "../entities/dtos/CreateNote.dto";
import { getNoteByUserIdAndArchiveService } from "../services/services/notes/getNotes.service";

export const useList = () => {
  const [notes, setNotes] = useState<CreateNoteResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { dashboardName } = useContext(DashboardContext);
  const { token, user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (
      !(
        dashboardName === DASHBOARD_NAMES.SEE_ALL ||
        dashboardName === DASHBOARD_NAMES.SEE_ARCHIVES
      )
    )
      return;
    setIsLoading(true);
    const status = dashboardName === DASHBOARD_NAMES.SEE_ALL ? 0 : 1;
    getNoteByUserIdAndArchiveService(user.id, token, status)
      .then((res) => {
        setNotes(res);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dashboardName]);
  return { isLoading, notes };
};
