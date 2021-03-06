import React, { useEffect } from "react";
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

const getImage = (images, preferred_image) => (preferred_image ? images[preferred_image] : getRandomImage(images));

const ListOfTrees = ({ currentLevel, forest, selectedImage }: Props) => {
  console.log({ forest });
  if (!forest) {
    return <div>"No trees found"</div>;
  }

  useEffect(() => {
    return () => {
      console.log("unmounting categories");
    };
  }, []);

  const trees = Object.keys(forest)
    .filter((tree) => forest[tree].categories.some((cat) => cat === currentLevel.id))
    .map((treeName) => forest[treeName]);

  return (
    <StyledWrapper>
      {trees.map(({ name, id, images, preferred_image }) => (
        <Image
          key={id}
          to={(location) => ({ ...location, search: `?${id}` })}
          displayName={name}
          selected={selectedImage === name}
          src={getImage(images, preferred_image).standard_size_url || getImage(images, preferred_image).full_size_url}
        />
      ))}
    </StyledWrapper>
  );
};

export default ListOfTrees;
