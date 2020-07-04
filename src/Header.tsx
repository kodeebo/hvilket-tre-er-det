import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import structure from "./structure";
import icon from "../assets/treeIcon128.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
  padding: 30px;
`;

const Icon = styled.img`
  height: 128px;
  width: 128px;
`;

const Dummy = styled.div`
  width: 128px;
`;

const Header = ({ children }) => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  console.log(paths);
  const headers = paths.map((path) => structure[`/${path}`]?.header);
  // TODO: how to show double nested headers when id always are simple?
  return (
    <Wrapper>
      <Link to="/">
        <Icon src={icon} />
      </Link>
      {children}
      <Dummy />
    </Wrapper>
  );
};

export default Header;
