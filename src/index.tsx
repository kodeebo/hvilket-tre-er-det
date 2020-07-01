import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { ImageArray } from "./ImageArray";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin: 30px;
`;

const state = {
  frontpage: ["alm", "ask", "barlind"],
  alm: ["lind", "spisslønn"],
};

const App = () => {
  const [currentPage, setPage] = React.useState(state.frontpage);
  return (
    <>
      <GlobalStyle />
      <Header>Norske tresorter</Header>
      <ImageArray
        images={currentPage}
        onClick={(image) => setPage(state[image])}
      />
      <Wrapper></Wrapper>
    </>
  );
};

render(<App />, document.getElementById("app"));
