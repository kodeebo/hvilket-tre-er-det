import React from "react";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    background-color: black;
    height: 100%;
    color: white;
  }
`;

export const GlobalStyle = () => {
  return <Global />;
};
