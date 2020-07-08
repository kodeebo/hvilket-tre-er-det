import React, { useEffect, useState } from "react";
import styledComponentsCjs from "styled-components";
import Spinner from "./Loading";
import { useLocation } from "react-router-dom";

const Wrapper = styledComponentsCjs.div`
    padding: 20px;
`;

const ImageWrapper = styledComponentsCjs.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
`;

const StyledImage = styledComponentsCjs.img`
  width: 360px;
  min-width: 360px;
  height: 260px;
  margin: 5px;
`;

const Text = styledComponentsCjs.div`
  color: black;
`;

const Header = styledComponentsCjs.div`
display: flex;
justify-content: center;
font-size: 40px;
font-family: Roboto;
font-weight: bold;
padding: 30px;`;

const InfoPage = ({ tree }) => {
  const location = useLocation();
  if (!tree) return <Spinner />;
  return (
    <Wrapper>
      <Header>{tree.title}</Header>
      <ImageWrapper>
        {tree.images.map((image) => (
          <StyledImage key={image.id} src={image.standard_size_url || image.full_size_url} />
        ))}
      </ImageWrapper>
      <Text dangerouslySetInnerHTML={{ __html: tree.xhtml_body }} />
    </Wrapper>
  );
};

export default InfoPage;
