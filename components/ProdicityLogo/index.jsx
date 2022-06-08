import React from "react";
import styled from "styled-components";
import { OutfitSemiBoldWhite37px } from "../../styledMixins";


function ProdicityLogo() {
  return (
    <ProdicityLogo1>
      <ProdicityLogoImage src="/img/prodicity-logo-image@2x.png" />
      <ProdicityLogoText>Prodicity</ProdicityLogoText>
    </ProdicityLogo1>
  );
}

const ProdicityLogo1 = styled.div`
  align-self: flex-end;
  margin-right: -2px;
  display: flex;
  align-items: center;
  min-width: 245px;
`;

const ProdicityLogoImage = styled.img`
  width: 33px;
  height: 61px;
  object-fit: cover;
`;

const ProdicityLogoText = styled.div`
  ${OutfitSemiBoldWhite37px}
  width: 210px;
  min-height: 32px;
  text-align: center;
  letter-spacing: 0;
`;

const ProdicityLogo2 = styled.div`
  align-self: flex-end;
  margin-right: -2px;
  display: flex;
  align-items: center;
  min-width: 245px;
`;

const ProdicityLogoImage1 = styled.img`
  width: 33px;
  height: 61px;
  object-fit: cover;
`;

const ProdicityLogoText1 = styled.div`
  ${OutfitSemiBoldWhite37px}
  width: 210px;
  min-height: 32px;
  text-align: center;
  letter-spacing: 0;
`;

const ProdicityLogo3 = styled.div`
  align-self: flex-end;
  margin-right: -2px;
  display: flex;
  align-items: center;
  min-width: 245px;
`;

const ProdicityLogoImage2 = styled.img`
  width: 33px;
  height: 61px;
  object-fit: cover;
`;

const ProdicityLogoText2 = styled.div`
  ${OutfitSemiBoldWhite37px}
  width: 210px;
  min-height: 32px;
  text-align: center;
  letter-spacing: 0;
`;

export default ProdicityLogo;
