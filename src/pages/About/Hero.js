import React, { useEffect } from 'react';
import ScrollDown from '../../components/ScrollDownIcon/ScrollDown';
import gsap from 'gsap';
import SplitText from '../../utils/split3.min';

const Hero = () => {
  useEffect(() => {
    const split = new SplitText('.about__me', {
      type: 'lines',
      linesClass: 'proj__lineChildren',
    });

    new SplitText('.about__me', {
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
      <div className="about__me flex flex-col justify-center lg:justify-start lg:pt-[6.5%] w-[87%] mx-[auto] my-0 h-[89vh]">
        {' '}
        <h2 className=" text-5xl md:text-7xl lg:text-[7rem] mb-8">
          I am <span className=" underline-offset-8 opacity-50 italic">Sendy Inieke</span>{' '}
        </h2>
        <h3 className=" text-4xl md:text-5xl md:text-[7rem] mb-8">
          FULL-STACK <br /> WEB DEVELOPER
        </h3>
        <p className=" font-montserrat font-extralight opacity-70 lg:text-2xl">
          Chess Player, Researcher, Energy Enthusiast
        </p>
      </div>
      <div className="absolute top-[93%] left-[47%] lg:left-[50%]">
        <ScrollDown />
      </div>
    </div>
  );
};

export default Hero;
