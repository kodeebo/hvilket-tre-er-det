import react, { useState } from "react";
import allTrees from "../trees.json";

interface Tree {
  name: string;
  id: string;
  categories: Array<string>;
}

const useForest = () => {
  const [forest, buildForest] = useState({});
  const fetchTrees = async ({ id }: { id: string }): Promise<void> => {
    const treesOnThisLevel = allTrees.filter((tree: Tree) => tree.categories.some((cat) => cat === id));
    const result = await Promise.all(
      treesOnThisLevel.map((tree: Tree) =>
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
  return [forest, fetchTrees];
};

export default useForest;
