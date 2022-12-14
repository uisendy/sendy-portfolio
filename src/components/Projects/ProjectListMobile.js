import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import cn from 'classnames';
import './projectlist.css';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const ProjectListMobile = ({ updateActiveImage, project, index, displayNo }) => {
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
          'project__wrapper__mobile bg-black aspect-video h-[60vh] w-[100vw]',
          {
            'is-reveal': onScreen,
          },
        )}
      >
        <div className=" project__item__mobile h-full mx-[7%] my-[5%] ">
          <div
            className={cn(
              'project__image__image relative overflow-hidden bg-cover will-change-transform bg-center origin-center w-[100%] h-[100%] scale-100 ',
              { 'is-reveal': onScreen },
            )}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className=" project__description__mobile bg-black w-full h-1/2 py-10 font-montserrat absolute bottom-0 font-light project__info__mobile flex flex-col gap-4 ">
              <h1 className="project__info__name__mobile text-center text-3xl text-white">
                {project.name}
              </h1>
              <div className="flex justify-center gap-3 ">
                <a href={project.source} className=" text-sm flex items-center gap-1">
                  <small>VIEW PROJECT </small>
                  <span>
                    <BsArrowUpRightCircle className="text-xl" />
                  </span>
                </a>
                <div className=" w-px h-5 bg-white"></div>
                <a href={project.github} className="text-sm flex items-center gap-1">
                  <small>VIEW SOURCE </small>
                  <span>
                    <FaGithub className=" text-xl" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectListMobile;
