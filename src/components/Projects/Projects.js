import React from "react";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ExternalLinks,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projectsData } from "../../constants/constants";
import { TypingText } from "../../utils/TypingTexts";
import {
  staggerContainer,
} from "../../utils/motion";
import Link from "next/link";

const Projects = () => (
  <Section
    nopadding="true"
    id="projects"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <SectionDivider />
    <SectionTitle main>
      <TypingText title="| Projects" />
    </SectionTitle>
    <GridContainer>
      {projectsData.map(
        ({ id, title, image, description, tags, source, visit, slug }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title="true">{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description.slice(0, 100)}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target="_blank" href={visit}>
                Code
              </ExternalLinks>
              <ExternalLinks target="_blank" href={source}>
                Source
              </ExternalLinks>
            </UtilityList>
            <Link href={`/project/${slug}`}>See Details</Link>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
