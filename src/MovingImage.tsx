import React, { useEffect, useRef, useState } from "react";
import styledComponentsCjs from "styled-components";

const Wrapper = styledComponentsCjs.div`
    perspective: 13px;
`;

const Image = styledComponentsCjs.img`
    max-width: 400px;
    height: auto;
    max-height: 400px;
    filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, 0.2));
    transition: transform 0.15s;

    @media (max-width: 600px) {
      height: 200px;
      width: 200px;
  }
`;

let counter = 0;
let refreshRate = 3;

const isTimeToUpdate = () => {
  return counter++ % refreshRate === 0;
};

type Props = {
  src: string;
};

const MovingImage = (props: Props) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const [mouseOrigin, setMouseOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setOrigin();
  }, []);

  const setOrigin = () => {
    if (wrapper.current) {
      setMouseOrigin({
        x: wrapper.current.offsetLeft + Math.floor(wrapper.current.offsetWidth / 2),
        y: wrapper.current.getBoundingClientRect().top + Math.floor(wrapper.current.offsetHeight / 2),
      });
    }
  };

  const onMouseLeaveHandler = () => {
    if (image.current) {
      image.current.style = "";
    }
  };

  const onMouseMoveEnter = (e: MouseEvent) => {
    setOrigin();
    onMouseMoveHandler(e);
  };

  const onMouseMoveHandler = (e: MouseEvent) => {
    if (!isTimeToUpdate() || !image.current) return;

    const mouseX = e.clientX - mouseOrigin.x;
    const mouseY = (e.clientY - mouseOrigin.y) * -1;

    var style =
      "rotateX(" +
      (-mouseY / image.current.offsetHeight / 2).toFixed(2) +
      "deg) rotateY(" +
      (-mouseX / image.current.offsetWidth / 2).toFixed(2) +
      "deg) scale(1.04)";
    image.current.style.transform = style;
  };

  return (
    <Wrapper
      ref={wrapper}
      onMouseEnter={onMouseMoveEnter}
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={onMouseMoveHandler}
    >
      <Image ref={image} width={400} height={264} {...props} />
    </Wrapper>
  );
};

export default MovingImage;
