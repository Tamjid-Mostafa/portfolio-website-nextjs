
import Timeline from '../components/TimeLine/TimeLine';
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import ContactMe from '../components/ContactMe/ContactMe';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid >
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
