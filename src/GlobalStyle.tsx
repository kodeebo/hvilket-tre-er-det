import React from "react";

import { createGlobalStyle } from "styled-components";

export const colors = {
  lightBrown: "#cdc08c",
  green: "#9c964a",
  yellow: "#fad77b",
};

const Global = createGlobalStyle`
  body {
    background: whitesmoke;
    height: 100%;
    color: ${colors.green};
    font-family: Montserrat;
  }
`;

export const GlobalStyle = () => {
  return <Global />;
};
