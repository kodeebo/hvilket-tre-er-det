import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styledComponentsCjs from "styled-components";

import ListOfTrees from "./ListOfTrees";
import Categories from "./Categories";
import InfoPage from "./InfoPage";

const Wrapper = styledComponentsCjs.main`
  margin-bottom: auto;
`;

const Content = ({ branch, forest }) => {
  const location = useLocation();
  const currentLevel = branch.slice(-1).pop();

  if (location.search) {
    const treeId = location.search.replace("?", "");
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
        <ListOfTrees
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
