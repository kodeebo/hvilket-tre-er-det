import React from "react";

import { createGlobalStyle } from "styled-components";

export const colors = {
  lightBrown: "#c27d38",
  blue: "#798e87",
  yellow: "#798e87",
  black: "#29211f",
};

const Global = createGlobalStyle`
  body {
    background: whitesmoke;
    height: 100%;
    color: ${colors.black};
    font-family: Montserrat;
  }
`;

export const GlobalStyle = () => {
  return <Global />;
};
