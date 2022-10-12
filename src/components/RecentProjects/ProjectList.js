import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import cn from 'classnames';
import './projectlist.css';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const ProjectList = ({ updateActiveImage, project, index }) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.8);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <div
      ref={ref}
      className={cn(
        'projects-wrapper project__wrapper__mobile aspect-video h-[100%] w-[100vw]',
        {
          'is-reveal': onScreen,
        },
      )}
    >
      <div className="hidden md:block " />
      <div className=" project-item my-[5%] mx-[7%] p-[5%] md:will-change-transform rounded lg:rounded-2xl border border-zinc-400 flex flex-col lg:flex-row gap-7">
        <div
          className={cn(
            'project-image bg-cover will-change-transform bg-center origin-center w-[50%] h-[100%] scale-100 lg:rounded-xl ',
            { 'is-reveal': onScreen },
          )}
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className=" font-montserrat font-extralight project-info flex flex-col justify-between py-9">
          <h1 className="project-info-name  text-center md:text-left text-[4vw] text-bold text-white">
            {project.name}
          </h1>
          <div className="flex gap-6">
            <a href="#home" className="flex items-center gap-2 hover:underline">
              VIEW PROJECT{' '}
              <span>
                <BsArrowUpRightCircle className="text-2xl" />
              </span>
            </a>
            <a href="#sourceLink" className="flex items-center gap-3 hover:underline">
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
};

export default ProjectList;
