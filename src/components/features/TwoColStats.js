import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import Women from "images/Successful business woman with arms crossed - isolated over white copy-1 (1).webp";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-top h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-primary-300 hover:text-pink-500`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-300`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const features = ["Seamless CRM Integrations:", "Effortless E-commerce Solutions", "Innovative AI Integrations", "SEO Optimization Strategies", "Custom Web Development", "Mobile App Development", "Social Media Marketing Integrations", "Payment Processing Solutions"];


export default ({textOnLeft = false}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects


  return (
    <Container>
      <TwoColumn id="about">
        <ImageColumn>
          <Image imageSrc={Women} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>Transform Your Online Presence</Heading>
            <Description>Whether you're looking to integrate CRM systems, optimize your e-commerce platform, or boost your search engine rankings, we have the expertise and dedication to bring your vision to life. </Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
