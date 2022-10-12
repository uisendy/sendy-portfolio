import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import cn from 'classnames';
import './projectlist.css';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const ProjectListMobile = ({ updateActiveImage, project, index }) => {
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
      className={cn('project__wrapper__mobile  aspect-video h-[80vh] w-[100vw]', {
        'is-reveal': onScreen,
      })}
    >
      <div className=" project__item__mobile h-full mx-[7%] ">
        <div
          className={cn(
            'project__image__image relative overflow-hidden bg-cover will-change-transform bg-center origin-center w-[100%] h-[100%] scale-100 ',
            { 'is-reveal': onScreen },
          )}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className=" project__description__mobile w-full h-1/3 py-10 font-montserrat absolute bottom-0 font-light project__info__mobile flex flex-col gap-4 justify-between ">
            <h1 className="project__info__name__mobile text-center text-3xl text-white">
              {project.name}
            </h1>
            <div className="flex justify-center gap-3 ">
              <a href="#home" className=" text-sm flex items-center gap-1">
                <small>VIEW PROJECT </small>
                <span>
                  <BsArrowUpRightCircle className="text-xl" />
                </span>
              </a>
              <div className=" w-px h-5 bg-white"></div>
              <a href="#sourceLink" className="text-sm flex items-center gap-1">
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
};

export default ProjectListMobile;
