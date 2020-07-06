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

const Header = ({ breadcrumb }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  const headers = paths.map((path) => structure[`/${path}`]?.header);

  return (
    <Wrapper>
      <Link to="/">
        <Icon src={icon} />
      </Link>
      <Text>Norske Trær</Text>
      <Breadcrumbs>
        {breadcrumb.map(({ header, id }, i) => (
          <>
            <Link key={id} to={(location) => `${location.pathname.split(id)[0]}${id}`}>{`${header}`}</Link>
            {` ${i + 1 !== breadcrumb.length ? String.fromCharCode(0x203a) : ""} `}
          </>
        ))}
        {location.search && `${String.fromCharCode(0x203a)} ${location.search.replace("?", "")}`}
      </Breadcrumbs>
    </Wrapper>
  );
};

export default Header;
