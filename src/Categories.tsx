import React from "react";
import { Image } from "./Image";
import styled from "styled-components";
import { Structure } from "./Main";
import trees from "./trees.json";

import leaf from "../assets/leaf.jpg";
import multiple from "../assets/multiple.jpg";
import needle from "../assets/needle.jpg";
import sawtooth from "../assets/sawtooth.jpg";
import smooth from "../assets/smooth.jpg";
import simple from "../assets/smooth.jpg";
import pointy from "../assets/pointy.jpg";

const images = { leaf, multiple, simple, needle, sawtooth, smooth, pointy };

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface Props {
  currentLevel?: Structure;
  selectedImage: string;
}

const Categories = ({ currentLevel, selectedImage }: Props) => {
  if (!currentLevel) {
    return <div>"Invalid address"</div>;
  }

  return (
    <StyledWrapper>
      {currentLevel.categories.map(({ name, id }) => (
        <Image key={id} id={id} displayName={name} selected={selectedImage === name} src={images[id]} />
      ))}
    </StyledWrapper>
  );
};

export default Categories;
