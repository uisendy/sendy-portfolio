import React from 'react';
import ScrollDown from '../../components/ScrollDownIcon/ScrollDown';

const Hero = () => {
  return (
    <div className="relative mb-10">
      <div
        className=" flex flex-col justify-center lg:justify-start pt-[2%] w-[87%] mx-[auto] my-0 h-[89vh]"
        data-scroll-section
      >
        {' '}
        <h2 className=" text-5xl md:text-7xl lg:text-[7rem] mb-8">
          I am <span className=" underline-offset-8 opacity-50 italic">Sendy Inieke</span>{' '}
        </h2>
        <h3 className=" text-4xl md:text-5xl md:text-[7rem] mb-8">
          A FULL-STACK <br /> WEB DEVELOPER <br />
        </h3>
        <p className=" font-montserrat font-extralight opacity-70 lg:text-2xl">
          Chess Player, Researcher, Energy Enthusiast
        </p>
        <div className="absolute top-[90%] left-[47%]">
          <ScrollDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
