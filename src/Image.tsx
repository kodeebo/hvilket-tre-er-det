import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const scale = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.06, 1.06);
  }
`;

const ImageWrapper = styled.div`
  margin: 20px;
`;

const ImageHeader = styled.div`
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
`;

const StyledImage = styled.img`
  cursor: pointer;
  width: 350px;
  height: 260px;
  box-shadow: 5px 5px 5px 0px rgba(255, 255, 255, 0.25);
  transition: 0.2s;

  &:hover {
    transform: scale(1.06, 1.06);
  }

  ${(props) => (props.selected ? "transform: scale(1.06, 1.06);" : "opacity: 0.75;")}
`;

export const Image = ({ displayName, id, selected, src }) => {
  return (
    <ImageWrapper>
      <ImageHeader>{displayName}</ImageHeader>
      <Link to={(location) => `${location.pathname.length > 1 ? location.pathname : ""}/${id}`}>
        <StyledImage selected={selected} src={src} />
      </Link>
    </ImageWrapper>
  );
};
