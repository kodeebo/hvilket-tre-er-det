import React, { useEffect, useRef, useState } from "react";
import styledComponentsCjs from "styled-components";

const Wrapper = styledComponentsCjs.div`
    perspective: 25px;
`;

const Image = styledComponentsCjs.img`
    width: 20em;
    height: 18em;
    background-color: white;
    box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s;
`;

const MovingImage = (props) => {
  const wrapper = useRef(null);
  const image = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseOrigin, setMouseOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMouseOrigin({
      x: wrapper.current.offsetLeft + Math.floor(wrapper.current.offsetWidth / 2),
      y: wrapper.current.offsetTop + Math.floor(wrapper.current.offsetHeight / 2),
    });
  }, []);

  const onMouseLeaveHandler = () => {
    image.current.style = "";
  };

  const onMouseMoveHandler = (e) => {
    setMousePos({
      x: e.clientX - mouseOrigin.x,
      y: (e.clientY - mouseOrigin.y) * -1,
    });

    var style =
      "rotateX(" +
      (mousePos.y / image.current.offsetHeight / 2).toFixed(2) +
      "deg) rotateY(" +
      (mousePos.x / image.current.offsetWidth / 2).toFixed(2) +
      "deg)";
    image.current.style.transform = style;
  };

  return (
    <Wrapper
      ref={wrapper}
      onMouseEnter={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={onMouseMoveHandler}
    >
      <Image ref={image} {...props} />
    </Wrapper>
  );
};

export default MovingImage;
