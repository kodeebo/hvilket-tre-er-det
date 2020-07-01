import React from "react";
import { Image } from "./Image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface Props {
  images: Array<string>;
  onClick: (string) => void;
}

export const ImageArray = ({ images, onClick }: Props) => {
  return (
    <StyledWrapper>
      {images.map((image) => (
        <Image image={image} onClick={onClick} />
      ))}
    </StyledWrapper>
  );
};
