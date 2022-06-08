import React from "react";
import NavBarLeft from "../NavBarLeft";
import GamilificationImage2 from "../GamilificationImage2";
import GroupSessionsTextGroup from "../GroupSessionsTextGroup";
import ContactUsFormSubmitButton from "../ContactUsFormSubmitButton";
import ContactUsHeader from "../ContactUsHeader";
import ContactUsFooter2 from "../ContactUsFooter2";
import styled from "styled-components";
import {
  OutfitSemiBoldWhite30px,
  OutfitNormalWhite25px,
  OutfitSemiBoldWhite25px,
  OutfitNormalCloud30px,
  OutfitSemiBoldWhite40px,
  OutfitSemiBoldWhite80px,
  OutfitSemiBoldMountainMist25px,
  OutfitNormalCloud20px,
  OutfitSemiBoldWhite60px,
  OutfitSemiBoldWhite36px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./LandingPageMV22.css";

function LandingPageMV22(props) {
  const {
    introduction,
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
    groupSessionsImage,
    marketplaceImage,
    clansImage,
    clansTitle,
    clansDescription,
    questsImage,
    questsTitle,
    questsDescription,
    challengesTitle,
    challengesDescription,
    challengesImage,
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
    navBarLeftProps,
    gamilificationImage2Props,
    groupSessionsTextGroup1Props,
    groupSessionsTextGroup2Props,
  } = props;

  return (
    <form className="landing-page-m-v2-2 screen" name="form3" action="form3" method="post">
      <Introduction style={{ backgroundImage: `url(${introduction})` }} id="introduction">
        <NavBar>
          <NavBarLeft prodicityLogoImage={navBarLeftProps.prodicityLogoImage} />
          <NavBarRight>
            <OverlapGroup2>
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
            </OverlapGroup2>
          </NavBarRight>
        </NavBar>
        <Waitlist>
          <Rocket className="animate-enter26" src={rocket} />
          <WaitlistTextGroup className="animate-enter25">
            <WaitlistTitle>{waitlistTitle}</WaitlistTitle>
          </WaitlistTextGroup>
          <WaitlistSubtitle>{waitlistSubtitle}</WaitlistSubtitle>
          <WaitlistForm>
            <WaitlistFormInput>
              <InputPlaceholderText name="inputplaceholdertext" placeholder={inputPlaceholder1} type={inputType1} />
            </WaitlistFormInput>
            <a href="javascript:SubmitForm('form3')">
              <WaitlistFormSubmitButton>
                <ButtonText>{buttonText}</ButtonText>
              </WaitlistFormSubmitButton>
            </a>
          </WaitlistForm>
        </Waitlist>
      </Introduction>
      <AboutUs id="about-us">
        <AboutUsMain className="animate-enter24" show-on-scroll>
          <AboutUsTop>
            <AboutUsTopLeft>
              <AboutUsTitle>{aboutUsTitle}</AboutUsTitle>
              <ProdicityLogoLarge src={prodicityLogoLarge} />
            </AboutUsTopLeft>
            <AboutUsTopRight>
              <ProdicityDescription>{prodicityDescription}</ProdicityDescription>
            </AboutUsTopRight>
          </AboutUsTop>
          <AboutUsBottom className="animate-enter23">
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
        <GamificationHeader className="animate-enter22">
          <GamilificationHeaderTitle>{gamilificationHeaderTitle}</GamilificationHeaderTitle>
          <GamilificationHeaderSubtitle>{gamilificationHeaderSubtitle}</GamilificationHeaderSubtitle>
        </GamificationHeader>
        <GamilificationImage2 gamilificationImageFeature={gamilificationImage2Props.gamilificationImageFeature} />
      </Gamilification>
      <Productivity1 id="productivity">
        <GroupSessions>
          <GroupSessionsImage className="animate-enter17" show-on-scroll src={groupSessionsImage} />
          <GroupSessionsTextGroup
            groupSessionsTitle={groupSessionsTextGroup1Props.groupSessionsTitle}
            groupSessionsDescription={groupSessionsTextGroup1Props.groupSessionsDescription}
          />
        </GroupSessions>
        <Group1>
          <Marketplace>
            <GroupSessionsTextGroup
              groupSessionsTitle={groupSessionsTextGroup2Props.groupSessionsTitle}
              groupSessionsDescription={groupSessionsTextGroup2Props.groupSessionsDescription}
              className={groupSessionsTextGroup2Props.className}
            />
            <MarketplaceImage className="animate-enter19" show-on-scroll src={marketplaceImage} />
          </Marketplace>
        </Group1>
      </Productivity1>
      <Differentiation>
        <DifferentContainer>
          <DifferentationMain>
            <OverlapGroup1>
              <Clans>
                <ClansImage src={clansImage} />
                <ClansTextGroup>
                  <ClansTitle>{clansTitle}</ClansTitle>
                  <ClansDescription>{clansDescription}</ClansDescription>
                </ClansTextGroup>
              </Clans>
              <Quests>
                <QuestsImage src={questsImage} />
                <QuestsTextGroup>
                  <QuestsTitle>{questsTitle}</QuestsTitle>
                  <QuestsDescription>{questsDescription}</QuestsDescription>
                </QuestsTextGroup>
              </Quests>
            </OverlapGroup1>
            <ChallengesContainer>
              <Challenges>
                <ChallengesTextGroup>
                  <ChallengesTitle>{challengesTitle}</ChallengesTitle>
                  <ChallengesDescription>{challengesDescription}</ChallengesDescription>
                </ChallengesTextGroup>
              </Challenges>
              <ChallengesImage src={challengesImage} />
            </ChallengesContainer>
          </DifferentationMain>
          <DifferentiationHeader className="animate-enter15" show-on-scroll>
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
                    <SubjectInputPlaceholder
                      name="subjectinputplaceholder"
                      placeholder={inputPlaceholder3}
                      type={inputType3}
                    />
                  </ContactUsFormEmailInput>
                </ContactUsFormSubject>
                <ContactUsFormMessage>
                  <ContactUsFormSubjectLabel>{contactUsFormMessageLabel}</ContactUsFormSubjectLabel>
                  <ContactUsFormMessageInput>
                    <MessageInputPlaceholder
                      name="messageinputplaceholder"
                      placeholder={inputPlaceholder4}
                      type={inputType4}
                    />
                  </ContactUsFormMessageInput>
                </ContactUsFormMessage>
                <ContactUsFormSubmitButton />
              </ContactUsForm>
            </ContactUsLeft>
            <ContactUsRight className="animate-enter13">
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
              <SocialMediaIcons1>
                <a
                  href="https://www.youtube.com/channel/UCjTUwakfSnLJC0t2H0YM0jA"
                  target="_blank"
                  className="align-self-flex-center"
                >
                  <SocialMediaIconsYoutube1 src={socialMediaIconsYoutube2} />
                </a>
                <a href="https://discord.gg/PkHRjWzeDc" target="_blank">
                  <SocialMediaIconsDiscord1 src={socialMediaIconsDiscord2} />
                </a>
                <a href="https://www.facebook.com/Prodicity/" target="_blank" className="align-self-flex-center">
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
          <ContactUsHeader />
        </OverlapGroup>
        <ContactUsFooter2 />
      </ContactUs>
    </form>
  );
}

const Introduction = styled.div`
  flex: 1;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: 50% 50%;
`;

const NavBar = styled.div`
  height: 82px;
  position: relative;
  margin-top: 39px;
  margin-left: 0.73px;
  display: flex;
  padding: 0 40px;
  align-items: flex-start;
  min-width: 1154px;
`;

const NavBarRight = styled.div`
  height: 631px;
  margin-left: 500px;
  margin-top: -274.5px;
  display: flex;
  align-items: center;
  min-width: 331px;
`;

const OverlapGroup2 = styled.div`
  width: 470px;
  height: 611px;
  position: relative;
  margin-left: -198px;
`;

const About = styled.div`
  ${OutfitSemiBoldWhite25px}
  position: absolute;
  width: 133px;
  top: 288px;
  left: 0;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Features = styled.div`
  position: absolute;
  width: 239px;
  height: 611px;
  top: 0;
  left: 115px;
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
  position: absolute;
  width: 133px;
  top: 288px;
  left: 336px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Waitlist = styled.div`
  width: 1400px;
  margin-top: 113px;
  display: flex;
  flex-direction: column;
  padding: 0 188px;
  align-items: center;
  min-height: 846px;
  background-color: var(--haiti-2);
`;

const Rocket = styled.img`
  width: 160px;
  height: 150px;
  margin-top: -75px;
  margin-right: 2px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.1);
  cursor: pointer;

  &.animate-enter26 {
    display: block;
    animation: animate-enter26-frames 0.4s ease-in-out 0.2s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const WaitlistTextGroup = styled.div`
  width: 683px;
  height: 202px;
  margin-top: 46px;
  margin-right: 1px;
  opacity: 0;

  &.animate-enter25 {
    animation: animate-enter25-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const WaitlistTitle = styled.div`
  ${OutfitSemiBoldWhite80px}
  width: 932px;
  height: 202px;
  margin-left: -124.5px;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistSubtitle = styled.div`
  ${OutfitSemiBoldMountainMist25px}
  width: 996px;
  min-height: 64px;
  margin-top: 42px;
  margin-right: 2px;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistForm = styled.div`
  width: 1023px;
  align-self: flex-start;
  margin-top: 99px;
  display: flex;
`;

const WaitlistFormInput = styled.div`
  width: 576px;
  height: 70px;
  margin-left: 68.5px;
  display: flex;
  background-color: var(--port-gore);
  border-radius: 24px 0px 0px 24px;
  box-shadow: 0px 0px 12px #b1c7ff;
`;

const InputPlaceholderText = styled.input`
  ${OutfitNormalCloud30px}
  margin-top: 17px;
  width: 519px;
  height: 36px;
  margin-left: 4.95%;
  margin-right: 4.95%;
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
  width: 310px;
  height: 70px;
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
  ${ValignTextMiddle}
  ${OutfitSemiBoldWhite25px}
            margin-top: 13px;
  width: 377.4876708984375px;
  height: 43.00492477416992px;
  margin-left: -34.5px;
  text-align: center;
  letter-spacing: 0;
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
  width: 1290px;
  height: 751px;
  flex-direction: column;
  background-color: var(--scampi);
  border-radius: 0px 48px 48px 0px;
  box-shadow: 0px 0px 30px #928ef940;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter24 {
    animation: animate-enter24-frames 0.4s ease-in-out 0s 1 normal forwards;
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
  min-height: 373px;
`;

const AboutUsTitle = styled.div`
  width: 360px;
  margin-top: -1px;
  min-height: 120px;
  font-family: var(--font-family-outfit);
  font-weight: 800;
  color: var(--white);
  font-size: 60px;
  text-align: center;
  letter-spacing: 0;
`;

const ProdicityLogoLarge = styled.img`
  width: 218px;
  height: 226px;
  margin-top: 28px;
  margin-right: 1.3px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const AboutUsTopRight = styled.div`
  width: 691px;
  height: 488px;
  margin-left: 50px;
  display: flex;
  align-items: center;
`;

const ProdicityDescription = styled.div`
  ${ValignTextMiddle}
  margin-top: -39px;
  height: 449px;
  margin-left: 21.7px;
  margin-right: 35.5px;
  flex: 1;
  font-family: var(--font-family-outfit);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxxxl);
  letter-spacing: 0;
`;

const AboutUsBottom = styled.div`
  margin-left: -0.9px;
  height: 57.82475662231445px;
  width: 826.6469116210938px;
  align-self: center;
  margin-top: 56px;
  justify-content: center;
  opacity: 0;

  &.animate-enter23 {
    animation: animate-enter23-frames 0.2s ease-in-out 0.6s 1 normal forwards;
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
  margin-left: 14.84%;
  margin-right: 14.9%;
  flex: 1;
  max-height: 232px;
  margin-top: 40px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter22 {
    animation: animate-enter22-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const GamilificationHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite80px}
  margin-left: 1.7px;
  height: 101px;
  width: 913px;
  align-self: center;
  margin-top: 36px;
  text-align: center;
  letter-spacing: 0;
`;

const GamilificationHeaderSubtitle = styled.div`
  ${OutfitSemiBoldWhite30px}
  flex: 1;
  max-height: 76px;
  margin-top: 57px;
  height: 76px;
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
  margin-left: 10.43%;
  margin-right: 10.43%;
  flex: 1;
  max-height: 282px;
  position: relative;
  margin-top: 184px;
  display: flex;
  align-items: center;
`;

const GroupSessionsImage = styled.img`
  width: 500px;
  height: 282px;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(-25px, 0);
  cursor: pointer;

  &.animate-enter17 {
    display: block;
    animation: animate-enter17-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const Group1 = styled.div`
  margin-left: 10.43%;
  margin-right: 10.43%;
  flex: 1;
  max-height: 285px;
  margin-top: 145px;
  display: flex;
`;

const Marketplace = styled.div`
  height: 285px;
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-start;
`;

const MarketplaceImage = styled.img`
  width: 500px;
  height: 276px;
  margin-left: 105px;
  margin-top: -0.5px;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(25px, 0);
  cursor: pointer;

  &.animate-enter19 {
    display: block;
    animation: animate-enter19-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const Differentiation = styled.div`
  flex: 1;
  max-height: 1017px;
  display: flex;
  padding: 0 48px;
  align-items: flex-end;
  background: linear-gradient(
    180deg,
    rgb(58.00000034272671, 55.00000052154064, 140.00000685453415) 0%,
    rgb(22.000000588595867, 21.000000648200512, 53.00000064074993) 100%
  );
`;

const DifferentContainer = styled.div`
  width: 1303px;
  height: 957px;
  position: relative;
  margin-left: 1px;
`;

const DifferentationMain = styled.div`
  position: absolute;
  width: 1303px;
  height: 757px;
  top: 200px;
  left: 0;
  display: flex;
  padding: 0 19.9px;
  align-items: flex-end;
`;

const OverlapGroup1 = styled.div`
  width: 874px;
  height: 558px;
  position: relative;
  margin-left: 8px;
`;

const Clans = styled.div`
  position: absolute;
  width: 484px;
  height: 558px;
  top: 0;
  left: 390px;
  display: flex;
  flex-direction: column;
  background-color: var(--cornflower-blue);
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const ClansImage = styled.img`
  margin-left: 12.81%;
  margin-right: 12.71%;
  flex: 1;
  max-height: 244px;
  margin-top: -122px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const ClansTextGroup = styled.div`
  margin-left: 20.3px;
  margin-right: 18.7px;
  flex: 1;
  max-height: 227px;
  margin-top: 28px;
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

const Quests = styled.div`
  position: absolute;
  width: 390px;
  height: 354px;
  top: 204px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--indigo);
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const QuestsImage = styled.img`
  margin-left: 18.05%;
  margin-right: 21.44%;
  flex: 1;
  max-height: 172px;
  margin-top: -79px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const QuestsTextGroup = styled.div`
  margin-left: 48.4px;
  margin-right: 47.6px;
  flex: 1;
  max-height: 192px;
  margin-top: 20px;
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

const ChallengesContainer = styled.div`
  width: 381px;
  height: 563px;
  position: relative;
`;

const Challenges = styled.div`
  position: absolute;
  width: 381px;
  height: 464px;
  top: 99px;
  left: 0;
  display: flex;
  background-color: var(--sapphire);
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 0px 30px #ccdaff;
`;

const ChallengesTextGroup = styled.div`
  margin-top: 126px;
  height: 208px;
  margin-left: 27.2px;
  margin-right: 24.8px;
  flex: 1;
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

const ChallengesImage = styled.img`
  position: absolute;
  width: 241px;
  height: 198px;
  top: 0;
  left: 72px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const DifferentiationHeader = styled.div`
  position: absolute;
  width: 1296px;
  height: 220px;
  top: 0;
  left: 3px;
  flex-direction: column;
  opacity: 0;

  &.animate-enter15 {
    animation: animate-enter15-frames 1s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const DifferentiationHeaderSubtitle = styled.div`
  ${OutfitSemiBoldWhite36px}
  margin-left: 185px;
  margin-right: 185.5px;
  flex: 1;
  max-height: 42px;
  height: 42px;
  text-align: center;
  letter-spacing: 0;
`;

const DifferentiationHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite60px}
  margin-left: 185px;
  margin-right: 185.5px;
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
  width: 1739px;
  height: 1049px;
  top: 17px;
  left: -170px;
`;

const TopOfPage = styled.div`
  position: absolute;
  width: 98px;
  height: 98px;
  top: 951px;
  left: 1428px;
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
  width: 44.18359375px;
  height: 48.775390625px;
  margin-right: 25.7px;
`;

const ContactUsMain = styled.div`
  position: absolute;
  height: 729px;
  top: 222px;
  left: 185px;
  display: flex;
  padding: 0 160px;
  align-items: center;
  min-width: 1368px;
`;

const ContactUsLeft = styled.div`
  width: 558px;
  height: 725px;
  display: flex;
  justify-content: center;
`;

const ContactUsForm = styled.div`
  margin-top: 1.8px;
  width: 478px;
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
  width: 478px;
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
  margin-top: 1.4px;
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

const SubjectInputPlaceholder = styled.input`
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
  width: 478px;
  height: 188px;
  margin-top: 31px;
  display: flex;
  align-items: center;
  background-color: var(--port-gore);
  border-radius: 20px;
  box-shadow: 0px 0px 30px #5881d1;
`;

const MessageInputPlaceholder = styled.input`
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
  width: 480px;
  height: 586px;
  position: relative;
  margin-left: 10px;
  opacity: 0;

  &.animate-enter13 {
    animation: animate-enter13-frames 0.2s ease-in-out 0.6s 1 normal forwards;
    opacity: 0;
  }
`;

const ContactUsRightImage = styled.img`
  position: absolute;
  width: 425px;
  height: 269px;
  top: 20px;
  left: 28px;
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
  top: 289px;
  left: 20px;
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
  width: 31px;
  height: 44px;
  align-self: center;
  margin-bottom: 0.5px;
`;

const ContactUsRightLocationDescription = styled.div`
  ${OutfitSemiBoldWhite25px}
  width: 360px;
  min-height: 69px;
  margin-left: 49px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const ContactUsRightEmail = styled.div`
  margin-top: 66.1px;
  display: flex;
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
  ${OutfitSemiBoldWhite25px}
  width: 360px;
  min-height: 34px;
  margin-left: 39px;
  margin-top: -1px;
  letter-spacing: 0;
  text-decoration: underline;
  cursor: pointer;
`;

const SocialMediaIcons1 = styled.div`
  position: absolute;
  height: 108px;
  top: 458px;
  left: 0;
  display: flex;
  padding: 39.8px 20px;
  align-items: flex-start;
  min-width: 480px;
`;

const SocialMediaIconsYoutube1 = styled.img`
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

const SocialMediaIconsDiscord1 = styled.img`
  width: 40px;
  height: 27px;
  margin-left: 40px;
  margin-top: 0.25px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconFacebook1 = styled.img`
  width: 40px;
  height: 27px;
  align-self: center;
  margin-left: 40px;
  margin-bottom: 0.31px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsTiktok1 = styled.img`
  width: 40px;
  height: 28px;
  margin-left: 40px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default LandingPageMV22;
