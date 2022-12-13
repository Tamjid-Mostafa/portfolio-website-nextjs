import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../layout/Layout";
import { projectsData } from "../../constants/constants";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Img,
  ImgGallery,
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
import { GoGlobe, GoMarkGithub } from "react-icons/go";
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

  const { title, description, image, technologies, source, visit } = project;
  console.log(project.image[0]);
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
            <GoMarkGithub /><span>Github</span>
          </ExternalLinks>
          <ExternalLinks target="_blank" href={source}>
            <GoGlobe /><span>Visit</span>
          </ExternalLinks>
        </UtilityList>
        <CardInfo>{description}</CardInfo>
        <>
          <Intro>Technologies</Intro>
          <TagList column>
            {technologies.map((tag, i) => (
              <Tag key={i}>
                <BsArrowRightShort /> <span>{tag}</span>
              </Tag>
            ))}
          </TagList>
        </>
        <HeaderThree marginy>Image Gallery</HeaderThree>
        <PhotoProvider maskOpacity={0.8}>
          <ImgGallery>
            {image.map((item, index) => (
              <PhotoView key={index} src={item}>
                <Img src={item} alt="" />
              </PhotoView>
            ))}
          </ImgGallery>
        </PhotoProvider>
      </Section>
    </Layout>
  );
};

export default ProjectDetails;
