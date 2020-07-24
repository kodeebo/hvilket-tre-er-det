import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  padding: 35px 0;
  font-size: 0.8rem;

  @media (max-width: 600px) {
    padding: 15px 0;
  }
`;

const Footer = () => {
  return <Wrapper>{`\u00A9 Torgeir Haugen`}</Wrapper>;
};

export default Footer;
