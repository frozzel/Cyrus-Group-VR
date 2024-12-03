import React from "react";
import styled from "styled-components";
import tw from "twin.macro";//eslint-disable-next-line
import { css } from "styled-components/macro";
import Robot from "images/robotcrop.png";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/brain.svg";
import ShieldIconImage from "images/ChatGPT_logo.svg";


const Container = tw.div`relative`;


// const ThreeColumnContainer = styled.div`
//   ${tw`flex items-stretch flex-wrap justify-between max-w-screen-2xl mx-auto py-20 md:py-24`}
// `;
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-wrap md:flex-row flex-col items-center md:items-stretch justify-center max-w-screen-2xl mx-auto py-20 md:py-24`}
`;

const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full text-center sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl`;


const Column = styled.div`
  ${tw`flex-1 flex-grow flex-shrink-0 basis-0 px-4 py-12 sm:py-16 md:py-20 lg:py-24`}

`;



const Row = styled.div`
  ${tw`flex flex-row justify-start items-center flex-wrap w-full`}
`;

const ImageColumn = styled.div`
  ${tw`relative flex items-center justify-center w-full h-auto`}

  img {
    ${tw`w-full h-full object-cover`}
  }

  @media (max-width: 768px) {
    ${tw`w-full h-auto`} // Full height on small screens
    img {
      ${tw`w-full h-auto object-cover`} // Full-screen image
    }
  }
`;




const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw` text-center rounded-full p-2 flex-shrink-0`}
    img {
      ${tw`w-16 h-16`}
    }
  }

  .textContainer {
    ${tw` mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-4xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 text-xl leading-loose`}
  }
    @media (max-width: 768px) {
    .imageContainer {
        img {
            ${tw`w-16 h-16`}
        }
}
            .textContainer {    
                ${tw` mt-4 sm:mt-2 text-center `}
            }
            .title {
                ${tw`mt-4  font-bold text-xl leading-none`}
            }
            .description {
                ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 text-base leading-loose`}
            }
        }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features",  }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Unlock the power of Open AI",
      description: "Customize your chat GPT to effortlessly generate blog posts, social media content, and automate all your content creation requirements."
    },
    { imageSrc: SupportIconImage, title: "Empowered Chatbots", description: "Create highly advanced chatbots that are designed to meet the unique needs of your business. These intelligent bots will provide tailored responses to effectively reduce service requests for your company. " },
    // { imageSrc: CustomizeIconImage, title: "CRM Integrations", description: "Supercharge your marketing, sales, and service teams by seamlessly integrating your data collection with your CRM." },
    // { imageSrc: ReliableIconImage, title: "Payment Processing", description: "Enhance and accelerate your business requirements by seamlessly collecting payments online with stripe." },
    // { imageSrc: FastIconImage, title: "Google Analytics", description: "Harness the immense potential of Google Ads and Analytics to drive the growth and profitability of your website." },
    // { imageSrc: SimpleIconImage, title: "Virtual Reality", description: "Create a unique and immersive experience for your customers with our Virtual Reality services." }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer id="ai">
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {/* {description && <Description>{description}</Description>} */}
        {/* <TwoColumn> */}
        <Column as={ImageColumn}>
        {/* <ImageColumn> */}
          <img src={Robot} alt="Robot Ai" />
        {/* </ImageColumn> */}
        </Column>
        {/* <VerticalSpacer /> */}
        <Column>
        {cards.map((card, i) => (
          <Row key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Row>
        ))}
        </Column>
        {/* </TwoColumn> */}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
