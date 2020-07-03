import React from "react";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(2,103,9,1) 70%, rgba(0,204,255,1) 100%);
    height: 100%;
    color: white;
    font-family: Montserrat;
  }
`;

export const GlobalStyle = () => {
  return <Global />;
};
