import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { state } from "./structure";

export const Routes = ({ children }) => {
  const location = useLocation();
  console.log(location);
  return (
    <Switch>
      {Object.keys(state).map((page) => (
        <Route path={location.pathname}>{children}</Route>
      ))}
    </Switch>
  );
};
