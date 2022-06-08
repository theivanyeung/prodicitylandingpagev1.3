import React from "react";
import ProdicityLogo from "../ProdicityLogo";
import GamilificationImage from "../GamilificationImage";
import ContactUsFormEmailInput from "../ContactUsFormEmailInput";
import ContactUsFooter from "../ContactUsFooter";
import styled from "styled-components";
import {
  OutfitSemiBoldWhite25px,
  OutfitNormalWhite20px,
  OutfitSemiBoldWhite24px,
  OutfitLightCloud15px,
  OutfitExtraBoldWhite45px,
  OutfitSemiBoldWhite36px,
  OutfitSemiBoldWhite30px,
  OutfitSemiBoldWhite35px,
  OutfitNormalWhite15px,
  OutfitNormalWhite22px,
  OutfitSemiBoldMountainMist16px,
  OutfitSemiBoldWhite20px,
  OutfitSemiBoldWhite40px,
  OutfitNormalCloud15px,
  OutfitNormalCloud20px,
  OutfitSemiBoldWhite60px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./LandingPageSLV22.css";

function LandingPageSLV22(props) {
  const {
    introduction,
    about,
    gamification,
    productivity,
    place,
    rocket,
    waitlistTitle,
    waitlistSubtitle,
    inputType1,
    inputPlaceholder1,
    buttonText,
    aboutUsTitle,
    prodicityLogoLarge,
    prodicityDescription,
    gamilificationHeaderTitle,
    gamilificationHeaderSubtitle,
    groupSessionsImage,
    groupSessionsTitle,
    groupSessionsDescription,
    marketplaceImage,
    marketplaceTitle,
    marketplaceDescription,
    questsImage,
    questsTitle,
    questsDescription,
    clansTitle,
    clansDescription,
    clansImage,
    challengesImage,
    challengesTitle,
    challengesDescription,
    differentiationHeaderSubtitle,
    differentiationHeaderTitle,
    contactUsFormEmailLabel,
    contactUsFormSubjectLabel,
    contactUsFormMessageLabel,
    inputType2,
    inputPlaceholder2,
    submitButtonText,
    contactUsRightImage,
    iconLocation_Pin,
    contactUsRightLocationDescription,
    iconMail,
    contactUsRightEmailDescription,
    socialMediaIconsYoutube,
    socialMediaIconsDiscord,
    iconFacebook,
    iconTwitter,
    socialMediaIconsTiktok,
    iconInstagram,
    contactUsHeaderTitle,
    contactUsHeaderSubtitle,
    topOfPageIcon,
    contactUsFormEmailInput1Props,
    contactUsFormEmailInput2Props,
  } = props;

  return (
    <form className="landing-page-sl-v2-2 screen" name="form2" action="form2" method="post">
      <Introduction style={{ backgroundImage: `url(${introduction})` }} id="introduction">
        <Frame1>
          <ProdicityLogo />
          <a href="#about-us">
            <About>{about}</About>
          </a>
          <a href="#gamilification">
            <Gamification>{gamification}</Gamification>
          </a>
          <a href="#productivity">
            <Productivity>{productivity}</Productivity>
          </a>
          <a href="#contact-us">
            <Place>{place}</Place>
          </a>
        </Frame1>
        <Waitlist>
          <Rocket className="animate-enter12" src={rocket} />
          <WaitlistContainer>
            <WaitlistTextGroup className="animate-enter11">
              <WaitlistTitle>{waitlistTitle}</WaitlistTitle>
            </WaitlistTextGroup>
            <WaitlistSubtitle>{waitlistSubtitle}</WaitlistSubtitle>
          </WaitlistContainer>
          <WaitlistForm>
            <WaitlistFormInput>
              <InputPlaceholderText name="inputplaceholdertext" placeholder={inputPlaceholder1} type={inputType1} />
            </WaitlistFormInput>
            <a href="javascript:SubmitForm('form2')">
              <WaitlistFormSubmitButton>
                <ButtonText>{buttonText}</ButtonText>
              </WaitlistFormSubmitButton>
            </a>
          </WaitlistForm>
        </Waitlist>
      </Introduction>
      <AboutUs id="about-us">
        <AboutUsMain className="animate-enter10" show-on-scroll>
          <AboutUsTop>
            <AboutUsTopLeft>
              <AboutUsTitle>{aboutUsTitle}</AboutUsTitle>
              <ProdicityLogoLarge src={prodicityLogoLarge} />
            </AboutUsTopLeft>
            <AboutUsTopRight>
              <ProdicityDescription>{prodicityDescription}</ProdicityDescription>
            </AboutUsTopRight>
          </AboutUsTop>
        </AboutUsMain>
      </AboutUs>
      <Gamilification id="gamilification">
        <GamificationHeader className="animate-enter9">
          <GamilificationHeaderTitle>{gamilificationHeaderTitle}</GamilificationHeaderTitle>
          <GamilificationHeaderSubtitle>{gamilificationHeaderSubtitle}</GamilificationHeaderSubtitle>
        </GamificationHeader>
        <GamilificationImage />
      </Gamilification>
      <Productivity1 id="productivity">
        <GroupSessions>
          <GroupSessionsImage className="animate-enter4" show-on-scroll src={groupSessionsImage} />
          <GroupSessionsTextGroup className="animate-enter3" show-on-scroll>
            <GroupSessionsTitle>{groupSessionsTitle}</GroupSessionsTitle>
            <GroupSessionsDescription>{groupSessionsDescription}</GroupSessionsDescription>
          </GroupSessionsTextGroup>
        </GroupSessions>
        <Marketplace>
          <MarketplaceImage className="animate-enter6" show-on-scroll src={marketplaceImage} />
          <MarketplaceTextGroup className="animate-enter5" show-on-scroll>
            <MarketplaceTitle>{marketplaceTitle}</MarketplaceTitle>
            <MarketplaceDescription>{marketplaceDescription}</MarketplaceDescription>
          </MarketplaceTextGroup>
        </Marketplace>
      </Productivity1>
      <Differentiation>
        <DifferentContainer>
          <DifferentationMain>
            <Quests>
              <QuestsImage src={questsImage} />
              <QuestsTextGroup>
                <QuestsTitle>{questsTitle}</QuestsTitle>
                <QuestsDescription>{questsDescription}</QuestsDescription>
              </QuestsTextGroup>
            </Quests>
            <Clans>
              <ClansContainer>
                <ClansTextGroup>
                  <ClansTitle>{clansTitle}</ClansTitle>
                  <ClansDescription>{clansDescription}</ClansDescription>
                </ClansTextGroup>
                <ClansImage src={clansImage} />
              </ClansContainer>
            </Clans>
            <Challenges>
              <ChallengesImage src={challengesImage} />
              <ChallengesTextGroup>
                <ChallengesTitle>{challengesTitle}</ChallengesTitle>
                <ChallengesDescription>{challengesDescription}</ChallengesDescription>
              </ChallengesTextGroup>
            </Challenges>
          </DifferentationMain>
          <DifferentiationHeader className="animate-enter2" show-on-scroll>
            <DifferentiationHeaderSubtitle>{differentiationHeaderSubtitle}</DifferentiationHeaderSubtitle>
            <DifferentiationHeaderTitle>{differentiationHeaderTitle}</DifferentiationHeaderTitle>
          </DifferentiationHeader>
        </DifferentContainer>
      </Differentiation>
      <ContactUs id="contact-us">
        <ContactUsContainer>
          <ContactUsMain>
            <ContactUsLeft>
              <ContactUsForm>
                <ContactUsFormEmail>
                  <ContactUsFormEmailLabel>{contactUsFormEmailLabel}</ContactUsFormEmailLabel>
                  <ContactUsFormEmailInput
                    inputType={contactUsFormEmailInput1Props.inputType}
                    inputPlaceholder={contactUsFormEmailInput1Props.inputPlaceholder}
                  />
                </ContactUsFormEmail>
                <ContactUsFormSubject>
                  <ContactUsFormSubjectLabel src={contactUsFormSubjectLabel} />
                  <ContactUsFormEmailInput
                    inputType={contactUsFormEmailInput2Props.inputType}
                    inputPlaceholder={contactUsFormEmailInput2Props.inputPlaceholder}
                    className={contactUsFormEmailInput2Props.className}
                  />
                </ContactUsFormSubject>
                <ContactUsFormMessage>
                  <ContactUsFormMessageLabel>{contactUsFormMessageLabel}</ContactUsFormMessageLabel>
                  <ContactUsFormMessageInput>
                    <EmailInputPlaceholderText
                      name="emailinputplaceholdertext"
                      placeholder={inputPlaceholder2}
                      type={inputType2}
                    />
                  </ContactUsFormMessageInput>
                </ContactUsFormMessage>
                <a href="javascript:SubmitForm('form2')">
                  <ContactUsFormSubmitButton>
                    <SubmitButtonText>{submitButtonText}</SubmitButtonText>
                  </ContactUsFormSubmitButton>
                </a>
              </ContactUsForm>
            </ContactUsLeft>
            <ContactUsRight className="animate-enter">
              <ContactUsRightImage src={contactUsRightImage} />
              <ContactUsRightInformation>
                <ContactUsRightLocation>
                  <IconLocationPin src={iconLocation_Pin} />
                  <ContactUsRightLocationDescription>
                    {contactUsRightLocationDescription}
                  </ContactUsRightLocationDescription>
                </ContactUsRightLocation>
                <a href="mailto:prodicityteam@gmail.com" target="_blank">
                  <ContactUsRightEmail>
                    <IconMail src={iconMail} />
                    <a href="mailto:prodicityteam@gmail.com" target="_blank">
                      <ContactUsRightEmailDescription>{contactUsRightEmailDescription}</ContactUsRightEmailDescription>
                    </a>
                  </ContactUsRightEmail>
                </a>
              </ContactUsRightInformation>
              <SocialMediaIcons>
                <a
                  href="https://www.youtube.com/channel/UCjTUwakfSnLJC0t2H0YM0jA"
                  target="_blank"
                  className="align-self-flex-center"
                >
                  <SocialMediaIconsYoutube src={socialMediaIconsYoutube} />
                </a>
                <a href="https://discord.gg/PkHRjWzeDc" target="_blank">
                  <SocialMediaIconsDiscord src={socialMediaIconsDiscord} />
                </a>
                <a href="https://www.facebook.com/Prodicity/" target="_blank" className="align-self-flex-center">
                  <IconFacebook src={iconFacebook} />
                </a>
                <a href="https://twitter.com/prodicity" target="_blank">
                  <SocialMediaIconsDiscord src={iconTwitter} />
                </a>
                <a href="https://www.tiktok.com/@prodicity" target="_blank">
                  <SocialMediaIconsTiktok src={socialMediaIconsTiktok} />
                </a>
                <a href="https://www.instagram.com/prodicityteam/?hl=en" target="_blank">
                  <SocialMediaIconsDiscord src={iconInstagram} />
                </a>
              </SocialMediaIcons>
            </ContactUsRight>
          </ContactUsMain>
          <ContactUsHeader className="animate-enter1" show-on-scroll>
            <ContactUsHeaderTitle>{contactUsHeaderTitle}</ContactUsHeaderTitle>
            <ContactUsHeaderSubtitle>{contactUsHeaderSubtitle}</ContactUsHeaderSubtitle>
          </ContactUsHeader>
        </ContactUsContainer>
        <a href="#introduction">
          <TopOfPage>
            <TopOfPageIcon src={topOfPageIcon} />
          </TopOfPage>
        </a>
        <ContactUsFooter />
      </ContactUs>
    </form>
  );
}

const Introduction = styled.div`
  flex: 1;
  max-height: 1099px;
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
`;

const Frame1 = styled.div`
  margin-left: 1px;
  height: 284px;
  width: 243px;
  align-self: center;
  position: relative;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
`;

const About = styled.div`
  ${OutfitSemiBoldWhite25px}
  align-self: flex-end;
  margin-right: 53.7px;
  width: 133.3333282470703px;
  height: 32px;
  margin-top: 20px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Gamification = styled.div`
  ${OutfitSemiBoldWhite25px}
  margin-left: 4px;
  height: 32px;
  width: 211px;
  align-self: center;
  margin-top: 18px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Productivity = styled.div`
  ${OutfitSemiBoldWhite25px}
  height: 32px;
  width: 211px;
  align-self: center;
  margin-top: 26px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Place = styled.div`
  ${OutfitSemiBoldWhite25px}
  margin-left: 56px;
  width: 133.3333282470703px;
  height: 32px;
  margin-top: 31px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Waitlist = styled.div`
  flex: 1;
  max-height: 674px;
  margin-top: 97px;
  display: flex;
  flex-direction: column;
  padding: 0 32.9px;
  align-items: center;
  min-height: 674px;
  background-color: var(--haiti-2);
`;

const Rocket = styled.img`
  width: 96px;
  height: 90px;
  margin-top: -45px;
  margin-right: 2px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.1);
  cursor: pointer;

  &.animate-enter12 {
    display: block;
    animation: animate-enter12-frames 0.4s ease-in-out 0.2s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const WaitlistContainer = styled.div`
  width: 254px;
  height: 275px;
  position: relative;
  align-self: flex-start;
  margin-top: 40px;
`;

const WaitlistTextGroup = styled.div`
  position: absolute;
  width: 212px;
  height: 176px;
  top: 0;
  left: 21px;
  opacity: 0;

  &.animate-enter11 {
    animation: animate-enter11-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const WaitlistTitle = styled.div`
  ${OutfitSemiBoldWhite35px}
  height: 176px;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistSubtitle = styled.p`
  ${OutfitSemiBoldMountainMist16px}
  position: absolute;
  width: 254px;
  top: 175px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistForm = styled.div`
  width: 209px;
  height: 180px;
  margin-top: 28px;
  margin-right: 2.67px;
  display: flex;
  flex-direction: column;
`;

const WaitlistFormInput = styled.div`
  flex: 1;
  max-height: 49px;
  margin-top: 26.5px;
  display: flex;
  background-color: var(--port-gore);
  border-radius: 24px;
  box-shadow: 0px 0px 12px #b1c7ff;
`;

const InputPlaceholderText = styled.input`
  ${OutfitNormalCloud20px}
  margin-top: 6.5px;
  width: 162px;
  height: 36px;
  margin-left: 12.82%;
  margin-right: 9.63%;
  flex: 1;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #c6c6c699;
  }
`;

const WaitlistFormSubmitButton = styled.div`
  width: 208.88888549804688px;
  height: 49px;
  margin-top: 29px;
  display: flex;
  background-color: var(--haiti);
  border-radius: 24px;
  box-shadow: 0px 0px 12px #b1c7ff;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #222053;
  }
`;

const ButtonText = styled.div`
  ${ValignTextMiddle}
  ${OutfitSemiBoldWhite20px}
            margin-top: 2.5px;
  width: 364px;
  height: 43px;
  margin-left: 22.5px;
  letter-spacing: 0;
`;

const AboutUs = styled.div`
  flex: 1;
  max-height: 964px;
  display: flex;
  padding: 73px 0;
  align-items: flex-start;
  background: linear-gradient(
    180deg,
    rgb(22.000000588595867, 21.000000648200512, 53.00000064074993) 0%,
    rgb(62.00000010430813, 59.00000028312206, 147.00000643730164) 100%
  );
`;

const AboutUsMain = styled.div`
  width: 295px;
  height: 817px;
  background-color: var(--scampi);
  border-radius: 0px 48px 48px 0px;
  box-shadow: 0px 0px 30px #928ef940;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter10 {
    animation: animate-enter10-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const AboutUsTop = styled.div`
  margin-top: 107px;
  width: 260.2105407714844px;
  height: 510px;
  margin-left: 5.86%;
  margin-right: 5.86%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AboutUsTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 199.8445281982422px;
`;

const AboutUsTitle = styled.div`
  ${OutfitExtraBoldWhite45px}
  width: 270px;
  margin-top: -1px;
  min-height: 66px;
  text-align: center;
  letter-spacing: 0;
`;

const ProdicityLogoLarge = styled.img`
  width: 103px;
  height: 107px;
  margin-top: 28px;
  margin-right: 1.25px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const AboutUsTopRight = styled.div`
  flex: 1;
  max-height: 289px;
  margin-top: 128px;
  display: flex;
  align-items: center;
`;

const ProdicityDescription = styled.div`
  ${ValignTextMiddle}
  ${OutfitNormalWhite22px}
            margin-top: -1.7px;
  height: 449px;
  margin-left: -2px;
  margin-right: -0.8px;
  flex: 1;
  text-align: center;
  letter-spacing: 0;
`;

const Gamilification = styled.div`
  flex: 1;
  max-height: 890px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgb(59.00000028312206, 57.00000040233135, 141.0000067949295) 0%,
    rgb(50.000000819563866, 48.000000938773155, 114.0000008046627) 100%
  );
`;

const GamificationHeader = styled.div`
  margin-left: 1.71%;
  margin-right: 1.71%;
  flex: 1;
  max-height: 319px;
  margin-top: 45px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter9 {
    animation: animate-enter9-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const GamilificationHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite36px}
  margin-right: 0.1px;
  flex: 1;
  max-height: 90px;
  margin-top: 55px;
  height: 90px;
  text-align: center;
  letter-spacing: 0;
`;

const GamilificationHeaderSubtitle = styled.div`
  ${OutfitSemiBoldWhite24px}
  flex: 1;
  max-height: 105px;
  margin-top: 49px;
  height: 105px;
  text-align: center;
  letter-spacing: 0;
`;

const Productivity1 = styled.div`
  flex: 1;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgb(49.00000087916851, 47.0000009983778, 110.00000104308128) 0%,
    rgb(58.00000034272671, 55.00000052154064, 140.00000685453415) 100%
  );
`;

const GroupSessions = styled.div`
  margin-left: 11.56%;
  margin-right: 11.56%;
  flex: 1;
  max-height: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const GroupSessionsImage = styled.img`
  margin-left: 30.05%;
  margin-right: 30.11%;
  flex: 1;
  max-height: 156px;
  margin-top: 53px;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(-25px, 0);
  cursor: pointer;

  &.animate-enter4 {
    display: block;
    animation: animate-enter4-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const GroupSessionsTextGroup = styled.div`
  flex: 1;
  max-height: 253px;
  flex-direction: column;
  opacity: 0;
  transform: translate(25px, 0);

  &.animate-enter3 {
    animation: animate-enter3-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }
`;

const GroupSessionsTitle = styled.div`
  ${OutfitSemiBoldWhite36px}
  width: 246px;
  height: 90px;
  margin-top: 9.5px;
  text-align: center;
  letter-spacing: 0;
`;

const GroupSessionsDescription = styled.p`
  ${OutfitNormalWhite15px}
  width: 246px;
  height: 114px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0;
`;

const Marketplace = styled.div`
  margin-left: 11.56%;
  margin-right: 11.56%;
  flex: 1;
  max-height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 45px 0;
  align-items: center;
`;

const MarketplaceImage = styled.img`
  width: 94px;
  height: 156px;
  margin-right: 0.1px;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(25px, 0);
  cursor: pointer;

  &.animate-enter6 {
    display: block;
    animation: animate-enter6-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const MarketplaceTextGroup = styled.div`
  width: 246px;
  height: 253px;
  flex-direction: column;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter5 {
    animation: animate-enter5-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const MarketplaceTitle = styled.div`
  ${OutfitSemiBoldWhite36px}
  height: 45px;
  margin-top: 49.5px;
  text-align: center;
  letter-spacing: 0;
`;

const MarketplaceDescription = styled.p`
  ${OutfitNormalWhite15px}
  height: 79px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0;
`;

const Differentiation = styled.div`
  flex: 1;
  max-height: 1773px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    180deg,
    rgb(58.00000034272671, 55.00000052154064, 140.00000685453415) 0%,
    rgb(22.000000588595867, 21.000000648200512, 53.00000064074993) 100%
  );
`;

const DifferentContainer = styled.div`
  width: 320px;
  height: 1713px;
  position: relative;
`;

const DifferentationMain = styled.div`
  position: absolute;
  width: 320px;
  height: 1513px;
  top: 200px;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const Quests = styled.div`
  margin-left: 9.87%;
  margin-right: 9.93%;
  flex: 1;
  max-height: 299px;
  margin-top: 194px;
  display: flex;
  flex-direction: column;
  background-color: var(--indigo);
  border-radius: 40px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const QuestsImage = styled.img`
  margin-left: -1.6px;
  height: 126px;
  width: 191.2509765625px;
  align-self: center;
  margin-top: -72px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const QuestsTextGroup = styled.div`
  margin-right: -0.4px;
  flex: 1;
  max-height: 192px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const QuestsTitle = styled.div`
  ${OutfitSemiBoldWhite30px}
  margin-left: -11.99%;
  margin-right: -12.02%;
  flex: 1;
  max-height: 70px;
  margin-bottom: 15px;
  text-align: center;
  letter-spacing: 0;
`;

const QuestsDescription = styled.div`
  ${OutfitNormalWhite20px}
  flex: 1;
  max-height: 86px;
  text-align: center;
  letter-spacing: 0;
`;

const Clans = styled.div`
  margin-left: 9.87%;
  margin-right: 9.93%;
  flex: 1;
  max-height: 299px;
  margin-top: 141px;
  display: flex;
  align-items: flex-start;
  min-width: 80.2%;
  background-color: var(--cornflower-blue);
  border-radius: 40px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const ClansContainer = styled.div`
  width: 276px;
  height: 396px;
  position: relative;
  margin-left: -10px;
  margin-top: -89px;
`;

const ClansTextGroup = styled.div`
  position: absolute;
  width: 257px;
  height: 227px;
  top: 169px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ClansTitle = styled.div`
  ${OutfitSemiBoldWhite30px}
  margin-left: 1.55%;
  margin-right: 1.7%;
  flex: 1;
  max-height: 63.227272033691406px;
  margin-bottom: 17.8px;
  text-align: center;
  letter-spacing: 0;
`;

const ClansDescription = styled.div`
  ${OutfitNormalWhite20px}
  margin-left: 3.76%;
  margin-right: 3.9%;
  flex: 1;
  max-height: 106px;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: 0;
`;

const ClansImage = styled.img`
  position: absolute;
  width: 276px;
  height: 177px;
  top: 0;
  left: 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const Challenges = styled.div`
  margin-left: 9.87%;
  margin-right: 9.93%;
  flex: 1;
  max-height: 299px;
  margin-top: 141px;
  display: flex;
  flex-direction: column;
  background-color: var(--sapphire);
  border-radius: 40px;
  box-shadow: 0px 0px 30px #ccdaff;
`;

const ChallengesImage = styled.img`
  margin-left: 0;
  height: 132px;
  width: 184.80419921875px;
  align-self: center;
  margin-top: -66px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const ChallengesTextGroup = styled.div`
  margin-right: -0.4px;
  flex: 1;
  max-height: 208px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChallengesTitle = styled.div`
  ${OutfitSemiBoldWhite30px}
  margin-left: -4.65%;
  margin-right: -4.52%;
  flex: 1;
  max-height: 59px;
  margin-bottom: 18px;
  text-align: center;
  letter-spacing: 0;
`;

const ChallengesDescription = styled.div`
  ${OutfitNormalWhite20px}
  margin-left: 3.72%;
  margin-right: 3.72%;
  flex: 1;
  max-height: 106px;
  margin-bottom: 7px;
  text-align: center;
  letter-spacing: 0;
`;

const DifferentiationHeader = styled.div`
  position: absolute;
  width: 286px;
  height: 220px;
  top: 0;
  left: 17px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter2 {
    animation: animate-enter2-frames 1s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const DifferentiationHeaderSubtitle = styled.div`
  ${OutfitSemiBoldWhite36px}
  margin-right: -0.1px;
  flex: 1;
  max-height: 42px;
  height: 42px;
  text-align: center;
  letter-spacing: 0;
`;

const DifferentiationHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite40px}
  margin-left: -6.8px;
  margin-right: -7.3px;
  flex: 1;
  max-height: 136px;
  margin-top: 68px;
  height: 136px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUs = styled.div`
  flex: 1;
  max-height: 1609px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 26px 0;
  align-items: center;
  min-height: 1609px;
  background-color: var(--haiti);
`;

const ContactUsContainer = styled.div`
  width: 287px;
  height: 1368px;
  position: relative;
  margin-top: 48px;
  margin-left: 4.21px;
`;

const ContactUsMain = styled.div`
  position: absolute;
  width: 287px;
  top: 202px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1166px;
`;

const ContactUsLeft = styled.div`
  width: 287px;
  height: 557px;
  display: flex;
  justify-content: center;
`;

const ContactUsForm = styled.div`
  margin-top: -82px;
  width: 287.15789794921875px;
  height: 721.3895874023438px;
  display: flex;
  flex-direction: column;
`;

const ContactUsFormEmail = styled.div`
  position: relative;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  padding: 21.5px 0;
  align-items: flex-start;
  min-height: 131px;
`;

const ContactUsFormEmailLabel = styled.div`
  ${OutfitSemiBoldWhite20px}
  width: 105px;
  min-height: 30px;
  letter-spacing: 0;
`;

const ContactUsFormSubject = styled.div`
  position: relative;
  margin-top: 12.1px;
  display: flex;
  flex-direction: column;
  padding: 35.5px 0;
  align-items: flex-start;
  min-height: 144px;
`;

const ContactUsFormSubjectLabel = styled.img`
  width: 71px;
  height: 19px;
  margin-left: -0.18px;
`;

const ContactUsFormMessage = styled.div`
  margin-top: 12.1px;
  display: flex;
  flex-direction: column;
  padding: 14.4px 0;
  align-items: flex-start;
  min-height: 259px;
`;

const ContactUsFormMessageLabel = styled.div`
  ${OutfitSemiBoldWhite20px}
  width: 242px;
  min-height: 30px;
  letter-spacing: 0;
`;

const ContactUsFormMessageInput = styled.div`
  width: 287px;
  height: 188px;
  margin-top: 11px;
  display: flex;
  align-items: center;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 30px #5881d1;
`;

const EmailInputPlaceholderText = styled.input`
  ${OutfitNormalCloud15px}
  margin-top: 0.6px;
  height: 157px;
  margin-left: 18px;
  margin-right: 20.2px;
  flex: 1;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #c6c6c699;
  }
`;

const ContactUsFormSubmitButton = styled.div`
  margin-left: 65.6px;
  width: 156px;
  height: 46px;
  margin-top: 12.1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 30px #5881d1;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #222053;
  }
`;

const SubmitButtonText = styled.div`
  ${OutfitSemiBoldWhite20px}
  margin-top: -1.7px;
  height: 25px;
  margin-left: -0.2px;
  width: 76px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUsRight = styled.div`
  width: 642px;
  height: 515px;
  position: relative;
  margin-top: 94px;
  margin-left: -177.42px;
  opacity: 0;

  &.animate-enter {
    animation: animate-enter-frames 0.2s ease-in-out 0.6s 1 normal forwards;
    opacity: 0;
  }
`;

const ContactUsRightImage = styled.img`
  position: absolute;
  width: 312px;
  height: 198px;
  top: 20px;
  left: 165px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const ContactUsRightInformation = styled.div`
  position: absolute;
  width: 440px;
  height: 169px;
  top: 218px;
  left: 101px;
  display: flex;
  flex-direction: column;
`;

const ContactUsRightLocation = styled.div`
  margin-top: 26px;
  display: flex;
  padding: 0 102.8px;
  align-items: flex-start;
  min-width: 440px;
`;

const IconLocationPin = styled.img`
  width: 31px;
  height: 44px;
  align-self: center;
  margin-bottom: 0.5px;
`;

const ContactUsRightLocationDescription = styled.div`
  ${ValignTextMiddle}
  ${OutfitSemiBoldWhite20px}
            width: 193px;
  height: 69px;
  margin-left: 10px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const ContactUsRightEmail = styled.div`
  margin-top: 14.1px;
  display: flex;
  padding: 0 74.2px;
  align-items: flex-start;
  min-width: 440px;
  cursor: pointer;
`;

const IconMail = styled.img`
  width: 41px;
  height: 34px;
  margin-top: -0.25px;
`;

const ContactUsRightEmailDescription = styled.div`
  ${ValignTextMiddle}
  ${OutfitSemiBoldWhite20px}
            width: 240px;
  height: 34px;
  margin-left: 10px;
  margin-top: -1px;
  letter-spacing: 0;
  text-decoration: underline;
  cursor: pointer;
`;

const SocialMediaIcons = styled.div`
  position: absolute;
  height: 108px;
  top: 387px;
  left: 0;
  display: flex;
  padding: 39.8px 163.2px;
  align-items: flex-start;
  min-width: 642px;
`;

const SocialMediaIconsYoutube = styled.img`
  width: 40px;
  height: 27px;
  align-self: center;
  margin-bottom: 0.31px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsDiscord = styled.img`
  width: 40px;
  height: 27px;
  margin-left: 15px;
  margin-top: 0.25px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconFacebook = styled.img`
  width: 40px;
  height: 27px;
  align-self: center;
  margin-left: 15px;
  margin-bottom: 0.31px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsTiktok = styled.img`
  width: 40px;
  height: 28px;
  margin-left: 15px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactUsHeader = styled.div`
  position: absolute;
  width: 247px;
  height: 222px;
  top: 0;
  left: 16px;
  opacity: 0;

  &.animate-enter1 {
    animation: animate-enter1-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const ContactUsHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite60px}
  position: absolute;
  width: 612px;
  top: 19px;
  left: -183px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUsHeaderSubtitle = styled.p`
  ${OutfitLightCloud15px}
  position: absolute;
  width: 247px;
  top: 127px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const TopOfPage = styled.div`
  width: 75px;
  height: 75px;
  margin-right: 1px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: var(--blue-violet);
  border-radius: 37.5px;
  box-shadow: 0px 0px 30px 1px #8e8bdd;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const TopOfPageIcon = styled.img`
  margin-bottom: 17.9px;
  width: 44.18359375px;
  height: 38.0322265625px;
  margin-left: 1.4px;
`;

export default LandingPageSLV22;
