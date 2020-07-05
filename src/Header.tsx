import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import structure from "./structure";
import icon from "../assets/treeIcon128.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
`;

const Icon = styled.img`
  height: 128px;
  width: 128px;
`;

const Text = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
`;

const Dummy = styled.div`
  width: 128px;
`;

const Breadcrumbs = styled.div`
  margin: 10px;
  font-size: 20px;
`;

const Breadcrumb = styled.span``;

const Header = ({ children }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  const headers = paths.map((path) => structure[`/${path}`]?.header);

  // TODO: how to show double nested headers when id always are simple?
  return (
    <Wrapper>
      <Link to="/">
        <Icon src={icon} />
      </Link>
      <Text>Norske Trær</Text>
      <Breadcrumbs>
        {headers.map((header) => header && <Breadcrumb>{`${header} ${String.fromCharCode(0x203a)} `}</Breadcrumb>)}
      </Breadcrumbs>
    </Wrapper>
  );
};

export default Header;
