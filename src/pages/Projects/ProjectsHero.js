import React, { useEffect } from 'react';
import ScrollDown from '../../components/ScrollDownIcon/ScrollDown';
import { gsap } from 'gsap';
import SplitText from '../../utils/split3.min';
import './projects.css';

const ProjectsHero = () => {
  useEffect(() => {
    const split = new SplitText('.my__projects', {
      type: 'lines',
      linesClass: 'proj__lineChildren',
    });

    new SplitText('.my__projects', {
      type: 'lines',
      linesClass: 'proj__lineParents',
    });

    gsap
      .timeline()
      .from(split.lines, {
        duration: 2,
        opacity: 0,
        y: 250,
        rotate: 5,
        ease: 'power2',
      })
      .to(split.lines, {
        opacity: 1,
        stagger: 0.1,
        rotate: 0,
      });
  }, []);
  return (
    <div className="relative mb-10" data-scroll-section>
      <div
        className=" flex flex-col justify-center w-[87%] mx-[auto] my-0 h-[89vh]"
        data-scroll-section
      >
        <h2 className="my__projects text-6xl lg:text-9xl font-playFairSc text-white text-center uppercase ">
          My Projects
        </h2>
      </div>
      <div className="absolute top-[90%] left-[47%] lg:left-[50%]">
        <ScrollDown />
      </div>
    </div>
  );
};

export default ProjectsHero;
