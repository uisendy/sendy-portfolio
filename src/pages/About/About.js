import React, { useEffect } from 'react';
import Hero from './Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className=" text-white px-[6.5%]">
      <Hero />
    </section>
  );
};

export default About;
