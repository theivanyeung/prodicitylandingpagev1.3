import React from "react";
import GroupSessionsTextGroup3 from "../GroupSessionsTextGroup3";
import ContactUsFormSubmitButton from "../ContactUsFormSubmitButton";
import ContactUsHeader from "../ContactUsHeader";
import ContactUsFooter2 from "../ContactUsFooter2";
import styled from "styled-components";
import {
  OutfitSemiBoldWhite30px,
  OutfitNormalWhite25px,
  OutfitSemiBoldWhite25px,
  OutfitNormalWhite36px,
  OutfitNormalCloud30px,
  OutfitSemiBoldWhite40px,
  OutfitSemiBoldWhite80px,
  OutfitSemiBoldMountainMist25px,
  OutfitNormalCloud20px,
  OutfitSemiBoldWhite60px,
  OutfitSemiBoldWhite36px,
} from "../../styledMixins";
import "./LandingPageLV22.css";

function LandingPageLV22(props) {
  const {
    introduction,
    navBarLeft,
    about,
    featuresText,
    triangle,
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
    socialMediaIconsYoutube1,
    socialMediaIconsDiscord1,
    iconFacebook1,
    iconTwitter1,
    socialMediaIconsTiktok1,
    iconInstagram1,
    gamilificationHeaderTitle,
    gamilificationHeaderSubtitle,
    group2,
    groupSessionsImage,
    marketplaceImage,
    questsImage,
    questsTitle,
    questsDescription,
    clansImage,
    clansTitle,
    clansDescription,
    challengesImage,
    challengesTitle,
    challengesDescription,
    differentiationHeaderSubtitle,
    differentiationHeaderTitle,
    topOfPageIcon,
    contactUsFormEmailLabel,
    inputType2,
    inputPlaceholder2,
    contactUsFormSubjectLabel,
    inputType3,
    inputPlaceholder3,
    contactUsFormMessageLabel,
    inputType4,
    inputPlaceholder4,
    contactUsRightImage,
    iconLocation_Pin,
    contactUsRightLocationDescription,
    iconMail,
    contactUsRightEmailDescription,
    socialMediaIconsYoutube2,
    socialMediaIconsDiscord2,
    iconFacebook2,
    iconTwitter2,
    socialMediaIconsTiktok2,
    iconInstagram2,
    groupSessionsTextGroup31Props,
    groupSessionsTextGroup32Props,
    contactUsFormSubmitButtonProps,
    contactUsHeaderProps,
    contactUsFooter2Props,
  } = props;

  return (
    <div className="landing-page-l-v2-2 screen">
      <Introduction style={{ backgroundImage: `url(${introduction})` }} id="introduction">
        <NavBar>
          <NavBarLeft style={{ backgroundImage: `url(${navBarLeft})` }}></NavBarLeft>
          <NavBarRight>
            <a href="#about-us">
              <About>{about}</About>
            </a>
            <Features>
              <FeaturesText>{featuresText}</FeaturesText>
              <FeaturesDropDown>
                <GroupContainer>
                  <AngleContainer>
                    <Rectangle></Rectangle>
                    <Triangle src={triangle} />
                  </AngleContainer>
                  <FeaturesDropDownTextGroup>
                    <a href="#gamilification">
                      <Gamification>{gamification}</Gamification>
                    </a>
                    <a href="#productivity">
                      <Productivity>{productivity}</Productivity>
                    </a>
                  </FeaturesDropDownTextGroup>
                </GroupContainer>
              </FeaturesDropDown>
            </Features>
            <a href="#contact-us">
              <Place>{place}</Place>
            </a>
          </NavBarRight>
        </NavBar>
        <Waitlist>
          <Rocket className="animate-enter65" src={rocket} />
          <WaitlistTextGroup className="animate-enter64">
            <WaitlistTitle>{waitlistTitle}</WaitlistTitle>
          </WaitlistTextGroup>
          <WaitlistSubtitle>{waitlistSubtitle}</WaitlistSubtitle>
          <WaitlistForm>
            <WaitlistFormInput>
              <InputPlaceholderText name="inputplaceholdertext" placeholder={inputPlaceholder1} type={inputType1} />
            </WaitlistFormInput>
            <WaitlistFormSubmitButton>
              <ButtonText>{buttonText}</ButtonText>
            </WaitlistFormSubmitButton>
          </WaitlistForm>
        </Waitlist>
        <Rectangle21></Rectangle21>
      </Introduction>
      <AboutUs id="about-us">
        <AboutUsMain className="animate-enter63" show-on-scroll>
          <AboutUsTop>
            <AboutUsTopLeft>
              <AboutUsTitle>{aboutUsTitle}</AboutUsTitle>
              <ProdicityLogoLarge src={prodicityLogoLarge} />
            </AboutUsTopLeft>
            <AboutUsTopRight>
              <ProdicityDescription>{prodicityDescription}</ProdicityDescription>
            </AboutUsTopRight>
          </AboutUsTop>
          <AboutUsBottom className="animate-enter62">
            <SocialMediaIcons>
              <a href="https://www.youtube.com/channel/UCjTUwakfSnLJC0t2H0YM0jA" target="_blank">
                <SocialMediaIconsYoutube src={socialMediaIconsYoutube1} />
              </a>
              <a href="https://discord.gg/PkHRjWzeDc" target="_blank">
                <SocialMediaIconsDiscord src={socialMediaIconsDiscord1} />
              </a>
              <a href="https://www.facebook.com/Prodicity/" target="_blank">
                <IconFacebook src={iconFacebook1} />
              </a>
              <a href="https://twitter.com/prodicity" target="_blank">
                <SocialMediaIconsDiscord src={iconTwitter1} />
              </a>
              <a href="https://www.tiktok.com/@prodicity" target="_blank">
                <SocialMediaIconsTiktok src={socialMediaIconsTiktok1} />
              </a>
              <a href="https://www.instagram.com/prodicityteam/?hl=en" target="_blank">
                <SocialMediaIconsDiscord src={iconInstagram1} />
              </a>
            </SocialMediaIcons>
          </AboutUsBottom>
        </AboutUsMain>
      </AboutUs>
      <Gamilification id="gamilification">
        <GamificationHeader className="animate-enter61">
          <GamilificationHeaderTitle>{gamilificationHeaderTitle}</GamilificationHeaderTitle>
          <GamilificationHeaderSubtitle>{gamilificationHeaderSubtitle}</GamilificationHeaderSubtitle>
        </GamificationHeader>
        <Group2 src={group2} />
      </Gamilification>
      <Productivity1 id="productivity">
        <GroupSessions>
          <GroupSessionsImage className="animate-enter58" show-on-scroll src={groupSessionsImage} />
          <GroupSessionsTextGroup3
            groupSessionsTitle={groupSessionsTextGroup31Props.groupSessionsTitle}
            groupSessionsDescription={groupSessionsTextGroup31Props.groupSessionsDescription}
          />
        </GroupSessions>
        <Marketplace>
          <GroupSessionsTextGroup3
            groupSessionsTitle={groupSessionsTextGroup32Props.groupSessionsTitle}
            groupSessionsDescription={groupSessionsTextGroup32Props.groupSessionsDescription}
            className={groupSessionsTextGroup32Props.className}
          />
          <MarketplaceImage className="animate-enter59" show-on-scroll src={marketplaceImage} />
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
              <ClansImage src={clansImage} />
              <ClansTextGroup>
                <ClansTitle>{clansTitle}</ClansTitle>
                <ClansDescription>{clansDescription}</ClansDescription>
              </ClansTextGroup>
            </Clans>
            <Challenges>
              <ChallengesImage src={challengesImage} />
              <ChallengesTextGroup>
                <ChallengesTitle>{challengesTitle}</ChallengesTitle>
                <ChallengesDescription>{challengesDescription}</ChallengesDescription>
              </ChallengesTextGroup>
            </Challenges>
          </DifferentationMain>
          <DifferentiationHeader className="animate-enter56" show-on-scroll>
            <DifferentiationHeaderSubtitle>{differentiationHeaderSubtitle}</DifferentiationHeaderSubtitle>
            <DifferentiationHeaderTitle>{differentiationHeaderTitle}</DifferentiationHeaderTitle>
          </DifferentiationHeader>
        </DifferentContainer>
      </Differentiation>
      <ContactUs id="contact-us">
        <OverlapGroup>
          <a href="#introduction">
            <TopOfPage>
              <TopOfPageIcon src={topOfPageIcon} />
            </TopOfPage>
          </a>
          <ContactUsMain>
            <ContactUsLeft>
              <ContactUsForm>
                <ContactUsFormEmail>
                  <ContactUsFormEmailLabel>{contactUsFormEmailLabel}</ContactUsFormEmailLabel>
                  <ContactUsFormEmailInput>
                    <EmailInputPlaceholderText
                      name="emailinputplaceholdertext"
                      placeholder={inputPlaceholder2}
                      type={inputType2}
                    />
                  </ContactUsFormEmailInput>
                </ContactUsFormEmail>
                <ContactUsFormSubject>
                  <ContactUsFormSubjectLabel>{contactUsFormSubjectLabel}</ContactUsFormSubjectLabel>
                  <ContactUsFormEmailInput>
                    <SubjectInputPlaceholderText
                      name="subjectinputplaceholdertext"
                      placeholder={inputPlaceholder3}
                      type={inputType3}
                    />
                  </ContactUsFormEmailInput>
                </ContactUsFormSubject>
                <ContactUsFormMessage>
                  <ContactUsFormSubjectLabel>{contactUsFormMessageLabel}</ContactUsFormSubjectLabel>
                  <ContactUsFormMessageInput>
                    <MessageInputPlaceholderText
                      name="messageinputplaceholdertext"
                      placeholder={inputPlaceholder4}
                      type={inputType4}
                    />
                  </ContactUsFormMessageInput>
                </ContactUsFormMessage>
                <ContactUsFormSubmitButton className={contactUsFormSubmitButtonProps.className} />
              </ContactUsForm>
            </ContactUsLeft>
            <ContactUsRight className="animate-enter54">
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
                    <a href="mailto:prodicityteam@gmail.com" target="_blank" className="align-self-flex-center">
                      <ContactUsRightEmailDescription>{contactUsRightEmailDescription}</ContactUsRightEmailDescription>
                    </a>
                  </ContactUsRightEmail>
                </a>
              </ContactUsRightInformation>
              <SocialMediaIcons1>
                <a href="https://www.youtube.com/channel/UCjTUwakfSnLJC0t2H0YM0jA" target="_blank">
                  <SocialMediaIconsYoutube1 src={socialMediaIconsYoutube2} />
                </a>
                <a href="https://discord.gg/PkHRjWzeDc" target="_blank">
                  <SocialMediaIconsDiscord1 src={socialMediaIconsDiscord2} />
                </a>
                <a href="https://www.facebook.com/Prodicity/" target="_blank">
                  <IconFacebook1 src={iconFacebook2} />
                </a>
                <a href="https://twitter.com/prodicity" target="_blank">
                  <SocialMediaIconsDiscord1 src={iconTwitter2} />
                </a>
                <a href="https://www.tiktok.com/@prodicity" target="_blank">
                  <SocialMediaIconsTiktok1 src={socialMediaIconsTiktok2} />
                </a>
                <a href="https://www.instagram.com/prodicityteam/?hl=en" target="_blank">
                  <SocialMediaIconsDiscord1 src={iconInstagram2} />
                </a>
              </SocialMediaIcons1>
            </ContactUsRight>
          </ContactUsMain>
          <ContactUsHeader className={contactUsHeaderProps.className} />
        </OverlapGroup>
        <ContactUsFooter2 className={contactUsFooter2Props.className} />
      </ContactUs>
    </div>
  );
}

const Introduction = styled.div`
  flex: 1;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
`;

const NavBar = styled.div`
  height: 82px;
  margin-top: 39px;
  margin-left: 1px;
  display: flex;
  padding: 0 40px;
  align-items: flex-start;
  min-width: 1583px;
`;

const NavBarLeft = styled.div`
  width: 243px;
  height: 61px;
  align-self: center;
  margin-bottom: 1px;
  background-size: 100% 100%;
`;

const NavBarRight = styled.div`
  height: 631px;
  margin-left: 500px;
  margin-top: -274.5px;
  display: flex;
  padding: 0 60px;
  justify-content: flex-end;
  align-items: center;
  min-width: 760px;
`;

const About = styled.div`
  ${OutfitSemiBoldWhite25px}
  width: 133px;
  min-height: 32px;
  margin-bottom: 2px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Features = styled.div`
  width: 239px;
  height: 611px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FeaturesText = styled.div`
  ${OutfitSemiBoldWhite25px}
  margin-right: 69.5px;
  width: 100px;
  height: 32px;
  margin-top: 290px;
  text-shadow: 0px 4px 4px #ffffff40;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const FeaturesDropDown = styled.div`
  height: 229px;
  margin-top: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 239px;
`;

const GroupContainer = styled.div`
  width: 239px;
  height: 222px;
  position: relative;
  margin-top: -32px;
`;

const AngleContainer = styled.div`
  position: absolute;
  width: 239px;
  height: 222px;
  top: 0;
  left: 0;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 239px;
  height: 190px;
  top: 32px;
  left: 0;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 32px #5880d1;
`;

const Triangle = styled.img`
  position: absolute;
  width: 50px;
  height: 39px;
  top: 0;
  left: 94px;
`;

const FeaturesDropDownTextGroup = styled.div`
  position: absolute;
  width: 211px;
  height: 103px;
  top: 70px;
  left: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gamification = styled.div`
  ${OutfitSemiBoldWhite25px}
  height: 32px;
  width: 211px;
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
  margin-top: 39px;
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
  width: 133px;
  min-height: 32px;
  margin-left: 60px;
  margin-bottom: 2px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Waitlist = styled.div`
  width: 1545px;
  margin-top: 113px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 846px;
  background-color: var(--haiti-2);
`;

const Rocket = styled.img`
  width: 160px;
  height: 150px;
  margin-top: -75px;
  margin-right: 1px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.1);
  cursor: pointer;

  &.animate-enter65 {
    display: block;
    animation: animate-enter65-frames 0.4s ease-in-out 0.2s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const WaitlistTextGroup = styled.div`
  width: 828px;
  height: 202px;
  margin-top: 46px;
  margin-right: 1px;
  opacity: 0;

  &.animate-enter64 {
    animation: animate-enter64-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const WaitlistTitle = styled.div`
  ${OutfitSemiBoldWhite80px}
  width: 932px;
  height: 202px;
  margin-left: -52px;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistSubtitle = styled.div`
  ${OutfitSemiBoldMountainMist25px}
  width: 996px;
  min-height: 64px;
  margin-top: 42px;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistForm = styled.div`
  width: 1189px;
  height: 86px;
  margin-top: 86px;
  display: flex;
`;

const WaitlistFormInput = styled.div`
  margin-top: 0;
  width: 801px;
  height: 85.92372131347656px;
  display: flex;
  background-color: var(--port-gore);
  border-radius: 24px 0px 0px 24px;
  box-shadow: 0px 0px 12px #b1c7ff;
`;

const InputPlaceholderText = styled.input`
  ${OutfitNormalCloud30px}
  margin-top: 24.8px;
  width: 716.9857177734375px;
  height: 36.27890396118164px;
  margin-left: 39.1px;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #c6c6c699;
  }
`;

const WaitlistFormSubmitButton = styled.div`
  width: 388px;
  height: 86.00984954833984px;
  display: flex;
  background-color: var(--haiti);
  border-radius: 0px 24px 24px 0px;
  box-shadow: 0px 0px 12px #b1c7ff;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #222053;
  }
`;

const ButtonText = styled.div`
  ${OutfitSemiBoldWhite25px}
  margin-top: 27.7px;
  width: 377.4876708984375px;
  height: 43.00492477416992px;
  text-align: center;
  letter-spacing: 0;
`;

const Rectangle21 = styled.div`
  width: 1920px;
  height: 1057px;
  background-color: #d9d9d9;
`;

const AboutUs = styled.div`
  flex: 1;
  max-height: 1080px;
  display: flex;
  padding: 143px 0;
  align-items: flex-end;
  background: linear-gradient(
    180deg,
    rgb(22.000000588595867, 21.000000648200512, 53.00000064074993) 0%,
    rgb(62.00000010430813, 59.00000028312206, 147.00000643730164) 100%
  );
`;

const AboutUsMain = styled.div`
  width: 1769px;
  height: 751px;
  flex-direction: column;
  background-color: var(--scampi);
  border-radius: 0px 48px 48px 0px;
  box-shadow: 0px 0px 30px #928ef940;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter63 {
    animation: animate-enter63-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const AboutUsTop = styled.div`
  margin-left: 7.85%;
  margin-right: 6.78%;
  flex: 1;
  max-height: 488px;
  margin-top: 91px;
  display: flex;
  align-items: center;
  min-width: 85.37%;
`;

const AboutUsTopLeft = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 449px;
`;

const AboutUsTitle = styled.div`
  width: 360px;
  margin-top: -1px;
  min-height: 120px;
  font-family: var(--font-family-outfit);
  font-weight: 800;
  color: var(--white);
  font-size: 80px;
  text-align: center;
  letter-spacing: 0;
`;

const ProdicityLogoLarge = styled.img`
  width: 290px;
  height: 302px;
  margin-top: 27px;
  margin-right: 1px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const AboutUsTopRight = styled.div`
  width: 690px;
  height: 488px;
  margin-left: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProdicityDescription = styled.div`
  ${OutfitNormalWhite36px}
  margin-top: 39px;
  height: 449px;
  margin-left: 79px;
  width: 723px;
  letter-spacing: 0;
`;

const AboutUsBottom = styled.div`
  margin-left: 471.2px;
  width: 826.6469116210938px;
  height: 57.82475662231445px;
  margin-top: 56px;
  justify-content: center;
  opacity: 0;

  &.animate-enter62 {
    animation: animate-enter62-frames 0.2s ease-in-out 0.6s 1 normal forwards;
    opacity: 0;
  }
`;

const SocialMediaIcons = styled.div`
  height: 57.82475662231445px;
  display: flex;
  padding: 0 36.8px;
  align-items: flex-start;
  min-width: 826.6469116210938px;
`;

const SocialMediaIconsYoutube = styled.img`
  width: 85px;
  height: 58px;
  margin-top: -0.09px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsDiscord = styled.img`
  width: 86px;
  height: 58px;
  margin-left: 48px;
  margin-top: -0.09px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconFacebook = styled.img`
  width: 85px;
  height: 58px;
  margin-left: 48px;
  margin-top: -0.09px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsTiktok = styled.img`
  width: 84px;
  height: 58px;
  margin-left: 48px;
  margin-top: -0.09px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Gamilification = styled.div`
  flex: 1;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgb(59.00000028312206, 57.00000040233135, 141.0000067949295) 0%,
    rgb(50.000000819563866, 48.000000938773155, 114.0000008046627) 100%
  );
`;

const GamificationHeader = styled.div`
  margin-left: 14.84%;
  margin-right: 14.9%;
  flex: 1;
  max-height: 232px;
  margin-top: 40px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter61 {
    animation: animate-enter61-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const GamilificationHeaderTitle = styled.h1`
  height: 126px;
  width: 1141px;
  align-self: center;
  margin-top: 16px;
  font-family: var(--font-family-outfit);
  font-weight: 600;
  color: var(--white);
  font-size: 100px;
  text-align: center;
  letter-spacing: 0;
`;

const GamilificationHeaderSubtitle = styled.div`
  ${OutfitSemiBoldWhite30px}
  flex: 1;
  max-height: 38px;
  margin-top: 52px;
  height: 38px;
  text-align: center;
  letter-spacing: 0;
`;

const Group2 = styled.img`
  margin-left: -1.2px;
  height: 443px;
  width: 849.3818359375px;
  align-self: center;
  margin-top: 152px;
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
  margin-left: 7.6%;
  margin-right: 7.6%;
  flex: 1;
  max-height: 418px;
  position: relative;
  margin-top: 71px;
  display: flex;
  align-items: flex-start;
`;

const GroupSessionsImage = styled.img`
  width: 742px;
  height: 418px;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(-25px, 0);
  cursor: pointer;

  &.animate-enter58 {
    display: block;
    animation: animate-enter58-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const Marketplace = styled.div`
  margin-left: 7.6%;
  margin-right: 7.6%;
  flex: 1;
  max-height: 430.5px;
  position: relative;
  margin-top: 89.5px;
  display: flex;
  align-items: flex-start;
`;

const MarketplaceImage = styled.img`
  width: 738px;
  height: 409px;
  align-self: flex-end;
  margin-left: 151px;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(25px, 0);
  cursor: pointer;

  &.animate-enter59 {
    display: block;
    animation: animate-enter59-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const Differentiation = styled.div`
  flex: 1;
  max-height: 1080px;
  display: flex;
  padding: 0 66px;
  align-items: flex-end;
  background: linear-gradient(
    180deg,
    rgb(58.00000034272671, 55.00000052154064, 140.00000685453415) 0%,
    rgb(22.000000588595867, 21.000000648200512, 53.00000064074993) 100%
  );
`;

const DifferentContainer = styled.div`
  width: 1787px;
  height: 1020px;
  position: relative;
  margin-left: 1px;
`;

const DifferentationMain = styled.div`
  position: absolute;
  width: 1787px;
  height: 820px;
  top: 200px;
  left: 0;
  display: flex;
  padding: 0 27px;
  align-items: flex-end;
`;

const Quests = styled.div`
  width: 535px;
  height: 417px;
  margin-left: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--indigo);
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const QuestsImage = styled.img`
  margin-left: 10.09%;
  margin-right: 16.26%;
  flex: 1;
  max-height: 287px;
  margin-bottom: 28px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const QuestsTextGroup = styled.div`
  margin-left: 115px;
  margin-right: 116px;
  flex: 1;
  max-height: 192px;
  margin-bottom: 74px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const QuestsTitle = styled.div`
  ${OutfitSemiBoldWhite40px}
  margin-left: -14.47%;
  margin-right: -9.54%;
  flex: 1;
  max-height: 70px;
  margin-bottom: 14px;
  text-align: center;
  letter-spacing: 0;
`;

const QuestsDescription = styled.div`
  ${OutfitNormalWhite25px}
  flex: 1;
  max-height: 86px;
  text-align: center;
  letter-spacing: 0;
`;

const Clans = styled.div`
  width: 664px;
  height: 621px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--cornflower-blue);
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const ClansImage = styled.img`
  margin-left: 4.82%;
  margin-right: 4.82%;
  flex: 1;
  max-height: 407px;
  margin-bottom: 31px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const ClansTextGroup = styled.div`
  margin-left: 117px;
  margin-right: 116px;
  flex: 1;
  max-height: 227px;
  margin-bottom: 123px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ClansTitle = styled.div`
  ${OutfitSemiBoldWhite40px}
  flex: 1;
  max-height: 63.227272033691406px;
  margin-bottom: 48.8px;
  text-align: center;
  letter-spacing: 0;
`;

const ClansDescription = styled.div`
  ${OutfitNormalWhite25px}
  margin-left: 2.09%;
  margin-right: 5.57%;
  flex: 1;
  max-height: 106px;
  text-align: center;
  letter-spacing: 0;
`;

const Challenges = styled.div`
  width: 523px;
  height: 527px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--sapphire);
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 0px 30px #ccdaff;
`;

const ChallengesImage = styled.img`
  margin-left: 14.72%;
  margin-right: 8.99%;
  flex: 1;
  max-height: 328px;
  margin-bottom: 42px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const ChallengesTextGroup = styled.div`
  margin-left: 73px;
  margin-right: 74px;
  flex: 1;
  max-height: 208px;
  margin-bottom: 122px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChallengesTitle = styled.div`
  ${OutfitSemiBoldWhite40px}
  margin-left: -4.52%;
  margin-right: -4.65%;
  flex: 1;
  max-height: 59px;
  margin-bottom: 43px;
  text-align: center;
  letter-spacing: 0;
`;

const ChallengesDescription = styled.div`
  ${OutfitNormalWhite25px}
  margin-left: 3.72%;
  margin-right: 3.72%;
  flex: 1;
  max-height: 106px;
  margin-bottom: -17px;
  text-align: center;
  letter-spacing: 0;
`;

const DifferentiationHeader = styled.div`
  position: absolute;
  width: 1778px;
  height: 220px;
  top: 0;
  left: 4px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter56 {
    animation: animate-enter56-frames 1s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const DifferentiationHeaderSubtitle = styled.div`
  ${OutfitSemiBoldWhite36px}
  margin-left: 185px;
  margin-right: 185px;
  flex: 1;
  max-height: 42px;
  height: 42px;
  text-align: center;
  letter-spacing: 0;
`;

const DifferentiationHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite60px}
  margin-left: 185px;
  margin-right: 185px;
  flex: 1;
  max-height: 136px;
  height: 136px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUs = styled.div`
  flex: 1;
  max-height: 1115px;
  position: relative;
  background-color: var(--haiti);
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1874px;
  height: 1049px;
  top: 17px;
  left: 23px;
`;

const TopOfPage = styled.div`
  position: absolute;
  width: 98px;
  height: 98px;
  top: 951px;
  left: 1756px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: var(--blue-violet);
  border-radius: 49px;
  box-shadow: 0px 0px 30px 1px #8e8bdd;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const TopOfPageIcon = styled.img`
  margin-bottom: 24px;
  width: 44.183837890625px;
  height: 48.775390625px;
  margin-right: 25.7px;
`;

const ContactUsMain = styled.div`
  position: absolute;
  height: 729px;
  top: 222px;
  left: 0;
  display: flex;
  padding: 0 160px;
  align-items: flex-start;
  min-width: 1874px;
`;

const ContactUsLeft = styled.div`
  width: 896px;
  height: 725px;
  align-self: center;
  display: flex;
  justify-content: center;
`;

const ContactUsForm = styled.div`
  margin-top: 1.8px;
  width: 816px;
  height: 721.3895874023438px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContactUsFormEmail = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 2.2px 0;
  align-items: flex-start;
  min-height: 131px;
`;

const ContactUsFormEmailLabel = styled.div`
  ${OutfitSemiBoldWhite30px}
  width: 105px;
  min-height: 30px;
  letter-spacing: 0;
`;

const ContactUsFormEmailInput = styled.div`
  width: 816px;
  height: 65px;
  margin-top: 31px;
  display: flex;
  align-items: center;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 30px #5881d1;
`;

const EmailInputPlaceholderText = styled.input`
  ${OutfitNormalCloud20px}
  margin-top: 1.1px;
  height: 26px;
  margin-left: 31px;
  margin-right: -23px;
  flex: 1;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #c6c6c699;
  }
`;

const ContactUsFormSubject = styled.div`
  margin-top: 34.5px;
  display: flex;
  flex-direction: column;
  padding: 8.7px 0;
  align-items: flex-start;
  min-height: 144px;
`;

const ContactUsFormSubjectLabel = styled.div`
  ${OutfitSemiBoldWhite30px}
  width: 242px;
  min-height: 30px;
  letter-spacing: 0;
`;

const SubjectInputPlaceholderText = styled.input`
  ${OutfitNormalCloud20px}
  margin-top: 5.5px;
  height: 26px;
  margin-left: 31px;
  margin-right: 16px;
  flex: 1;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #c6c6c699;
  }
`;

const ContactUsFormMessage = styled.div`
  margin-top: 34.5px;
  display: flex;
  flex-direction: column;
  padding: 4.4px 0;
  align-items: flex-start;
  min-height: 259px;
`;

const ContactUsFormMessageInput = styled.div`
  width: 816px;
  height: 188px;
  margin-top: 31px;
  display: flex;
  align-items: center;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 30px #5881d1;
`;

const MessageInputPlaceholderText = styled.input`
  ${OutfitNormalCloud20px}
  margin-top: 1.6px;
  height: 146px;
  margin-left: 31px;
  margin-right: 31px;
  flex: 1;
  background-color: transparent;
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #c6c6c699;
  }
`;

const ContactUsRight = styled.div`
  width: 648px;
  height: 736px;
  position: relative;
  margin-left: 10px;
  margin-top: -3.54px;
  opacity: 0;

  &.animate-enter54 {
    animation: animate-enter54-frames 0.2s ease-in-out 0.6s 1 normal forwards;
    opacity: 0;
  }
`;

const ContactUsRightImage = styled.img`
  position: absolute;
  width: 648px;
  height: 409px;
  top: 20px;
  left: 0;
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
  top: 429px;
  left: 104px;
  display: flex;
  flex-direction: column;
`;

const ContactUsRightLocation = styled.div`
  height: 69px;
  display: flex;
  align-items: flex-start;
  min-width: 440px;
`;

const IconLocationPin = styled.img`
  width: 38px;
  height: 55px;
  align-self: center;
  margin-bottom: 1px;
`;

const ContactUsRightLocationDescription = styled.div`
  ${OutfitSemiBoldWhite30px}
  width: 360px;
  min-height: 69px;
  margin-left: 42px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const ContactUsRightEmail = styled.div`
  margin-top: 56.1px;
  display: flex;
  align-items: flex-start;
  min-width: 440px;
  cursor: pointer;
`;

const IconMail = styled.img`
  width: 53px;
  height: 44px;
  margin-top: -0.5px;
`;

const ContactUsRightEmailDescription = styled.div`
  ${OutfitSemiBoldWhite30px}
  width: 360px;
  min-height: 34px;
  align-self: center;
  margin-left: 27px;
  margin-bottom: 2px;
  letter-spacing: 0;
  text-decoration: underline;
  cursor: pointer;
`;

const SocialMediaIcons1 = styled.div`
  position: absolute;
  height: 118px;
  top: 598px;
  left: 36px;
  display: flex;
  padding: 39.5px 19.4px;
  align-items: flex-start;
  min-width: 576px;
`;

const SocialMediaIconsYoutube1 = styled.img`
  width: 56px;
  height: 38px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsDiscord1 = styled.img`
  width: 57px;
  height: 38px;
  margin-left: 40px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconFacebook1 = styled.img`
  width: 56px;
  height: 38px;
  margin-left: 41px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsTiktok1 = styled.img`
  width: 55px;
  height: 38px;
  margin-left: 40px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default LandingPageLV22;
