import React from "react";
import styled from "styled-components";
import { OutfitNormalWhite15px, OutfitSemiBoldWhite36px } from "../../styledMixins";


function GroupSessionsTextGroup2(props) {
  const { groupSessionsTitle, groupSessionsDescription, className } = props;

  return (
    <GroupSessionsTextGroup className={`group-sessions-text-group-3 animate-enter43 ${className || ""}`} show-on-scroll>
      <GroupSessionsTitle className="group-sessions-title-3">{groupSessionsTitle}</GroupSessionsTitle>
      <GroupSessionsDescription className="group-sessions-description-3">
        {groupSessionsDescription}
      </GroupSessionsDescription>
    </GroupSessionsTextGroup>
  );
}

const GroupSessionsTextGroup = styled.div`
  width: 321px;
  height: 253px;
  margin-left: 67px;
  flex-direction: column;
  opacity: 0;
  transform: translate(25px, 0);

  &.group-sessions-text-group-3.marketplace-text-group-3 {
    height: 204px;
    margin-top: 1px;
    transform: translate(-25px, 0);
    margin-left: unset;
  }

  &.animate-enter43 {
    animation: animate-enter43-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }
`;

const GroupSessionsTitle = styled.div`
  ${OutfitSemiBoldWhite36px}
  width: 321.41156005859375px;
  height: 45px;
  text-align: center;
  letter-spacing: 0;
`;

const GroupSessionsDescription = styled.p`
  ${OutfitNormalWhite15px}
  width: 321.41156005859375px;
  height: 95px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0;
`;

const MarketplaceDescription = styled.p`
  ${OutfitNormalWhite15px}

  .group-sessions-text-group-3.marketplace-text-group-3  & {
    height: 169px;
  }
`;

export default GroupSessionsTextGroup2;
