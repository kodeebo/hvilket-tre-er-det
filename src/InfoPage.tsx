import React from "react";
import styledComponentsCjs from "styled-components";
import Header from "./Header";

const Wrapper = styledComponentsCjs.div`
    background: white;
    opacity: 0.8;
    color: black;
`;

const ImageWrapper = styledComponentsCjs.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;`;

const StyledImage = styledComponentsCjs.img`
  width: 360px;
  height: 260px;
  margin: 5px;
`;

const InfoPage = ({ tree }) => {
  console.log(tree);
  if (!tree) return <span>No info found</span>;
  return (
    <Wrapper>
      <Header>{tree.title}</Header>
      <ImageWrapper>
        {tree.images.map((image) => (
          <StyledImage src={image.standard_size_url || image.full_size_url} />
        ))}
      </ImageWrapper>
      <div dangerouslySetInnerHTML={{ __html: tree.xhtml_body }} />
    </Wrapper>
  );
};

export default InfoPage;
