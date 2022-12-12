import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../layout/Layout";
import { projectsData } from "../../constants/constants";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  SpinnerWrapper,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "../../components/Projects/ProjectsStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { staggerContainer } from "../../utils/motion";
import { InfinitySpin } from "react-loader-spinner";
import { TypingText } from "../../utils/TypingTexts";

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

  const { id, title, image, description, tags, source, visit } = project;

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
            Github
          </ExternalLinks>
          <ExternalLinks target="_blank" href={source}>
            Visit
          </ExternalLinks>
        </UtilityList>
      </Section>
    </Layout>
  );
};

export default ProjectDetails;
