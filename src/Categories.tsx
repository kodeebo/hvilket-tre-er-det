import React from "react";
import { Image } from "./Image";
import styled from "styled-components";
import { Structure } from "./Main";
import trees from "./trees.json";

import leaf from "../assets/leaf.png";
import multiple from "../assets/multiple.png";
import needle from "../assets/needle.png";
import sawtooth from "../assets/sawtooth.png";
import smooth from "../assets/simple.png";
import simple from "../assets/simple.png";
import pointy from "../assets/pointy.png";

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
      {currentLevel.categories.map(({ header, id }) => (
        <Image
          key={id}
          to={(location) => `${location.pathname.length > 1 ? location.pathname : ""}/${id}`}
          displayName={header}
          selected={selectedImage === header}
          src={images[id]}
        />
      ))}
    </StyledWrapper>
  );
};

export default Categories;
