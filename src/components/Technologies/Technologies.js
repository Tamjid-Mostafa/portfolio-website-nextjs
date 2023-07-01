import React from "react";
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
  ListTitle,
} from "./TechnologiesStyles";
import {
  fadeIn,
  staggerContainer,
} from "../../utils/motion";
import { TypingText } from "../../utils/TypingTexts";
import { Stacks } from "../../constants/constants";

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
    <SectionText
    variants={fadeIn('up', 'tween', 0.2, 1)}
    >
      I've worked with a range a technologies in the web development world from
      Back-end to design
    </SectionText>
    <List 
    variants={fadeIn('up', 'tween', 0.5, 1)}
    >
      {
        Stacks.map((stack, i) => (
          <ListItem key={i}>
        {stack.icon}
        <ListContainer>
          <ListTitle>{stack.title}</ListTitle>
        </ListContainer>
      </ListItem>
        ))
      }
{/*       <ListItem>
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
      </ListItem> */}
      
    </List>
  </Section>
);

export default Technologies;
