import React from "react";
import styled from "styled-components";
import { OutfitSemiBoldWhite25px } from "../../styledMixins";


function ContactUsFooter2(props) {
  const { className } = props;

  return (
    <ContactUsFooter className={`contact-us-footer-2 ${className || ""}`}>
      <ContactUsFooterCopyright className="contact-us-footer-copyright-1">
        Copyright © Prodicity Inc. 2022
      </ContactUsFooterCopyright>
    </ContactUsFooter>
  );
}

const ContactUsFooter = styled.div`
  position: absolute;
  width: 890px;
  height: 38px;
  top: 1003px;
  left: 255px;
  display: flex;
  justify-content: center;

  &.contact-us-footer-2.contact-us-footer-3 {
    left: 515px;
  }
`;

const ContactUsFooterCopyright = styled.div`
  ${OutfitSemiBoldWhite25px}
  width: 890px;
  text-align: center;
  letter-spacing: 0;
`;

export default ContactUsFooter2;
