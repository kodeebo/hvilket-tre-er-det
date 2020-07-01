import React from "react";
import styled, { keyframes } from "styled-components";

import alm from "../assets/Alm.jpg";
import ask from "../assets/Ask.jpg";
import barlind from "../assets/Barlind.jpg";
import lind from "../assets/Lind.jpg";
import spisslønn from "../assets/Spisslønn.jpg";

const images = { alm, ask, barlind, lind, spisslønn };

const scale = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.06, 1.06);
  }
`;

const StyledButton = styled.div`
  cursor: pointer;
  margin: 20px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.06, 1.06);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  box-shadow: 5px 5px 5px 0px rgba(255, 255, 255, 0.25);
`;

export const Image = ({ image, onClick }) => {
  return (
    <StyledButton
      role="button"
      onClick={(e) => {
        e.preventDefault();
        onClick(image);
      }}
    >
      <StyledImage src={images[image]} />
    </StyledButton>
  );
};
