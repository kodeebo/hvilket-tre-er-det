import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { state } from "./structure";

type Props = {
  children: React.ReactChildren;
};

export const Routes = ({ children }: Props) => {
  const location = useLocation();
  return (
    <Switch>
      {Object.keys(state).map((page) => (
        <Route path={location.pathname}>{children}</Route>
      ))}
    </Switch>
  );
};
