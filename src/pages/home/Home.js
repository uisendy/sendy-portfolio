import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollDownIcon/ScrollToTop';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import RecentProjects from '../../components/RecentProjects/RecentProjects';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    <ScrollToTop />;
    ScrollTrigger.refresh();
  }, []);
  return (
    <div>
      <Hero />
      <RecentProjects />
      <Footer />
    </div>
  );
};

export default Home;
