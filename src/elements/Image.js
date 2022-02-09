import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size } = props;
  //스타일만 모아주기
  const styles = {
    src: src,
    size: size,
  };
  //만약 모양이 원이면 서클을 적용해 주세용
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <AspectOuter>
        <AspectInner {...styles}></AspectInner>
      </AspectOuter>
    );
  }
  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "https://s1.best-wallpaper.net/wallpaper/m/1812/Portugal-Porto-river-bridge-city-morning_m.jpg",
  size: 36,
};
const AspectOuter = styled.div`
  width: 100%;
  min-width: 250px;
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
`;

//원의 형태 잡아주기
const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
