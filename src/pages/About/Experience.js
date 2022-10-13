import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import dataSet from '../../data/DataFile';
import { BsArrowDown } from 'react-icons/bs';
import ExperienceList from '../../components/ExperienceList';

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [openWork, setOpenWork] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);
  const { working, training } = dataSet.experiences;

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [openWork, openTraining]);

  return (
    <div data-scroll-section className=" mt-16">
      <SectionHeader title="Experiences" subtitle={'& Trainings'} />
      <div className="pb-32 grid lg:grid-cols-2 gap-[6.5%] min-h-full">
        <div className="experience__work">
          <div className=" border-y border-solid border-y-white pt-8">
            <div
              className="flex justify-between border-b border-solid border-b-gray-700"
              onClick={() => setOpenWork((openWork) => !openWork)}
            >
              <h3 className=" font-montserrat font-bold pb-8 text-3xl">
                My Work Experience
              </h3>
              <BsArrowDown
                className=" text-3xl transition-all ease-in-out delay-150 duration-300"
                style={
                  openWork ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0)' }
                }
              />
            </div>
            <div
              style={openWork ? { display: 'flex' } : { display: 'none' }}
              className="transition-all ease-in-out delay-150 duration-300 pt-5"
            >
              <ExperienceList dataset={working} />
            </div>
          </div>
        </div>
        <div className="experience__train">
          <div className=" border-y border-solid border-y-white pt-8">
            <div
              className="flex justify-between border-b border-solid border-b-gray-700"
              onClick={() => setOpenTraining((openTraining) => !openTraining)}
            >
              <h3 className=" font-montserrat font-bold pb-8 text-3xl">My Trainings</h3>
              <BsArrowDown
                className=" text-3xl transition-all ease-in-out delay-150 duration-300"
                style={
                  openTraining
                    ? { transform: 'rotate(-180deg)' }
                    : { transform: 'rotate(0)' }
                }
              />
            </div>
            <div
              style={openTraining ? { display: 'flex' } : { display: 'none' }}
              className="transition-all ease-in-out delay-150 duration-300 pt-5"
            >
              <ExperienceList dataset={training} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
