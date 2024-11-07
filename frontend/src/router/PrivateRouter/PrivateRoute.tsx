import React, { ReactNode } from "react";
import { Redirect, Route } from "wouter";

interface Props {
  path: string;
  children: ReactNode;
  token: string;
  id: number;
}

export const PrivateRoute: React.FC<Props> = ({
  path,
  children,
  token,
  id,
}) => {
  return (
    <Route path={path}>
      {token !== "" && id !== 0 ? children : <Redirect to="/" />}
    </Route>
  );
};
