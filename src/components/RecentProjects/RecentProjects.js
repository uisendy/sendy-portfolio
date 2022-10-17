import React, { useState, useRef, useEffect } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import projects from '../../data/PortfolioImage';
import './projectlist.css';
import ProjectList from './ProjectList';
import ProjectListMobile from './ProjectListMobile';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const RecentProjects = () => {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);
  const refMobile = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray('.projects__wrapper');
      console.log(sections);
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: ref.current,
          scroller: '#main-container',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current?.offsetWidth}`,
          pinSpacing: true,
        },
      });

      ScrollTrigger.refresh();
    });
    setTimeout(() => {
      gsap.utils.toArray('.project__wrapper__mobile').forEach((wrapper, i) => {
        ScrollTrigger.create({
          trigger: wrapper,
          pin: true,
          pinSpacing: false,
          snap: 1,
          scrub: 1,
        });
        gsap.from(wrapper.children, {
          y: 50,
          scrollTrigger: {
            trigger: wrapper,
            start: 'top center',
            end: 'top top',
            toggleActions: 'play none reverse reset',
          },
        });
      });

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section
      data-scroll-section
      className=" text-white bg-black overflow-hidden mt-32 lg:mt-60"
    >
      <SectionHeader title={'Recently'} subtitle={'Completed Projects'} />

      {/* Desktop Version */}
      <div
        ref={ref}
        id="projects"
        className="projects hidden h-[80vh] md:h-[100vh] md:pt-[15vh] md:pb-[2vh] md:w-[500%] lg:flex flex-nowrap relative"
      >
        <div className="projects-counter text-xl font-montserrat absolute top-[6%] left-[150px] z-10 mix-blend-difference text-white inline-block ">
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
