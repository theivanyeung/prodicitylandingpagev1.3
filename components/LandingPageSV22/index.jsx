import React from "react";
import ProdicityLogo from "../ProdicityLogo";
import GroupSessionsTextGroup2 from "../GroupSessionsTextGroup2";
import ContactUsFormEmailInput3 from "../ContactUsFormEmailInput3";
import styled from "styled-components";
import {
  OutfitNormalWhite25px,
  OutfitSemiBoldWhite25px,
  OutfitNormalWhite22px,
  OutfitSemiBoldWhite40px,
  OutfitSemiBoldWhite20px,
  OutfitExtraBoldWhite45px,
  OutfitNormalCloud15px,
  OutfitNormalCloud20px,
  OutfitSemiBoldWhite60px,
  OutfitSemiBoldWhite36px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./LandingPageSV22.css";

function LandingPageSV22(props) {
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
    socialMediaIconsYoutube1,
    socialMediaIconsDiscord1,
    iconFacebook1,
    iconTwitter1,
    socialMediaIconsTiktok1,
    iconInstagram1,
    gamilificationHeaderTitle,
    gamilificationHeaderSubtitle,
    gamilificationImageFeature,
    gamilificationImageCharacter,
    groupSessionsImage,
    marketplaceImage,
    questsTitle,
    questsDescription,
    questsImage,
    clansTitle,
    clansDescription,
    clansImage,
    challengesTitle,
    challengesDescription,
    challengesImage,
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
    socialMediaIconsYoutube2,
    socialMediaIconsDiscord2,
    iconFacebook2,
    iconTwitter2,
    socialMediaIconsTiktok2,
    iconInstagram2,
    contactUsHeaderTitle,
    contactUsHeaderSubtitle,
    topOfPageIcon,
    contactUsFooterCopyright,
    groupSessionsTextGroup21Props,
    groupSessionsTextGroup22Props,
    contactUsFormEmailInput31Props,
    contactUsFormEmailInput32Props,
  } = props;

  return (
    <form className="landing-page-s-v2-2 screen" name="form7" action="form7" method="post">
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
          <Rocket className="animate-enter53" src={rocket} />
          <WaitlistTextGroup className="animate-enter52">
            <WaitlistTitle>{waitlistTitle}</WaitlistTitle>
          </WaitlistTextGroup>
          <WaitlistSubtitle>{waitlistSubtitle}</WaitlistSubtitle>
          <WaitlistForm>
            <WaitlistFormInput>
              <InputPlaceholderText name="inputplaceholdertext" placeholder={inputPlaceholder1} type={inputType1} />
            </WaitlistFormInput>
            <a href="javascript:SubmitForm('form7')">
              <WaitlistFormSubmitButton>
                <ButtonText>{buttonText}</ButtonText>
              </WaitlistFormSubmitButton>
            </a>
          </WaitlistForm>
        </Waitlist>
      </Introduction>
      <AboutUs id="about-us">
        <AboutUsMain className="animate-enter51" show-on-scroll>
          <AboutUsTop>
            <AboutUsTopLeft>
              <AboutUsTitle>{aboutUsTitle}</AboutUsTitle>
              <ProdicityLogoLarge src={prodicityLogoLarge} />
            </AboutUsTopLeft>
            <AboutUsTopRight>
              <ProdicityDescription>{prodicityDescription}</ProdicityDescription>
            </AboutUsTopRight>
          </AboutUsTop>
          <AboutUsBottom className="animate-enter50">
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
        <GamificationHeader className="animate-enter49">
          <GamilificationHeaderTitle>{gamilificationHeaderTitle}</GamilificationHeaderTitle>
          <GamilificationHeaderSubtitle>{gamilificationHeaderSubtitle}</GamilificationHeaderSubtitle>
        </GamificationHeader>
        <GamilificationImage>
          <GamilificationImageContainer>
            <GamilificationImageFeature className="animate-enter47" show-on-scroll src={gamilificationImageFeature} />
            <GamilificationImageCharacter
              className="animate-enter48"
              show-on-scroll
              src={gamilificationImageCharacter}
            />
          </GamilificationImageContainer>
        </GamilificationImage>
      </Gamilification>
      <Productivity1 id="productivity">
        <GroupSessions>
          <GroupSessionsImage className="animate-enter44" show-on-scroll src={groupSessionsImage} />
          <GroupSessionsTextGroup2
            groupSessionsTitle={groupSessionsTextGroup21Props.groupSessionsTitle}
            groupSessionsDescription={groupSessionsTextGroup21Props.groupSessionsDescription}
          />
        </GroupSessions>
        <Group1>
          <Marketplace>
            <GroupSessionsTextGroup2
              groupSessionsTitle={groupSessionsTextGroup22Props.groupSessionsTitle}
              groupSessionsDescription={groupSessionsTextGroup22Props.groupSessionsDescription}
              className={groupSessionsTextGroup22Props.className}
            />
            <MarketplaceImage className="animate-enter46" show-on-scroll src={marketplaceImage} />
          </Marketplace>
        </Group1>
      </Productivity1>
      <Differentiation>
        <DifferentContainer>
          <DifferentationMain>
            <Quests>
              <QuestsTextGroup>
                <QuestsTitle>{questsTitle}</QuestsTitle>
                <QuestsDescription>{questsDescription}</QuestsDescription>
              </QuestsTextGroup>
              <QuestsImage src={questsImage} />
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
              <ChallengesTextGroup>
                <ChallengesTitle>{challengesTitle}</ChallengesTitle>
                <ChallengesDescription>{challengesDescription}</ChallengesDescription>
              </ChallengesTextGroup>
              <ChallengesImage src={challengesImage} />
            </Challenges>
          </DifferentationMain>
          <DifferentiationHeader className="animate-enter42" show-on-scroll>
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
                  <ContactUsFormEmailInput3
                    inputType={contactUsFormEmailInput31Props.inputType}
                    inputPlaceholder={contactUsFormEmailInput31Props.inputPlaceholder}
                  />
                </ContactUsFormEmail>
                <ContactUsFormSubject>
                  <ContactUsFormSubjectLabel src={contactUsFormSubjectLabel} />
                  <ContactUsFormEmailInput3
                    inputType={contactUsFormEmailInput32Props.inputType}
                    inputPlaceholder={contactUsFormEmailInput32Props.inputPlaceholder}
                    className={contactUsFormEmailInput32Props.className}
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
                <a href="javascript:SubmitForm('form7')">
                  <ContactUsFormSubmitButton>
                    <SubmitButtonText>{submitButtonText}</SubmitButtonText>
                  </ContactUsFormSubmitButton>
                </a>
              </ContactUsForm>
            </ContactUsLeft>
            <ContactUsRight className="animate-enter40">
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
                <a href="https://www.youtube.com/channel/UCjTUwakfSnLJC0t2H0YM0jA" target="_blank">
                  <SocialMediaIconsYoutube1 src={socialMediaIconsYoutube2} />
                </a>
                <a href="https://discord.gg/PkHRjWzeDc" target="_blank" className="align-self-flex-center">
                  <SocialMediaIconsDiscord1 src={socialMediaIconsDiscord2} />
                </a>
                <a href="https://www.facebook.com/Prodicity/" target="_blank">
                  <IconFacebook1 src={iconFacebook2} />
                </a>
                <a href="https://twitter.com/prodicity" target="_blank" className="align-self-flex-center">
                  <SocialMediaIconsDiscord1 src={iconTwitter2} />
                </a>
                <a href="https://www.tiktok.com/@prodicity" target="_blank">
                  <SocialMediaIconsTiktok1 src={socialMediaIconsTiktok2} />
                </a>
                <a
                  href="https://www.instagram.com/prodicityteam/?hl=en"
                  target="_blank"
                  className="align-self-flex-center"
                >
                  <SocialMediaIconsDiscord1 src={iconInstagram2} />
                </a>
              </SocialMediaIcons1>
            </ContactUsRight>
          </ContactUsMain>
          <ContactUsHeader className="animate-enter41" show-on-scroll>
            <ContactUsHeaderTitle>{contactUsHeaderTitle}</ContactUsHeaderTitle>
            <ContactUsHeaderSubtitle>{contactUsHeaderSubtitle}</ContactUsHeaderSubtitle>
          </ContactUsHeader>
        </ContactUsContainer>
        <a href="#introduction">
          <TopOfPage>
            <TopOfPageIcon src={topOfPageIcon} />
          </TopOfPage>
        </a>
        <ContactUsFooter>
          <ContactUsFooterCopyright>{contactUsFooterCopyright}</ContactUsFooterCopyright>
        </ContactUsFooter>
      </ContactUs>
    </form>
  );
}

const Introduction = styled.div`
  flex: 1;
  max-height: 1271px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: 100% 100%;
`;

const Frame1 = styled.div`
  margin-left: 1px;
  height: 284px;
  width: 243px;
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
  margin-left: 1px;
  width: 895px;
  margin-top: 97px;
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

  &.animate-enter53 {
    display: block;
    animation: animate-enter53-frames 0.4s ease-in-out 0.2s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const WaitlistTextGroup = styled.div`
  width: 178px;
  height: 100px;
  margin-top: 46px;
  margin-right: 1px;
  opacity: 0;

  &.animate-enter52 {
    animation: animate-enter52-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const WaitlistTitle = styled.div`
  ${OutfitSemiBoldWhite40px}
  width: 550px;
  height: 100px;
  margin-left: -186px;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistSubtitle = styled.p`
  width: 435px;
  min-height: 48px;
  margin-top: 83px;
  font-family: var(--font-family-outfit);
  font-weight: 600;
  color: var(--mountain-mist);
  font-size: 13px;
  text-align: center;
  letter-spacing: 0;
`;

const WaitlistForm = styled.div`
  width: 1023px;
  margin-top: 176px;
  display: flex;
`;

const WaitlistFormInput = styled.div`
  width: 395px;
  height: 70px;
  margin-left: 188.5px;
  display: flex;
  background-color: var(--port-gore);
  border-radius: 24px 0px 0px 24px;
  box-shadow: 0px 0px 12px #b1c7ff;
`;

const InputPlaceholderText = styled.input`
  ${OutfitNormalCloud20px}
  margin-top: 17px;
  width: 345px;
  height: 36px;
  margin-left: 7.22%;
  margin-right: 5.44%;
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
  width: 251px;
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
  ${OutfitSemiBoldWhite20px}
            margin-top: 13px;
  width: 251px;
  height: 43px;
  margin-left: -0.5px;
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
  width: 921px;
  height: 751px;
  flex-direction: column;
  background-color: var(--scampi);
  border-radius: 0px 48px 48px 0px;
  box-shadow: 0px 0px 30px #928ef940;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter51 {
    animation: animate-enter51-frames 0.4s ease-in-out 0s 1 normal forwards;
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
  width: 276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 307px;
`;

const AboutUsTitle = styled.div`
  ${OutfitExtraBoldWhite45px}
  width: 360px;
  margin-top: -1px;
  min-height: 120px;
  text-align: center;
  letter-spacing: 0;
`;

const ProdicityLogoLarge = styled.img`
  width: 153px;
  height: 160px;
  margin-top: 27px;
  margin-right: 1.51px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;

const AboutUsTopRight = styled.div`
  width: 461px;
  height: 488px;
  margin-left: 50px;
  display: flex;
  align-items: center;
`;

const ProdicityDescription = styled.div`
  ${ValignTextMiddle}
  ${OutfitNormalWhite22px}
            margin-top: -39px;
  height: 449px;
  margin-left: 21.7px;
  margin-right: 34.9px;
  flex: 1;
  letter-spacing: 0;
`;

const AboutUsBottom = styled.div`
  margin-left: 10.6px;
  height: 40px;
  width: 656px;
  align-self: center;
  margin-top: 67px;
  justify-content: center;
  opacity: 0;

  &.animate-enter50 {
    animation: animate-enter50-frames 0.2s ease-in-out 0.6s 1 normal forwards;
    opacity: 0;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  padding: 0 36.8px;
  align-items: flex-start;
  min-width: 656px;
`;

const SocialMediaIconsYoutube = styled.img`
  width: 85px;
  height: 40px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsDiscord = styled.img`
  width: 86px;
  height: 40px;
  margin-left: 14px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconFacebook = styled.img`
  width: 85px;
  height: 40px;
  margin-left: 14px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsTiktok = styled.img`
  width: 84px;
  height: 40px;
  margin-left: 14px;
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

  &.animate-enter49 {
    animation: animate-enter49-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const GamilificationHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite60px}
  margin-left: 0.8px;
  height: 76px;
  width: 685px;
  align-self: center;
  margin-top: 36px;
  text-align: center;
  letter-spacing: 0;
`;

const GamilificationHeaderSubtitle = styled.div`
  flex: 1;
  max-height: 70px;
  margin-top: 82px;
  height: 70px;
  font-family: var(--font-family-outfit);
  font-weight: 600;
  color: var(--white);
  font-size: var(--font-size-xxxxl);
  text-align: center;
  letter-spacing: 0;
`;

const GamilificationImage = styled.div`
  margin-left: -0.6px;
  height: 443px;
  width: 849.3817749023438px;
  align-self: center;
  margin-top: 152px;
  display: flex;
  padding: 0px 101.4px;
  align-items: flex-end;
`;

const GamilificationImageContainer = styled.div`
  width: 646px;
  height: 333px;
  position: relative;
  margin-left: 1px;
`;

const GamilificationImageFeature = styled.img`
  position: absolute;
  width: 503px;
  height: 333px;
  top: 0;
  left: 143px;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.1);
  cursor: pointer;

  &.animate-enter47 {
    display: block;
    animation: animate-enter47-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(1.025);
  }
`;

const GamilificationImageCharacter = styled.img`
  position: absolute;
  width: 266px;
  height: 236px;
  top: 80px;
  left: 0;
  transition: all 0.2s ease;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: translate(-25px, 0);
  cursor: pointer;

  &.animate-enter48 {
    display: block;
    animation: animate-enter48-frames 0.4s ease-in-out 0.1s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }

  &:hover {
    transform: translate(5px, 0);
  }
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
  margin-left: 14.6%;
  margin-right: 14.6%;
  flex: 1;
  max-height: 282px;
  position: relative;
  margin-top: 184px;
  display: flex;
  padding: 14px 0;
  align-items: flex-start;
  overflow: hidden;
`;

const GroupSessionsImage = styled.img`
  width: 319px;
  height: 200px;
  align-self: center;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(-25px, 0);
  cursor: pointer;

  &.animate-enter44 {
    display: block;
    animation: animate-enter44-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const Group1 = styled.div`
  margin-left: 14.6%;
  margin-right: 14.6%;
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
  padding: 30px 0;
  align-items: center;
`;

const MarketplaceImage = styled.img`
  width: 307px;
  height: 200px;
  align-self: flex-end;
  margin-left: 79px;
  transition: all 0.2s ease;
  display: block;
  opacity: 0;
  transform: translate(25px, 0);
  cursor: pointer;

  &.animate-enter46 {
    display: block;
    animation: animate-enter46-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }

  &:hover {
    transform: scale(0.9);
  }
`;

const Differentiation = styled.div`
  flex: 1;
  max-height: 1773px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(58.00000034272671, 55.00000052154064, 140.00000685453415) 0%,
    rgb(22.000000588595867, 21.000000648200512, 53.00000064074993) 100%
  );
`;

const DifferentContainer = styled.div`
  width: 1296px;
  height: 1713px;
  position: relative;
  margin-left: -148px;
`;

const DifferentationMain = styled.div`
  position: absolute;
  width: 1000px;
  height: 1513px;
  top: 200px;
  left: 148px;
  display: flex;
  flex-direction: column;
`;

const Quests = styled.div`
  flex: 1;
  max-height: 299px;
  margin-top: 167px;
  display: flex;
  justify-content: flex-end;
  background-color: var(--indigo);
  border-radius: 0px 40px 40px 0px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const QuestsTextGroup = styled.div`
  margin-top: 54px;
  width: 559px;
  height: 192px;
  margin-right: 68.1px;
  margin-left: 79px;
  flex: 1;
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

const QuestsImage = styled.img`
  margin-top: 83px;
  width: 191.2509765625px;
  height: 126px;
  margin-right: -95.4px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const Clans = styled.div`
  flex: 1;
  max-height: 299px;
  margin-top: 125px;
  display: flex;
  padding: 8px 0;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 80.2%;
  background-color: var(--cornflower-blue);
  border-radius: 0px 40px 40px 0px;
  box-shadow: 0px 0px 35px #ccdaff;
`;

const ClansContainer = styled.div`
  width: 908px;
  height: 230px;
  position: relative;
`;

const ClansTextGroup = styled.div`
  position: absolute;
  width: 644px;
  height: 227px;
  top: 3px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ClansTitle = styled.div`
  ${OutfitSemiBoldWhite40px}
  flex: 1;
  max-height: 63.227272033691406px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 0;
`;

const ClansDescription = styled.div`
  ${OutfitNormalWhite25px}
  margin-left: 2.09%;
  margin-right: 5.57%;
  flex: 1;
  max-height: 106px;
  margin-bottom: 28.8px;
  text-align: center;
  letter-spacing: 0;
`;

const ClansImage = styled.img`
  position: absolute;
  width: 276px;
  height: 177px;
  top: 0;
  left: 632px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const Challenges = styled.div`
  flex: 1;
  max-height: 299px;
  margin-top: 125px;
  display: flex;
  justify-content: flex-end;
  background-color: var(--sapphire);
  border-radius: 0px 40px 40px 0px;
  box-shadow: 0px 0px 30px #ccdaff;
`;

const ChallengesTextGroup = styled.div`
  margin-top: 46px;
  width: 601px;
  height: 208px;
  margin-right: 69.1px;
  margin-left: 40px;
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
  margin-top: 84px;
  width: 184.80419921875px;
  height: 132px;
  margin-right: -92.9px;
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
  left: 0;
  flex-direction: column;
  opacity: 0;

  &.animate-enter42 {
    animation: animate-enter42-frames 1s ease-in-out 0s 1 normal forwards;
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
  ${OutfitSemiBoldWhite40px}
  margin-left: 185.2px;
  margin-right: 185.2px;
  flex: 1;
  max-height: 136px;
  margin-top: 68px;
  height: 136px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUs = styled.div`
  flex: 1;
  max-height: 1115px;
  display: flex;
  flex-direction: column;
  padding: 34px 46px;
  align-items: flex-end;
  min-height: 1115px;
  background-color: var(--haiti);
`;

const ContactUsContainer = styled.div`
  width: 898px;
  height: 894px;
  position: relative;
  margin-top: 40px;
`;

const ContactUsMain = styled.div`
  position: absolute;
  height: 729px;
  top: 165px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 898px;
`;

const ContactUsLeft = styled.div`
  width: 448px;
  height: 725px;
  display: flex;
  justify-content: center;
`;

const ContactUsForm = styled.div`
  margin-top: 1.8px;
  width: 408.00006103515625px;
  height: 721.3895874023438px;
  margin-left: 40px;
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
  margin-top: 0.8px;
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
  margin-top: 0.8px;
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
  width: 408px;
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
  margin-right: 20px;
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
  margin-left: 136px;
  width: 136px;
  height: 45px;
  margin-top: 0.8px;
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
  margin-top: -0.4px;
  height: 25px;
  width: 76px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUsRight = styled.div`
  width: 440px;
  height: 515px;
  position: relative;
  margin-left: 10px;
  opacity: 0;

  &.animate-enter40 {
    animation: animate-enter40-frames 0.2s ease-in-out 0.6s 1 normal forwards;
    opacity: 0;
  }
`;

const ContactUsRightImage = styled.img`
  position: absolute;
  width: 312px;
  height: 198px;
  top: 20px;
  left: 64px;
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
  left: 0;
  display: flex;
  flex-direction: column;
`;

const ContactUsRightLocation = styled.div`
  height: 69px;
  margin-top: 26px;
  display: flex;
  justify-content: flex-end;
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
  ${OutfitSemiBoldWhite20px}
  width: 311px;
  min-height: 69px;
  margin-left: 50px;
  margin-top: -1px;
  letter-spacing: 0;
`;

const ContactUsRightEmail = styled.div`
  margin-top: 14.1px;
  display: flex;
  justify-content: flex-end;
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
  ${OutfitSemiBoldWhite20px}
  width: 309px;
  min-height: 34px;
  margin-left: 40px;
  margin-top: -1px;
  letter-spacing: 0;
  text-decoration: underline;
  cursor: pointer;
`;

const SocialMediaIcons1 = styled.div`
  position: absolute;
  height: 108px;
  top: 387px;
  left: 10px;
  display: flex;
  padding: 39.8px 20px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 420px;
`;

const SocialMediaIconsYoutube1 = styled.img`
  width: 40px;
  height: 27px;
  margin-top: 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsDiscord1 = styled.img`
  width: 40px;
  height: 27px;
  align-self: center;
  margin-left: 20px;
  margin-bottom: 0.17px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconFacebook1 = styled.img`
  width: 40px;
  height: 27px;
  margin-left: 20px;
  margin-top: 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialMediaIconsTiktok1 = styled.img`
  width: 40px;
  height: 28px;
  margin-left: 20px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContactUsHeader = styled.div`
  position: absolute;
  width: 771px;
  height: 222px;
  top: 0;
  left: 53px;
  opacity: 0;

  &.animate-enter41 {
    animation: animate-enter41-frames 0.4s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const ContactUsHeaderTitle = styled.div`
  ${OutfitSemiBoldWhite60px}
  position: absolute;
  width: 612px;
  top: 19px;
  left: 80px;
  text-align: center;
  letter-spacing: 0;
`;

const ContactUsHeaderSubtitle = styled.div`
  position: absolute;
  width: 771px;
  top: 127px;
  left: 0;
  font-family: var(--font-family-outfit);
  font-weight: 300;
  color: var(--cloud);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
`;

const TopOfPage = styled.div`
  width: 75px;
  height: 75px;
  margin-right: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
  margin-right: 14.4px;
`;

const ContactUsFooter = styled.div`
  width: 890px;
  height: 38px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
`;

const ContactUsFooterCopyright = styled.div`
  ${ValignTextMiddle}
  ${OutfitSemiBoldWhite20px}
            width: 890px;
  text-align: center;
  letter-spacing: 0;
`;

export default LandingPageSV22;
