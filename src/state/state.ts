import react, { useState } from "react";
import allTrees from "../trees.json";

const useForest = () => {
  const [forest, buildForest] = useState({});
  const fetchTrees = async ({ id }: { id: string }) => {
    const treesOnThisLevel = allTrees.filter((tree) => tree.categories.some((cat) => cat === id));
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
  return [forest, fetchTrees];
};

export default useForest;
