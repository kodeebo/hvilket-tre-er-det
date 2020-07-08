import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import structure from "./state/structure";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import useForest from "./state/state";

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
  const [forest, fetchTrees] = useForest();

  const paths = location.pathname.split("/").filter((path) => path);
  const branch = findCurrentBranch(paths, 0, structure);
  const currentCategory = branch.slice(-1).pop();

  useEffect(() => {
    if (currentCategory.bottom) {
      fetchTrees({ id: currentCategory.id });
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
