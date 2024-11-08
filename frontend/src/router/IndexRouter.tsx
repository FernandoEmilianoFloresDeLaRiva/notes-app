import { Redirect, Route, Switch } from "wouter";
import { PrivateRoute } from "./PrivateRouter/PrivateRoute";
import { Login } from "../pages/Login/Login";
import { useSelector } from "react-redux";
import { RootState } from "../entities/entity";
import { Home } from "../pages/Home/Home";
import { DashboardProvider } from "../pages/Home/Context/DashboardContext/DashboardProvider";
import { EditNoteProvider } from "../pages/Home/Context/EditNoteContext";

export const IndexRouter = () => {
  const { token, user } = useSelector((state: RootState) => state.auth);
  return (
    <Switch>
      {token === "" && user.id === 0 && <Route path="/" component={Login} />}
      <EditNoteProvider>
        <DashboardProvider>
          <PrivateRoute path="/" token={token} id={user.id}>
            <Home />
          </PrivateRoute>
          <Route path="*">
            <Redirect to="/" />{" "}
          </Route>
        </DashboardProvider>
      </EditNoteProvider>
    </Switch>
  );
};
