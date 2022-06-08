import React from "react";
import styled from "styled-components";
import { OutfitNormalCloud15px } from "../../styledMixins";


function ContactUsFormEmailInput2(props) {
  const { inputType, inputPlaceholder, className } = props;

  return (
    <ContactUsFormEmailInput className={`contact-us-form-email-input-2 ${className || ""}`}>
      <EmailInputPlaceholderText
        className="email-input-placeholder-text-4"
        name="emailinputplaceholdertext"
        placeholder={inputPlaceholder}
        type={inputType}
      />
    </ContactUsFormEmailInput>
  );
}

const ContactUsFormEmailInput = styled.div`
  width: 682px;
  height: 46px;
  margin-top: 11px;
  display: flex;
  align-items: center;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 30px #5881d1;

  &.contact-us-form-email-input-2.contact-us-form-subject-input-2 {
    height: 44px;
    margin-top: 10px;
  }
`;

const EmailInputPlaceholderText = styled.input`
  ${OutfitNormalCloud15px}
  margin-top: -0.6px;
  height: 26px;
  margin-left: 24px;
  margin-right: 23px;
  flex: 1;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #c6c6c699;
  }
`;

const EmailInputPlaceholderText1 = styled.input`
  ${OutfitNormalCloud15px}

  .contact-us-form-email-input-2.contact-us-form-subject-input-2  & {
    margin-top: 0.7px;
  }
`;

export default ContactUsFormEmailInput2;
