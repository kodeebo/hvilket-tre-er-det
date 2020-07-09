import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

const Footer = () => {
  return <Wrapper>Made by: Torgeir Haugen</Wrapper>;
};

export default Footer;
