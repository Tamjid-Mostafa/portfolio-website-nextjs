import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { TypingText } from "../../utils/TypingTexts";

const Hero = () => {
  return (
    <Section
      row
      nopadding
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <LeftSection
        
      >
        <SectionTitle main center
        variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          Welcome to
          <br />
          <TypingText title="Tamjid Mostafa" />
        </SectionTitle>
        <SectionText
        variants={fadeIn('up', 'tween', 0.4, 1)}
        >
          I am a Full Stack Web Developer based in
          Bangladesh. I develop full-stack web applications using the MERN
          Stack, but I mostly love working on the front end using CSS and React.
        </SectionText>
        <Button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1wWiVkINyX2bF2tyW4FTFgaxWlDWWsnOw/view?usp=share_link",
              "_blank"
            );
          }}
        >
          Get My Resume
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
