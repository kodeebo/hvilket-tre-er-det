import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styledComponentsCjs from "styled-components";

import { ImageArray } from "./ImageArray";
import Categories from "./Categories";
import InfoPage from "./InfoPage";

const Wrapper = styledComponentsCjs.div`
    margin: 5px;
`;

const Content = ({ currentLevel, forest }) => {
  const location = useLocation();

  if (!currentLevel.id) {
    const treeId = location.pathname.split("/").pop();
    console.log(treeId);
    const foundTree = Object.keys(forest).find((tree) => forest[tree].id === treeId);
    console.log(foundTree);
    return (
      <Wrapper>
        <InfoPage tree={forest[foundTree]} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {currentLevel.bottom ? (
        <ImageArray
          currentLevel={currentLevel}
          forest={forest}
          selectedImage={location.pathname !== "/" && location.pathname}
        />
      ) : (
        <Categories currentLevel={currentLevel} selectedImage={location.pathname !== "/" && location.pathname} />
      )}
    </Wrapper>
  );
};

export default Content;
