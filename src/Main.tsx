import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { ImageArray } from "./ImageArray";
import Categories from "./Categories";
import structure from "./structure";
import allTrees from "./trees.json";

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: Roboto;
  font-weight: bold;
  color: black;
  padding: 30px;
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

  if (!currentLevel.header) {
    return <span>Invalid url</span>;
  }

  return (
    <>
      <Header>{currentLevel.header}</Header>
      {currentLevel.bottom ? (
        <ImageArray
          currentLevel={currentLevel}
          forest={forest}
          selectedImage={location.pathname !== "/" && location.pathname}
        />
      ) : (
        <Categories currentLevel={currentLevel} selectedImage={location.pathname !== "/" && location.pathname} />
      )}
    </>
  );
};

export default Main;
