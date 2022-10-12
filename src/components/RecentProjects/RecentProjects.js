import React, { useRef, useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import projects from '../../data/PortfolioImage';
import ProjectList from './ProjectList';
import ProjectListMobile from './ProjectListMobile';

const RecentProjects = () => {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);
  const refMobile = useRef(null);
  return (
    <section data-scroll-section className=" text-white overflow-hidden mt-32 lg:mt-60">
      <SectionHeader title={'Recently'} subtitle={'Completed Projects'} />

      {/* Desktop Version */}
      <div
        ref={ref}
        id="projects"
        className="projects hidden h-[80vh] md:h-[100vh] md:pt-[15vh] md:pb-[2vh] md:w-[500%] lg:flex flex-nowrap relative"
      >
        <div className="projects-counter absolute top-[10%] left-[100px] z-10 mix-blend-difference text-base text-white inline-block ">
          <span>{activeImage}</span>
          <span className="divider bg-white w-[6.25vw] my-[7px] mx-[10px] h-[1px] inline-block" />
          <span>{projects.length}</span>
        </div>
        {projects.map((project, index) => (
          <ProjectList
            key={project.id}
            project={project}
            index={index}
            activeImage={activeImage}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
      {/* Mobile Version */}
      <div ref={refMobile} id="projects__mobile" className="projects__mobile lg:hidden ">
        {projects.map((project, index) => (
          <ProjectListMobile
            key={project.id}
            project={project}
            index={index}
            activeImage={activeImage}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
