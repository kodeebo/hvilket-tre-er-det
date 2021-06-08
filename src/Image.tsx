import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MovingImage from "./MovingImage";

const ImageWrapper = styled.div`
  margin: 20px;
  opacity: 0;
  transition: 0.8s;
  width: 400px;

  ${(props: { show: boolean }) => props.show && "opacity: 1;"}

  @media (max-width: 600px) {
    max-width: 45%;
  }
`;

const ImageHeader = styled.div`
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
`;

const StyledLink = styled(Link)`
  &:focus img,
  :active img {
    transform: scale(1.03);
  }
`;

interface Props {
  displayName: string;
  to: string;
  selected?: boolean;
  src: string;
}

export const Image = ({ displayName, to, selected, src }) => {
  const [show, fadeIn] = useState(false);

  return (
    <ImageWrapper show={show}>
      <ImageHeader>{displayName}</ImageHeader>
      <StyledLink to={to} onClick={() => window.scrollTo(0, 0)}>
        <MovingImage selected={selected} onLoad={() => fadeIn(true)} src={src} alt={displayName} />
      </StyledLink>
    </ImageWrapper>
  );
};
