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
      <LeftSection>
        <SectionTitle main center variants={fadeIn("up", "tween", 0.2, 1)}>
          Hey there! !
          <br />
          <TypingText title="" />
        </SectionTitle>
        <SectionText variants={fadeIn("up", "tween", 0.4, 1)}>
          I'm Tamjid Mostafa, a confident and passionate Web Developer from
          Bangladesh, specializing in Full Stack Development. As a React
          Developer, I bring exceptional talent in Full Stack Development to
          dynamic software firms. Let's embark on this thrilling journey
          together!
        </SectionText>
        <Button
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1gZIRlZSPwVY3pYUqmaqImg6ZAeUX8wW7/view?usp=sharing",
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
