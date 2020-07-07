import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import structure from "./structure";
import allTrees from "./trees.json";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export interface Structure {
  header: string;
  id: string;
  bottom: boolean;
  categories?: Array<{ header: string; id: string }>;
}

const findCurrentBranch = (paths, currentPath, structure, branch = [structure]) => {
  if (paths.length === 0) return branch;
  const currentCat = structure.categories.find((cat) => cat.id === paths[currentPath]);
  branch.push(currentCat);
  if (paths.length === currentPath + 1) return branch;
  return findCurrentBranch(paths, currentPath + 1, currentCat, branch);
};

export const Main = () => {
  const location = useLocation();
  const [forest, buildForest] = useState({});
  const paths = location.pathname.split("/").filter((path) => path);
  const branch = findCurrentBranch(paths, 0, structure);
  const currentCategory = branch.slice(-1).pop();
  console.log(branch);
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
      <Header breadcrumb={branch.slice(1)} />
      <Content branch={branch} forest={forest} />
      <Footer />
    </Wrapper>
  );
};

export default Main;
