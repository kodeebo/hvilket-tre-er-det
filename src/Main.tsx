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
  categories?: Array<{ header: string; id: string }>;
}

const findCurrenCat = (paths, currentPath, structure, breadcrumb = []) => {
  if (paths.length === 0) return [structure, breadcrumb];
  const currentCat = structure.categories.find((cat) => cat.id === paths[currentPath]);
  breadcrumb.push(currentCat);
  if (paths.length === currentPath + 1) return [currentCat, breadcrumb];
  return findCurrenCat(paths, currentPath + 1, currentCat, breadcrumb);
};

export const Main = () => {
  const location = useLocation();
  const [forest, buildForest] = useState({});
  console.log(location);
  const paths = location.pathname.split("/").filter((path) => path);
  console.log(paths);
  const [currentCategory, breadcrumb] = findCurrenCat(paths, 0, structure);
  console.log(currentCategory);
  const fetchTrees = async () => {
    const treesOnThisLevel = allTrees.filter((tree) => tree.categories.some((cat) => cat === currentCategory.id));
    const result = await Promise.all(
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
    if (currentCategory.bottom) {
      fetchTrees();
    }
  }, [currentCategory]);

  return (
    <Wrapper>
      <Header breadcrumb={breadcrumb} />
      <Content currentLevel={currentCategory} forest={forest} />
    </Wrapper>
  );
};

export default Main;
