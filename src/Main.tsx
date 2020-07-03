import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import structure from "./structure";
import allTrees from "./trees.json";
import Header from "./Header";
import Content from "./Content";

const Wrapper = styled.div`
  min-height: 100vh;
`;
export interface Structure {
  header: string;
  id: string;
  bottom: boolean;
  categories?: Array<{ name: string; id: string }>;
}

export const Main = () => {
  const location = useLocation();
  const [forest, buildForest] = useState({});

  const currentLevel = structure[location.pathname] || {};

  const fetchTrees = async () => {
    const treesOnThisLevel = allTrees.filter((tree) => tree.categories.some((cat) => cat === currentLevel.id));
    const result = await Promise.all(
      // TODO: filter out existing trees
      // TODO where should we get trees from json?
      treesOnThisLevel.map((tree) =>
        fetch(`https://snl.no/${tree.id}.json`, {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        })
      )
    );
    const resultJson = await Promise.all(result.map((res) => res.json()));
    const newTrees = treesOnThisLevel.reduce(
      (acc, { id, ...rest }, i) => ({ ...acc, [id]: { ...resultJson[i], id, ...rest } }),
      {}
    );
    console.log(newTrees);
    buildForest({
      ...forest,
      ...newTrees,
    });
  };

  useEffect(() => {
    if (currentLevel.bottom) {
      fetchTrees();
    }
  }, [currentLevel]);

  return (
    <Wrapper>
      <Header>{currentLevel.header}</Header>
      <Content currentLevel={currentLevel} forest={forest} />
    </Wrapper>
  );
};

export default Main;
