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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    ScrollTrigger.refresh();
  }, []);
  return (
    <div id="home__container" className=" relative" style={{ overflowY: 'scroll' }}>
      <Hero />
      <Projects useHeader={true} displayNo={3} />
      <Footer />
    </div>
  );
};

export default Home;
