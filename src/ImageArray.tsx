import React from "react";
import { Image } from "./Image";
import styled from "styled-components";
import { Structure } from "./Main";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface Props {
  currentLevel?: Structure;
  selectedImage: string;
  forest: Object;
}

const getRandomImage = (images) => images.length && images[Math.floor(images.length * Math.random())];

export const ImageArray = ({ currentLevel, forest, selectedImage }: Props) => {
  if (!forest) {
    return <div>"No trees found"</div>;
  }

  const trees = Object.keys(forest)
    .filter((tree) => forest[tree].categories.some((cat) => cat === currentLevel.id))
    .map((treeName) => forest[treeName]);

  return (
    <StyledWrapper>
      {trees.map(({ name, id, images }) => (
        <Image
          id={id}
          displayName={name}
          selected={selectedImage === name}
          src={getRandomImage(images).standard_size_url || getRandomImage(images).full_size_url}
        />
      ))}
    </StyledWrapper>
  );
};
