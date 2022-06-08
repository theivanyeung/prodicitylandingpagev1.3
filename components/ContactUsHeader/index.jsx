import React from "react";
import styled from "styled-components";
import { OutfitLightCloud25px, OutfitSemiBoldWhite80px } from "../../styledMixins";


function ContactUsHeader(props) {
  const { className } = props;

  return (
    <ContactUsHeader1 className={`contact-us-header-1 animate-enter14 ${className || ""}`} show-on-scroll>
      <ContactUsHeaderTitle className="contact-us-header-title-1">Let’s Talk</ContactUsHeaderTitle>
      <ContactUsHeaderSubtitle className="contact-us-header-subtitle-1">
        If you need help you can visit the help center or read our About Us page. We are looking forward to answering
        any of your questions here! We hope you enjoy the app!
      </ContactUsHeaderSubtitle>
    </ContactUsHeader1>
  );
}

const ContactUsHeader1 = styled.div`
  position: absolute;
  width: 1739px;
  height: 222px;
  top: 0;
  left: 0;
  opacity: 0;

  &.contact-us-header-1.contact-us-header-2 {
    left: 68px;
  }

  &.animate-enter14 {
    animation: animate-enter14-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const ContactUsHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite80px}
  position: absolute;
  width: 612px;
  top: 19px;
  left: 564px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUsHeaderSubtitle = styled.div`
  ${OutfitLightCloud25px}
  position: absolute;
  width: 955px;
  top: 127px;
  left: 392px;
  text-align: center;
  letter-spacing: 0;
`;

export default ContactUsHeader;
