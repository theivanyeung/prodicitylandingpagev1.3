import React from "react";
import styled from "styled-components";


function GamilificationImage(props) {
  const { className } = props;

  return (
    <GamilificationImage1 className={`gamilification-image ${className || ""}`}>
      <GamilificationImageCharacter
        className="gamilification-image-character animate-enter8"
        show-on-scroll
        src="/img/gamilification-image-character@2x.png"
      />
      <GamilificationImageFeature
        className="gamilification-image-feature animate-enter7"
        show-on-scroll
        src="/img/gamilification-image-feature@2x.png"
      />
    </GamilificationImage1>
  );
}

const GamilificationImage1 = styled.div`
  margin-left: -1px;
  height: 381px;
  width: 295px;
  align-self: center;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  padding: 19px 5.2px;
  align-items: flex-end;
`;

const GamilificationImageCharacter = styled.img`
  width: 155px;
  height: 137px;
  align-self: center;
  margin-top: 10px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: translate(-25px, 0);
  cursor: pointer;

  &.animate-enter8 {
    display: block;
    animation: animate-enter8-frames 0.4s ease-in-out 0.1s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }

  &:hover {
    transform: translate(5px, 0);
  }
`;

const GamilificationImageFeature = styled.img`
  width: 284px;
  height: 168px;
  margin-top: 28px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.1);
  cursor: pointer;

  &.animate-enter7 {
    display: block;
    animation: animate-enter7-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const GamilificationImageCharacter1 = styled.img`
  &.animate-enter35 {
    display: block;
    animation: animate-enter35-frames 0.4s ease-in-out 0.1s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const GamilificationImageFeature1 = styled.img`
  &.animate-enter34 {
    display: block;
    animation: animate-enter34-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }
`;

export default GamilificationImage;
