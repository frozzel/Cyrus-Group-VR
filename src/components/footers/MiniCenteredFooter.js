import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/cyrusLogo.webp";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/icons8-linkedin-logo.svg";
import { ReactComponent as InstagramIcon } from "../../images/icons8-instagram.svg";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-80`;
// const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row `;
const Link = tw.a`border-b-2 border-transparent hocus:text-pink-500 hocus:border-pink-500 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-pink-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            {/* <LogoText>Treact</LogoText> */}
          </LogoContainer>
          <LinksContainer>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#feature">Integrations</Link>
            <Link href="#ai">Artificial Intelligence</Link>
            <Link href="#vr">Virtual Reality</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/profile.php?id=61557551548220" target="_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/CyrusGroupInv" target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/cyrusgroupinnovations/" target="_blank">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/cyrus-group-innovations" target="_blank">
              <LinkedInIcon />
            </SocialLink>
          </SocialLinksContainer>
          
          <CopyrightText>
            &copy; Copyright 2024, Cyrus Group Innovations. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
