import React from 'react';
import Hero from '../../components/Hero/Hero';
import RecentProjects from '../../components/RecentProjects/RecentProjects';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <RecentProjects />
      <Footer />
    </div>
  );
};

export default Home;
