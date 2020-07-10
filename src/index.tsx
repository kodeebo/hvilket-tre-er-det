import "regenerator-runtime/runtime";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import Main from "./Main";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
      <GlobalStyle />
      <Route path="/" component={Main} />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("app"));
