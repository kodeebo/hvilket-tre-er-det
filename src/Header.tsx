import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import structure from "./structure";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
  color: black;
  padding: 30px;
`;

const Header = ({ currentLevel = {} }) => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  console.log(paths);
  const headers = paths.map((path) => structure[`/${path}`]?.header);
  // TODO: how to show double nested headers when id always are simple?
  return <Wrapper>{currentLevel.header}</Wrapper>;
};

export default Header;
