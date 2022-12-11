
import Timeline from '../src/components/TimeLine/TimeLine';
import BackgroundAnimation from '../src/components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../src/components/Hero/Hero';
import Projects from '../src/components/Projects/Projects';
import Technologies from '../src/components/Technologies/Technologies';
import ContactMe from '../src/components/ContactMe/ContactMe';
import { Layout } from '../src/layout/Layout';
import { Section } from '../src/styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <ContactMe />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
