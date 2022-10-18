import React, { useEffect } from 'react';
import Hero from './Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import Description from './Description';
import Experience from './Experience';
import Skills from './Skills';
import Footer from '../../components/Footer/Footer';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className=" text-white">
      <Hero />
      <Description />
      <Skills />
      <Experience />
      <Footer />
    </section>
  );
};

export default About;
