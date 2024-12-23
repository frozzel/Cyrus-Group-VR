import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
// eslint-disable-next-line
import { css } from "styled-components/macro"; 

import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "./components/misc/Buttons";


import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import logo from "images/cyrusLogo.webp";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
// const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 lg:mr-12 last:mr-0 text-gray-700 border-gray-400 hocus:border-gray-700 `;
// const PrimaryNavLink = tw(
//   NavLink
// )`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline`;
const HeroRow = tw(Row)`max-w-xl flex-col justify-between items-center py-20 lg:py-24 mx-auto`;

const Heading = tw(HeadingBase)`text-center text-primary-300 leading-snug`;
const Description = tw(DescriptionBase)`mt-4 text-center lg:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default () => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  const downloadUrl = "/treact-ui.zip"
  React.useEffect(() => {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = downloadUrl
    document.body.appendChild(iframe);
  }, [])

  return (
    <AnimationRevealPage disabled>
      <Container tw="-mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              
            </LogoLink>

          </NavRow>
          <HeroRow>
            <Heading>Thank You!</Heading>
            <Description tw="mt-12">Thank you for reaching out! One of our dedicated sales representatives will be in touch soon to get your development project underway. To make this process as swift as possible, we kindly ask you to arrange a meeting time.</Description>
            <PrimaryButton buttonRounded="true" as="a" href="https://meetings.hubspot.com/dennis-hickox" target="_blank">Book Meeting</PrimaryButton>
            

          </HeroRow>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
