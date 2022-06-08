
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageSLV22 from "./components/LandingPageSLV22";
import LandingPageMV22 from "./components/LandingPageMV22";
import LandingPageXSV22 from "./components/LandingPageXSV22";
import LandingPageSV22 from "./components/LandingPageSV22";
import LandingPageLV22 from "./components/LandingPageLV22";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/landing-page-sl-v2-2">
          <LandingPageSLV22 {...landingPageSLV22Data} />
        </Route>
        <Route path="/:path(|landing-page-m-v2-2)">
          <LandingPageMV22 {...landingPageMV22Data} />
        </Route>
        <Route path="/landing-page-xs-v2-2">
          <LandingPageXSV22 {...landingPageXSV22Data} />
        </Route>
        <Route path="/landing-page-s-v2-2">
          <LandingPageSV22 {...landingPageSV22Data} />
        </Route>
        <Route path="/landing-page-l-v2-2">
          <LandingPageLV22 {...landingPageLV22Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const contactUsFormEmailInput1Data = {
    inputType: "email",
    inputPlaceholder: "Enter Email Here",
};

const contactUsFormEmailInput2Data = {
    inputType: "text",
    inputPlaceholder: "Enter Subject Here",
    className: "contact-us-form-subject-input",
};

const landingPageSLV22Data = {
    introduction: "/img/introduction-background@1x.png",
    about: "About",
    gamification: "Gamification",
    productivity: "Productivity",
    place: "Contact",
    rocket: "/img/rocket@2x.png",
    waitlistTitle: "Getting Your Work Done Through Gaming!",
    waitlistSubtitle: "We created this software to making learning and work fun for others through games! Sign up now to get early access for Prodicity as soon as it gets released!",
    inputType1: "email",
    inputPlaceholder1: "Add your email... ",
    buttonText: "Get Early Access →",
    aboutUsTitle: "About Us",
    prodicityLogoLarge: "/img/prodicity-logo-large@1x.png",
    prodicityDescription: <React.Fragment>Hello, we are a company seeking to make people productive through video games. There will be various games like racing, <br />boss fighting, map findings, and more!<br /><br />Furthermore, we have different types of options within the app. We have quests, parties, clans, sessions, to do lists, friend tracker, and various other features!</React.Fragment>,
    gamilificationHeaderTitle: "Fight bosses with friends!",
    gamilificationHeaderSubtitle: "Level up your characters  and pets. Fight bosses with friends and complete challenges with your clan!",
    groupSessionsImage: "/img/group-sessions-image@2x.png",
    groupSessionsTitle: "Group Sessions",
    groupSessionsDescription: "Group sessions but you have the option to conduct group and indicifual sessions. During these sessions you can chat related to studies, execute tasks on the todo list, and even listen to music!",
    marketplaceImage: "/img/marketplace-image@2x.png",
    marketplaceTitle: "Marketplace",
    marketplaceDescription: "You can buy various characters in the market system for bragging rights and other amazing purposes, but in order to do so, you have to work up to that level...",
    questsImage: "/img/quests-image@2x.png",
    questsTitle: "Quests",
    questsDescription: "Complete quests in order to achieve awards.",
    clansTitle: "Clans",
    clansDescription: "Work together with your friends in order to compete in video game challenges and get tasks done.",
    clansImage: "/img/clans-image@2x.png",
    challengesImage: "/img/challenges-image@2x.png",
    challengesTitle: "Challenges",
    challengesDescription: "Complete achievements and challenges in order to get more rewards.",
    differentiationHeaderSubtitle: "Prodicity",
    differentiationHeaderTitle: <React.Fragment>What makes <br />Prodicity such a great platform?</React.Fragment>,
    contactUsFormEmailLabel: "Email:",
    contactUsFormSubjectLabel: "/img/contact-us-form-subject-label@2x.png",
    contactUsFormMessageLabel: "Message:",
    inputType2: "text",
    inputPlaceholder2: "Enter Message Here...",
    submitButtonText: "Submit",
    contactUsRightImage: "/img/contact-us-right-image@2x.png",
    iconLocation_Pin: "/img/contact-us-right-location-icon@2x.png",
    contactUsRightLocationDescription: <React.Fragment>Cupertino, CA 95014 <br />United States</React.Fragment>,
    iconMail: "/img/contact-us-right-email-icon@2x.png",
    contactUsRightEmailDescription: "prodicityteam@gmail.com",
    socialMediaIconsYoutube: "/img/social-media-icons-youtube@2x.png",
    socialMediaIconsDiscord: "/img/social-media-icons-discord@2x.png",
    iconFacebook: "/img/social-media-icons-facebook@2x.png",
    iconTwitter: "/img/social-media-icons-twitter@2x.png",
    socialMediaIconsTiktok: "/img/social-media-icons-tiktok@2x.png",
    iconInstagram: "/img/social-media-icons-instagram@2x.png",
    contactUsHeaderTitle: "Let’s Talk",
    contactUsHeaderSubtitle: "If you need help you can visit the help center or read our About Us page. We are looking forward to answering any of your questions here! We hope you enjoy the app!",
    topOfPageIcon: "/img/top-of-page-icon@2x.png",
    contactUsFormEmailInput1Props: contactUsFormEmailInput1Data,
    contactUsFormEmailInput2Props: contactUsFormEmailInput2Data,
};

const navBarLeftData = {
    prodicityLogoImage: "/img/prodicity-logo-image-1@2x.png",
};

const gamilificationImage2Data = {
    gamilificationImageFeature: "/img/gamilification-image-feature-1@1x.png",
};

const groupSessionsTextGroup1Data = {
    groupSessionsTitle: "Group Sessions",
    groupSessionsDescription: "Group sessions but you have the option to conduct group and indicifual sessions. During these sessions you can chat related to studies, execute tasks on the todo list, and even listen to music!",
};

const groupSessionsTextGroup2Data = {
    groupSessionsTitle: "Marketplace",
    groupSessionsDescription: "You can buy various characters in the market system for bragging rights and other amazing purposes, but in order to do so, you have to work up to that level...",
    className: "marketplace-text-group-1",
};

const landingPageMV22Data = {
    introduction: "/img/introduction-background-1@1x.png",
    about: "About",
    featuresText: "Features",
    triangle: "/img/triangle@2x.png",
    gamification: "Gamification",
    productivity: "Productivity",
    place: "Contact",
    rocket: "/img/rocket-1@2x.png",
    waitlistTitle: "Getting Your Work Done Through Gaming!",
    waitlistSubtitle: "We created this software to making learning and work fun for others through games! Sign up now to get early access for Prodicity as soon as it gets released!",
    inputType1: "email",
    inputPlaceholder1: "Add your email... ",
    buttonText: "Get Early Access →",
    aboutUsTitle: "About Us",
    prodicityLogoLarge: "/img/prodicity-logo-large-1@1x.png",
    prodicityDescription: <React.Fragment>Hello, we are a company seeking to make people productive through video games. There will be various games like racing, <br />boss fighting, map findings, and more!<br /><br />Furthermore, we have different types of options within the app. We have quests, parties, clans, sessions, to do lists, friend tracker, and various other features!</React.Fragment>,
    socialMediaIconsYoutube1: "/img/social-media-icons-youtube-2@2x.png",
    socialMediaIconsDiscord1: "/img/social-media-icons-discord-2@2x.png",
    iconFacebook1: "/img/social-media-icons-facebook-2@2x.png",
    iconTwitter1: "/img/social-media-icons-twitter-2@2x.png",
    socialMediaIconsTiktok1: "/img/social-media-icons-tiktok-2@2x.png",
    iconInstagram1: "/img/social-media-icons-instagram-2@2x.png",
    gamilificationHeaderTitle: "Fight bosses with friends!",
    gamilificationHeaderSubtitle: "Level up your characters  and pets. Fight bosses with friends and complete challenges with your clan!",
    groupSessionsImage: "/img/group-sessions-image-1@1x.png",
    marketplaceImage: "/img/marketplace-image-1@1x.png",
    clansImage: "/img/clans-image-1@2x.png",
    clansTitle: "Clans",
    clansDescription: "Work together with your friends in order to compete in video game challenges and get tasks done.",
    questsImage: "/img/quests-image-1@2x.png",
    questsTitle: "Quests",
    questsDescription: "Complete quests in order to achieve awards.",
    challengesTitle: "Challenges",
    challengesDescription: "Complete achievements and challenges in order to get more rewards.",
    challengesImage: "/img/challenges-image-1@2x.png",
    differentiationHeaderSubtitle: "Prodicity",
    differentiationHeaderTitle: <React.Fragment>What makes <br />Prodicity such a great platform?</React.Fragment>,
    topOfPageIcon: "/img/top-of-page-icon-1@2x.png",
    contactUsFormEmailLabel: "Email:",
    inputType2: "email",
    inputPlaceholder2: "Enter Email Here",
    contactUsFormSubjectLabel: "Subject:",
    inputType3: "text",
    inputPlaceholder3: "Enter Subject Here",
    contactUsFormMessageLabel: "Message:",
    inputType4: "text",
    inputPlaceholder4: "Enter Message Here",
    contactUsRightImage: "/img/contact-us-right-image-1@2x.png",
    iconLocation_Pin: "/img/contact-us-right-location-icon-1@2x.png",
    contactUsRightLocationDescription: <React.Fragment>Cupertino, CA 95014 <br />United States</React.Fragment>,
    iconMail: "/img/contact-us-right-email-icon-1@2x.png",
    contactUsRightEmailDescription: "prodicityteam@gmail.com",
    socialMediaIconsYoutube2: "/img/social-media-icons-youtube-1@2x.png",
    socialMediaIconsDiscord2: "/img/social-media-icons-discord-1@2x.png",
    iconFacebook2: "/img/social-media-icons-facebook-1@2x.png",
    iconTwitter2: "/img/social-media-icons-twitter-1@2x.png",
    socialMediaIconsTiktok2: "/img/social-media-icons-tiktok-1@2x.png",
    iconInstagram2: "/img/social-media-icons-instagram-1@2x.png",
    navBarLeftProps: navBarLeftData,
    gamilificationImage2Props: gamilificationImage2Data,
    groupSessionsTextGroup1Props: groupSessionsTextGroup1Data,
    groupSessionsTextGroup2Props: groupSessionsTextGroup2Data,
};

const gamilificationImage3Data = {
    className: "gamilification-image-1",
};

const contactUsFormEmailInput22Data = {
    inputType: "email",
    inputPlaceholder: "Enter Email Here",
};

const contactUsFormEmailInput23Data = {
    inputType: "text",
    inputPlaceholder: "Enter Subject Here",
    className: "contact-us-form-subject-input-2",
};

const contactUsFooter3Data = {
    className: "contact-us-footer-1",
};

const landingPageXSV22Data = {
    introduction: "/img/introduction-background-2@1x.png",
    about: "About",
    gamification: "Gamification",
    productivity: "Productivity",
    place: "Contact",
    rocket: "/img/rocket@2x.png",
    waitlistTitle: "Getting Your Work Done Through Gaming!",
    waitlistSubtitle: "We created this software to making learning and work fun for others through games! Sign up now to get early access for Prodicity as soon as it gets released!",
    inputType1: "email",
    inputPlaceholder1: "Add your email... ",
    buttonText: "Get Early Access →",
    aboutUsTitle: "About Us",
    prodicityLogoLarge: "/img/prodicity-logo-large-2@1x.png",
    prodicityDescription: <React.Fragment>Hello, we are a company seeking to make people productive through video games. There will be various games like racing, <br />boss fighting, map findings, and more!<br /><br />Furthermore, we have different types of options within the app. We have quests, parties, clans, sessions, to do lists, friend tracker, and various other features!</React.Fragment>,
    gamilificationHeaderTitle: "Fight bosses with friends!",
    gamilificationHeaderSubtitle: "Level up your characters  and pets. Fight bosses with friends and complete challenges with your clan!",
    groupSessionsImage: "/img/group-sessions-image-2@2x.png",
    groupSessionsTitle: "Group Sessions",
    groupSessionsDescription: "Group sessions but you have the option to conduct group and indicifual sessions. During these sessions you can chat related to studies, execute tasks on the todo list, and even listen to music!",
    marketplaceImage: "/img/marketplace-image-2@2x.png",
    marketplaceTitle: "Marketplace",
    marketplaceDescription: "You can buy various characters in the market system for bragging rights and other amazing purposes, but in order to do so, you have to work up to that level...",
    questsImage: "/img/quests-image-2@2x.png",
    questsTitle: "Quests",
    questsDescription: "Complete quests in order to achieve awards.",
    clansTitle: "Clans",
    clansDescription: "Work together with your friends in order to compete in video game challenges and get tasks done.",
    clansImage: "/img/clans-image-2@2x.png",
    challengesImage: "/img/challenges-image-2@2x.png",
    challengesTitle: "Challenges",
    challengesDescription: "Complete achievements and challenges in order to get more rewards.",
    differentiationHeaderSubtitle: "Prodicity",
    differentiationHeaderTitle: <React.Fragment>What makes <br />Prodicity such a great platform?</React.Fragment>,
    contactUsFormEmailLabel: "Email:",
    contactUsFormSubjectLabel: "/img/contact-us-form-subject-label-1@2x.png",
    contactUsFormMessageLabel: "Message:",
    inputType2: "text",
    inputPlaceholder2: "Enter Message Here...",
    submitButtonText: "Submit",
    contactUsRightImage: "/img/contact-us-right-image-2@2x.png",
    iconLocation_Pin: "/img/contact-us-right-location-icon-2@2x.png",
    contactUsRightLocationDescription: <React.Fragment>Cupertino, CA 95014 <br />United States</React.Fragment>,
    iconMail: "/img/contact-us-right-email-icon-2@2x.png",
    contactUsRightEmailDescription: "prodicityteam@gmail.com",
    socialMediaIconsYoutube: "/img/social-media-icons-youtube-3@2x.png",
    socialMediaIconsDiscord: "/img/social-media-icons-discord-3@2x.png",
    iconFacebook: "/img/social-media-icons-facebook-3@2x.png",
    iconTwitter: "/img/social-media-icons-twitter-3@2x.png",
    socialMediaIconsTiktok: "/img/social-media-icons-tiktok-3@2x.png",
    iconInstagram: "/img/social-media-icons-instagram-3@2x.png",
    contactUsHeaderTitle: "Let’s Talk",
    contactUsHeaderSubtitle: "If you need help you can visit the help center or read our About Us page. We are looking forward to answering any of your questions here! We hope you enjoy the app!",
    topOfPageIcon: "/img/top-of-page-icon@2x.png",
    gamilificationImageProps: gamilificationImage3Data,
    contactUsFormEmailInput21Props: contactUsFormEmailInput22Data,
    contactUsFormEmailInput22Props: contactUsFormEmailInput23Data,
    contactUsFooterProps: contactUsFooter3Data,
};

const groupSessionsTextGroup22Data = {
    groupSessionsTitle: "Group Sessions",
    groupSessionsDescription: "Group sessions but you have the option to conduct group and indicifual sessions. During these sessions you can chat related to studies, execute tasks on the todo list, and even listen to music!",
};

const groupSessionsTextGroup23Data = {
    groupSessionsTitle: "Marketplace",
    groupSessionsDescription: "You can buy various characters in the market system for bragging rights and other amazing purposes, but in order to do so, you have to work up to that level...",
    className: "marketplace-text-group-3",
};

const contactUsFormEmailInput31Data = {
    inputType: "email",
    inputPlaceholder: "Enter Email Here",
};

const contactUsFormEmailInput32Data = {
    inputType: "text",
    inputPlaceholder: "Enter Subject Here",
    className: "contact-us-form-subject-input-3",
};

const landingPageSV22Data = {
    introduction: "/img/introduction-background-3@1x.png",
    about: "About",
    gamification: "Gamification",
    productivity: "Productivity",
    place: "Contact",
    rocket: "/img/rocket-1@2x.png",
    waitlistTitle: "Getting Your Work Done Through Gaming!",
    waitlistSubtitle: "We created this software to making learning and work fun for others through games! Sign up now to get early access for Prodicity as soon as it gets released!",
    inputType1: "email",
    inputPlaceholder1: "Add your email... ",
    buttonText: "Get Early Access →",
    aboutUsTitle: "About Us",
    prodicityLogoLarge: "/img/prodicity-logo-large-3@1x.png",
    prodicityDescription: <React.Fragment>Hello, we are a company seeking to make people productive through video games. There will be various games like racing, <br />boss fighting, map findings, and more!<br /><br />Furthermore, we have different types of options within the app. We have quests, parties, clans, sessions, to do lists, friend tracker, and various other features!</React.Fragment>,
    socialMediaIconsYoutube1: "/img/social-media-icons-youtube-5@2x.png",
    socialMediaIconsDiscord1: "/img/social-media-icons-discord-5@2x.png",
    iconFacebook1: "/img/social-media-icons-facebook-5@2x.png",
    iconTwitter1: "/img/social-media-icons-twitter-5@2x.png",
    socialMediaIconsTiktok1: "/img/social-media-icons-tiktok-5@2x.png",
    iconInstagram1: "/img/social-media-icons-instagram-5@2x.png",
    gamilificationHeaderTitle: "Fight bosses with friends!",
    gamilificationHeaderSubtitle: "Level up your characters  and pets. Fight bosses with friends and complete challenges with your clan!",
    gamilificationImageFeature: "/img/gamilification-image-feature-3@2x.png",
    gamilificationImageCharacter: "/img/gamilification-image-character-3@2x.png",
    groupSessionsImage: "/img/group-sessions-image-3@2x.png",
    marketplaceImage: "/img/marketplace-image-3@2x.png",
    questsTitle: "Quests",
    questsDescription: "Complete quests in order to achieve awards.",
    questsImage: "/img/quests-image-2@2x.png",
    clansTitle: "Clans",
    clansDescription: "Work together with your friends in order to compete in video game challenges and get tasks done.",
    clansImage: "/img/clans-image-2@2x.png",
    challengesTitle: "Challenges",
    challengesDescription: "Complete achievements and challenges in order to get more rewards.",
    challengesImage: "/img/challenges-image-2@2x.png",
    differentiationHeaderSubtitle: "Prodicity",
    differentiationHeaderTitle: <React.Fragment>What makes <br />Prodicity such a great platform?</React.Fragment>,
    contactUsFormEmailLabel: "Email:",
    contactUsFormSubjectLabel: "/img/contact-us-form-subject-label-2@2x.png",
    contactUsFormMessageLabel: "Message:",
    inputType2: "text",
    inputPlaceholder2: "Enter Message Here...",
    submitButtonText: "Submit",
    contactUsRightImage: "/img/contact-us-right-image-3@2x.png",
    iconLocation_Pin: "/img/contact-us-right-location-icon-3@2x.png",
    contactUsRightLocationDescription: <React.Fragment>Cupertino, CA 95014 <br />United States</React.Fragment>,
    iconMail: "/img/contact-us-right-email-icon-3@2x.png",
    contactUsRightEmailDescription: "prodicityteam@gmail.com",
    socialMediaIconsYoutube2: "/img/social-media-icons-youtube-4@2x.png",
    socialMediaIconsDiscord2: "/img/social-media-icons-discord-4@2x.png",
    iconFacebook2: "/img/social-media-icons-facebook-4@2x.png",
    iconTwitter2: "/img/social-media-icons-twitter-4@2x.png",
    socialMediaIconsTiktok2: "/img/social-media-icons-tiktok-4@2x.png",
    iconInstagram2: "/img/social-media-icons-instagram-4@2x.png",
    contactUsHeaderTitle: "Let’s Talk",
    contactUsHeaderSubtitle: "If you need help you can visit the help center or read our About Us page. We are looking forward to answering any of your questions here! We hope you enjoy the app!",
    topOfPageIcon: "/img/top-of-page-icon@2x.png",
    contactUsFooterCopyright: "Copyright © Prodicity Inc. 2022",
    groupSessionsTextGroup21Props: groupSessionsTextGroup22Data,
    groupSessionsTextGroup22Props: groupSessionsTextGroup23Data,
    contactUsFormEmailInput31Props: contactUsFormEmailInput31Data,
    contactUsFormEmailInput32Props: contactUsFormEmailInput32Data,
};

const groupSessionsTextGroup31Data = {
    groupSessionsTitle: "Group Sessions",
    groupSessionsDescription: "Group sessions but you have the option to conduct group and indicifual sessions. During these sessions you can chat related to studies, execute tasks on the todo list, and even listen to music!",
};

const groupSessionsTextGroup32Data = {
    groupSessionsTitle: "Marketplace",
    groupSessionsDescription: "You can buy various characters in the market system for bragging rights and other amazing purposes, but in order to do so, you have to work up to that level...",
    className: "marketplace-text-group-4",
};

const contactUsFormSubmitButton2Data = {
    className: "contact-us-form-submit-button-2",
};

const contactUsHeader2Data = {
    className: "contact-us-header-2",
};

const contactUsFooter22Data = {
    className: "contact-us-footer-3",
};

const landingPageLV22Data = {
    introduction: "/img/introduction-background-4@1x.png",
    navBarLeft: "/img/prodicity-logo@1x.png",
    about: "About",
    featuresText: "Features",
    triangle: "/img/triangle-1@2x.png",
    gamification: "Gamification",
    productivity: "Productivity",
    place: "Contact",
    rocket: "/img/rocket-4@1x.png",
    waitlistTitle: "Getting Your Work Done Through Gaming!",
    waitlistSubtitle: "We created this software to making learning and work fun for others through games! Sign up now to get early access for Prodicity as soon as it gets released!",
    inputType1: "email",
    inputPlaceholder1: "Add your email... ",
    buttonText: "Get Early Access →",
    aboutUsTitle: "About Us",
    prodicityLogoLarge: "/img/prodicity-logo-large-4@1x.png",
    prodicityDescription: <React.Fragment>Hello, we are a company seeking to make people productive through video games. There will be various games like racing, <br />boss fighting, map findings, and more!<br /><br />Furthermore, we have different types of options within the app. We have quests, parties, clans, sessions, to do lists, friend tracker, and various other features!</React.Fragment>,
    socialMediaIconsYoutube1: "/img/social-media-icons-youtube-2@2x.png",
    socialMediaIconsDiscord1: "/img/social-media-icons-discord-2@2x.png",
    iconFacebook1: "/img/social-media-icons-facebook-2@2x.png",
    iconTwitter1: "/img/social-media-icons-twitter-2@2x.png",
    socialMediaIconsTiktok1: "/img/social-media-icons-tiktok-2@2x.png",
    iconInstagram1: "/img/social-media-icons-instagram-2@2x.png",
    gamilificationHeaderTitle: "Fight bosses with friends!",
    gamilificationHeaderSubtitle: "Level up your characters  and pets. Fight bosses with friends and complete challenges with your clan!",
    group2: "/img/group-2@1x.png",
    groupSessionsImage: "/img/group-sessions-image-4@1x.png",
    marketplaceImage: "/img/marketplace-image-4@1x.png",
    questsImage: "/img/quests-image-4@2x.png",
    questsTitle: "Quests",
    questsDescription: "Complete quests in order to achieve awards.",
    clansImage: "/img/clans-image-4@1x.png",
    clansTitle: "Clans",
    clansDescription: "Work together with your friends in order to compete in video game challenges and get tasks done.",
    challengesImage: "/img/challenges-image-4@2x.png",
    challengesTitle: "Challenges",
    challengesDescription: "Complete achievements and challenges in order to get more rewards.",
    differentiationHeaderSubtitle: "Prodicity",
    differentiationHeaderTitle: <React.Fragment>What makes <br />Prodicity such a great platform?</React.Fragment>,
    topOfPageIcon: "/img/top-of-page-icon-4@2x.png",
    contactUsFormEmailLabel: "Email:",
    inputType2: "email",
    inputPlaceholder2: "Enter Email Here",
    contactUsFormSubjectLabel: "Subject:",
    inputType3: "text",
    inputPlaceholder3: "Enter Subject Here",
    contactUsFormMessageLabel: "Message:",
    inputType4: "text",
    inputPlaceholder4: "Enter Message Here",
    contactUsRightImage: "/img/contact-us-right-image-4@1x.png",
    iconLocation_Pin: "/img/contact-us-right-location-icon-4@1x.png",
    contactUsRightLocationDescription: <React.Fragment>Cupertino, CA 95014 <br />United States</React.Fragment>,
    iconMail: "/img/contact-us-right-email-icon-4@1x.png",
    contactUsRightEmailDescription: "prodicityteam@gmail.com",
    socialMediaIconsYoutube2: "/img/social-media-icons-youtube-6@1x.png",
    socialMediaIconsDiscord2: "/img/social-media-icons-discord-6@1x.png",
    iconFacebook2: "/img/social-media-icons-facebook-6@1x.png",
    iconTwitter2: "/img/social-media-icons-twitter-6@1x.png",
    socialMediaIconsTiktok2: "/img/social-media-icons-tiktok-6@1x.png",
    iconInstagram2: "/img/social-media-icons-instagram-6@1x.png",
    groupSessionsTextGroup31Props: groupSessionsTextGroup31Data,
    groupSessionsTextGroup32Props: groupSessionsTextGroup32Data,
    contactUsFormSubmitButtonProps: contactUsFormSubmitButton2Data,
    contactUsHeaderProps: contactUsHeader2Data,
    contactUsFooter2Props: contactUsFooter22Data,
};

