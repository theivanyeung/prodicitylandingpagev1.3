import React from "react";
import styled from "styled-components";


function GamilificationImage2(props) {
  const { gamilificationImageFeature } = props;

  return (
    <GamilificationImage>
      <GamilificationImageContainer>
        <GamilificationImageFeature className="animate-enter20" show-on-scroll src={gamilificationImageFeature} />
        <GamilificationImageCharacter
          className="animate-enter21"
          show-on-scroll
          src="/img/gamilification-image-character-1@2x.png"
        />
      </GamilificationImageContainer>
    </GamilificationImage>
  );
}

const GamilificationImage = styled.div`
  margin-left: -0.6px;
  width: 849.3817749023438px;
  align-self: center;
  margin-top: 152px;
  display: flex;
  align-items: flex-start;
`;

const GamilificationImageContainer = styled.div`
  width: 849px;
  height: 443px;
  position: relative;
  margin-top: 0;
`;

const GamilificationImageFeature = styled.img`
  position: absolute;
  width: 661px;
  height: 443px;
  top: 0;
  left: 188px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.1);
  cursor: pointer;

  &.animate-enter20 {
    display: block;
    animation: animate-enter20-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const GamilificationImageCharacter = styled.img`
  position: absolute;
  width: 350px;
  height: 315px;
  top: 106px;
  left: 0;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: translate(-25px, 0);
  cursor: pointer;

  &.animate-enter21 {
    display: block;
    animation: animate-enter21-frames 0.4s ease-in-out 0.1s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }

  &:hover {
    transform: translate(5px, 0);
  }
`;

export default GamilificationImage2;
