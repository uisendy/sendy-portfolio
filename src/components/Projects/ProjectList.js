import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import './projectlist.css';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const ProjectList = ({ updateActiveImage, project, index, displayNo }) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.8);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  if (index < displayNo) {
    return (
      <div
        ref={ref}
        className={cn(
          'projects__wrapper project__wrapper__mobile aspect-video h-[100%] w-[100vw]',
          {
            'is-reveal': onScreen,
          },
        )}
      >
        <div className="hidden md:block " />
        <div className=" project-item lg: h-[82%] mx-[7%] p-[5%] md:will-change-transform rounded lg:rounded-2xl border border-zinc-400 grid grid-cols-2 gap-7">
          <div
            className={cn(
              'project-image bg-cover will-change-transform bg-center origin-center h-[100%] scale-100 lg:rounded-xl ',
              { 'is-reveal': onScreen },
            )}
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className=" relative font-montserrat font-extralight project-info">
            <h1 className="project-info-name  text-center md:text-left text-[3vw] text-bold text-white">
              {project.name}
            </h1>
            <ul className="flex items-center gap-3">
              {project.technology.map((tech) => (
                <li
                  key={uuidv4()}
                  className=" text-[10px] py-1 px-2 text-white font-bold border-white border-solid border"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <p className="project__description text-sm pt-10">{project.description}</p>
            <div className="absolute top-[90%] flex gap-6">
              <a
                href={project.source}
                className="flex items-center gap-2 hover:underline"
              >
                VIEW PROJECT{' '}
                <span>
                  <BsArrowUpRightCircle className="text-2xl" />
                </span>
              </a>
              <a
                href={project.github}
                className="flex items-center gap-3 hover:underline"
              >
                VIEW SOURCE{' '}
                <span>
                  <FaGithub className=" text-2xl" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    );
  }
};

export default ProjectList;
