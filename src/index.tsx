import "regenerator-runtime/runtime";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import Main from "./Main";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Main />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("app"));
