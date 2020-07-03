import React from "react";
import styledComponentsCjs from "styled-components";

const Wrapper = styledComponentsCjs.div`
    background: white;
    opacity: 0.8;
    color: black;
`;

const InfoPage = ({ tree }) => {
  console.log(tree);
  if (!tree) return <span>No info found</span>;
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: tree.xhtml_body }} />
    </Wrapper>
  );
};

export default InfoPage;
