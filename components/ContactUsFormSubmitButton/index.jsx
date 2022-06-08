import React from "react";
import styled from "styled-components";
import { OutfitSemiBoldWhite30px } from "../../styledMixins";


function ContactUsFormSubmitButton(props) {
  const { className } = props;

  return (
    <ContactUsFormSubmitButton1 className={`contact-us-form-submit-button-1 ${className || ""}`}>
      <SubmitButtonText className="submit-button-text-1">Submit</SubmitButtonText>
    </ContactUsFormSubmitButton1>
  );
}

const ContactUsFormSubmitButton1 = styled.div`
  margin-left: 90px;
  width: 298px;
  height: 64px;
  margin-top: 34.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 30px #5881d1;
  transition: all 0.2s ease;
  cursor: pointer;

  &.contact-us-form-submit-button-1.contact-us-form-submit-button-2 {
    margin-left: 259px;
  }

  &:hover {
    background-color: #222053;
  }
`;

const SubmitButtonText = styled.div`
  ${OutfitSemiBoldWhite30px}
  margin-top: 0;
  height: 38px;
  margin-left: 0.2px;
  width: 372.16217041015625px;
  text-align: center;
  letter-spacing: 0;
`;

export default ContactUsFormSubmitButton;
