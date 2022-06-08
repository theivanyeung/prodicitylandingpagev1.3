import React from "react";
import styled from "styled-components";
import { OutfitSemiBoldWhite48px, OutfitNormalWhite24px } from "../../styledMixins";


function GroupSessionsTextGroup(props) {
  const { groupSessionsTitle, groupSessionsDescription, className } = props;

  return (
    <GroupSessionsTextGroup1
      className={`group-sessions-text-group-1 animate-enter16 ${className || ""}`}
      show-on-scroll
    >
      <GroupSessionsTitle className="group-sessions-title-1">{groupSessionsTitle}</GroupSessionsTitle>
      <GroupSessionsDescription className="group-sessions-description-1">
        {groupSessionsDescription}
      </GroupSessionsDescription>
    </GroupSessionsTextGroup1>
  );
}

const GroupSessionsTextGroup1 = styled.div`
  width: 503px;
  height: 253px;
  margin-left: 105px;
  margin-bottom: 1px;
  flex-direction: column;
  opacity: 0;
  transform: translate(25px, 0);

  &.group-sessions-text-group-1.marketplace-text-group-1 {
    height: 204px;
    align-self: center;
    margin-top: 1px;
    transform: translate(-25px, 0);
    margin-left: unset;
    margin-bottom: unset;
  }

  &.animate-enter16 {
    animation: animate-enter16-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }
`;

const GroupSessionsTitle = styled.div`
  ${OutfitSemiBoldWhite48px}
  height: 60px;
  text-align: center;
  letter-spacing: 0;
`;

const GroupSessionsDescription = styled.div`
  ${OutfitNormalWhite24px}
  height: 150px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0;
`;

const MarketplaceDescription = styled.div`
  ${OutfitNormalWhite24px}

  .group-sessions-text-group-1.marketplace-text-group-1  & {
    height: 169px;
  }
`;

export default GroupSessionsTextGroup;
