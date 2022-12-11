import React from "react";
import { DiFirebase, DiReact, DiUikit, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  slideIn,
} from "../../utils/motion";
import { TypingText } from "../../utils/TypingTexts";

const Technologies = () => (
  <Section
    id="tech"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <SectionDivider />
    <br />
    <SectionTitle main><TypingText title="| Technologies" /></SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world from
      Back-end to design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            Node & Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/*  <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            Experience with<br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
