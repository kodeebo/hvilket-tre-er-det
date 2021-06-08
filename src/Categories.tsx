import React, { useEffect } from "react";
import { Image } from "./Image";
import styled from "styled-components";
import { Structure } from "./Main";

import leaf from "url:../assets/leaf.webp";
import multiple from "url:../assets/multiple.webp";
import needle from "url:../assets/needle.webp";
import sawtooth from "url:../assets/sawtooth.webp";
import smooth from "url:../assets/simple.webp";
import simple from "url:../assets/simple.webp";
import pointy from "url:../assets/pointy.webp";

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
          to={(location: Location) => `${location.pathname.length > 1 ? location.pathname : ""}/${id}`}
          displayName={header}
          selected={selectedImage === header}
          src={images[id]}
        />
      ))}
    </StyledWrapper>
  );
};

export default Categories;
