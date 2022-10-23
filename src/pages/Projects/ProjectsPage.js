import React, { useEffect } from 'react';
import ProjectsHero from './ProjectsHero';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div style={{ overflowY: 'scroll' }}>
      <ProjectsHero />
      <Projects useHeader={false} />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
