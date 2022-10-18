import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollDownIcon/ScrollToTop';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    <ScrollToTop />;
    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="relative">
      <Hero />
      <Projects useHeader={true} displayNo={3} />
      <Footer />
    </div>
  );
};

export default Home;
