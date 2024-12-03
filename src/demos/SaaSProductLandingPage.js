import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnHomeIntro";
import Features from "components/features/FeaturesHome";
import MainFeature from "components/features/VirtualReality";
import Footer from "components/footers/MiniCenteredFooter";
import heroScreenshotImageSrc from "images/vr_new.webp";
import TwoColStats from "components/features/TwoColStats";
import AiFeatures from "components/features/AiFeatures";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-300`;
  const HighlightedText = tw.span`text-primary-300`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <TwoColStats />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Integrations That Get You
            <HighlightedText> Results.</HighlightedText>
          </>
        }
      />
      <AiFeatures
      subheading={<Subheading></Subheading>}
      heading={
        <>
          Artificial Intelligence Solutions
          <HighlightedText> </HighlightedText>
        </>
      }/>
      <MainFeature
        subheading={<Subheading>Revolutionize Your Business with</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />

      <Footer />
    </AnimationRevealPage>
  );
}
