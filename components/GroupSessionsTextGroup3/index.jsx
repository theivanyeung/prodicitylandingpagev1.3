import React from "react";
import styled from "styled-components";
import { OutfitNormalWhite36px, OutfitSemiBoldWhite72px } from "../../styledMixins";


function GroupSessionsTextGroup3(props) {
  const { groupSessionsTitle, groupSessionsDescription, className } = props;

  return (
    <GroupSessionsTextGroup className={`group-sessions-text-group-4 animate-enter57 ${className || ""}`} show-on-scroll>
      <GroupSessionsTitle className="group-sessions-title-4">{groupSessionsTitle}</GroupSessionsTitle>
      <GroupSessionsDescription className="group-sessions-description-4">
        {groupSessionsDescription}
      </GroupSessionsDescription>
    </GroupSessionsTextGroup>
  );
}

const GroupSessionsTextGroup = styled.div`
  width: 739px;
  height: 418px;
  margin-left: 147px;
  flex-direction: column;
  opacity: 0;
  transform: translate(25px, 0);

  &.group-sessions-text-group-4.marketplace-text-group-4 {
    height: 430px;
    transform: translate(-25px, 0);
    margin-left: unset;
  }

  &.animate-enter57 {
    animation: animate-enter57-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }
`;

const GroupSessionsTitle = styled.div`
  ${OutfitSemiBoldWhite72px}
  width: 738.9539184570312px;
  height: 91px;
  text-align: center;
  letter-spacing: 0;
`;

const GroupSessionsDescription = styled.div`
  ${OutfitNormalWhite36px}
  width: 738.9539184570312px;
  height: 225px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0;
`;

const MarketplaceTitle = styled.div`
  ${OutfitSemiBoldWhite72px}

  .group-sessions-text-group-4.marketplace-text-group-4  & {
    width: 738.7953491210938px;
  }
`;

const MarketplaceDescription = styled.div`
  ${OutfitNormalWhite36px}

  .group-sessions-text-group-4.marketplace-text-group-4  & {
    width: 738.7953491210938px;
    height: 169px;
  }
`;

export default GroupSessionsTextGroup3;
