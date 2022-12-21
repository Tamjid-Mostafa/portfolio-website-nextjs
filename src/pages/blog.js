import React from "react";
import { ComingSoon, Section } from "../styles/GlobalComponents";
import { staggerContainer } from "../utils/motion";
import {  TypingText } from "../utils/TypingTexts";

const Blog = () => {
  return (
    <Section variants={staggerContainer} initial="hidden" whileInView="show">
      <ComingSoon>
        <TypingText title="Coming Soon" />
      </ComingSoon>
    </Section>
  );
};

export default Blog;
