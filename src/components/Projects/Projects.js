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
  DetailsButton,
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

const Projects = () => {

  
  return (
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
            <Img src={image[0]} />
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            <CardInfo>{description.slice(0, 100)}</CardInfo>
            <>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </>
            <UtilityList>
              <ExternalLinks target="_blank" href={visit}>
                Github
              </ExternalLinks>
              <ExternalLinks target="_blank" href={source}>
                Visit
              </ExternalLinks>
            </UtilityList>
            <Link href={`/project/${slug}`}><DetailsButton>More Info</DetailsButton></Link>
            
            </TitleContent>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);
                };

export default Projects;
