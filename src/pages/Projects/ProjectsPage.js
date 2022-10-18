import React from 'react';
import ProjectsHero from './ProjectsHero';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsHero />
      <Projects useHeader={false} />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
