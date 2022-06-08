import React from "react";
import styled from "styled-components";
import { OutfitSemiBoldWhite20px, ValignTextMiddle } from "../../styledMixins";


function ContactUsFooter(props) {
  const { className } = props;

  return (
    <ContactUsFooter1 className={`contact-us-footer ${className || ""}`}>
      <ContactUsFooterCopyright className="contact-us-footer-copyright">
        Copyright © Prodicity Inc. 2022
      </ContactUsFooterCopyright>
    </ContactUsFooter1>
  );
}

const ContactUsFooter1 = styled.div`
  width: 890px;
  height: 38px;
  align-self: flex-start;
  margin-top: 28px;
  margin-left: -279px;
  display: flex;
  justify-content: center;

  &.contact-us-footer.contact-us-footer-1 {
    margin-left: -59px;
  }
`;

const ContactUsFooterCopyright = styled.div`
  ${ValignTextMiddle}
  ${OutfitSemiBoldWhite20px}
            margin-top: 1px;
  margin-left: -1px;
  width: 315px;
  margin-bottom: 2px;
  text-align: center;
  letter-spacing: 0;
`;

export default ContactUsFooter;
