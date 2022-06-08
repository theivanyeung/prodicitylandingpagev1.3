import React from "react";
import styled from "styled-components";


function NavBarLeft(props) {
  const { prodicityLogoImage } = props;

  return (
    <NavBarLeft1>
      <ProdicityLogo>
        <ProdicityLogoImage src={prodicityLogoImage} />
        <ProdicityLogoText>Prodicity</ProdicityLogoText>
      </ProdicityLogo>
    </NavBarLeft1>
  );
}

const NavBarLeft1 = styled.div`
  width: 243px;
  align-self: center;
  display: flex;
  justify-content: flex-end;
`;

const ProdicityLogo = styled.div`
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
  width: 210px;
  min-height: 32px;
  font-family: var(--font-family-outfit);
  font-weight: 600;
  color: var(--white);
  font-size: 32px;
  text-align: center;
  letter-spacing: 0;
`;

export default NavBarLeft;
