import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import structure from "./state/structure";
import icon from "../assets/treeIcon128.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Wrapper = styled.header`
  display: flex;
  position: relative;
  align-items: flex-end;
  margin: 10px;
`;

const Icon = styled.img`
  height: 128px;
  width: 128px;
`;

const Text = styled.div`
  margin: 5px 15px;
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
`;

const Dummy = styled.div`
  width: 128px;
`;

const Breadcrumbs = styled.div`
  min-height: 30px;
  margin: 10px 15px 0;
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
      <div>
        <Text>Norske Trær</Text>
        <Breadcrumbs>
          {breadcrumb.map(({ header, id }) => (
            <Fragment key={id}>
              {` ${String.fromCharCode(0x203a)} `}
              <Link key={id} to={(location) => `${location.pathname.split(id)[0]}${id}`}>
                {header}
              </Link>
            </Fragment>
          ))}
          {location.search ? ` ${String.fromCharCode(0x203a)} ${location.search.replace("?", "")}` : " "}
        </Breadcrumbs>
      </div>
    </Wrapper>
  );
};

export default Header;
