import React, { useEffect } from 'react';
import Hero from './Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Description from './Description';
import Experience from './Experience';
import Skills from './Skills';
import Footer from '../../components/Footer/Footer';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className=" text-white" style={{ overflowY: 'scroll' }}>
      <Hero />
      <Description />
      <Skills />
      <Experience />
      <Footer />
    </section>
  );
};

export default About;
