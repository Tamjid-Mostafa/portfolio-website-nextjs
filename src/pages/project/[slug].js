import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../layout/Layout";
import { projectsData } from "../../constants/constants";
import {
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Intro,
  SpinnerWrapper,
  Tag,
  TagList,
  UtilityList,
} from "../../components/Projects/ProjectsStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { staggerContainer } from "../../utils/motion";
import { InfinitySpin } from "react-loader-spinner";
import { TypingText } from "../../utils/TypingTexts";
import { GoMarkGithub } from "react-icons/go";
import { BsArrowRightShort } from "react-icons/bs";

const ProjectDetails = () => {
  const { query } = useRouter();
  const { slug } = query;
  const project = projectsData.find((x) => x.slug === slug);
  if (!project) {
    return (
      <SpinnerWrapper>
        <InfinitySpin width="200" color="#00DBD8" />
      </SpinnerWrapper>
    );
  }

  const { title, description, tags, source, visit } = project;

  return (
    <Layout title={title}>
      <SectionTitle main>
        <TypingText title={`| ${title}`} />
      </SectionTitle>
      <Section
        nopadding
        fullheight
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <HeaderThree>Project's Links</HeaderThree>
        <UtilityList>
          <ExternalLinks target="_blank" href={visit}>
            <GoMarkGithub /> Github
          </ExternalLinks>
          <ExternalLinks target="_blank" href={source}>
            Visit
          </ExternalLinks>
        </UtilityList>
        <CardInfo>{description}</CardInfo>
        <>
        <Intro>Technologies</Intro>
              <TagList column>
                {tags.map((tag, i) => (
                  <Tag key={i}><BsArrowRightShort/> {tag}</Tag>
                ))}
              </TagList>
            </>
      </Section>
    </Layout>
  );
};

export default ProjectDetails;
