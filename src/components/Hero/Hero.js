import React, { useEffect } from 'react';
import './hero.css';
import ScrollDown from '../ScrollDownIcon/ScrollDown.js';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import SplitText from '../../utils/split3.min.js';

const Hero = () => {
  useEffect(() => {
    const split = new SplitText('.welcome__heading', {
      type: 'lines',
      linesClass: 'header__lineChildren',
    });

    // const contactSplit = new SplitText('.contact', {
    //   type: 'lines',
    //   linesClass: 'lineChildrenDev',
    // });

    const splitDesc = new SplitText('#header-desc', {
      type: 'lines',
      linesClass: 'lineChildren__Desc',
    });

    new SplitText('.welcome__heading', {
      type: 'lines',
      linesClass: 'header__lineParents',
    });
    // new SplitText('.contact', {
    //   type: 'lines',
    //   linesClass: 'lineParents',
    // });
    // new SplitText('#header-dev', {
    //   type: 'lines',
    //   linesClass: 'lineParents',
    // });

    new SplitText('#header-desc', {
      type: 'words,chars',
      linesClass: 'lineParents__desc',
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

    gsap
      .timeline()
      .from(splitDesc.lines, {
        delay: 2,
        duration: 2,
        opacity: 0,
        x: 100,
        ease: 'power2',
      })
      .to(splitDesc.lines, {
        opacity: 1,
        stagger: 0.1,
        rotate: 0,
      });

    // gsap.timeline().to(contactSplit.lines, {
    //   duration: 4,
    //   y: 0,
    //   opacity: 1,
    //   stagger: 0.1,
    //   ease: 'power2',
    // });
    // gsap.set('#header-dev', { perspective: 400 });
    // gsap.timeline().from(splitDesc.lines, {
    //   duration: 3,
    //   opacity: 0,
    //   scale: 0,
    //   y: 80,
    //   rotationX: 180,
    //   transformOrigin: '0% 50% -50',
    //   ease: 'back',
    //   stagger: 0.01,
    // });

    // gsap.set('#header-desc', { perspective: 400 });
  }, []);
  return (
    <section data-scroll-section className=" relative h-[95vh] text-white">
      <div className="relative flex flex-col gap-24 justify-center items-start w-[87%] h-[100%] my-0 mx-auto ">
        <div className="welcome__heading">
          <h1 id="header" className=" uppercase text-7xl md:text-9xl font-extrabold  ">
            Hi, I'm Sendy.
          </h1>
          <p
            id="header-dev"
            className=" text-3xl border-t-[1px] pt-5 lg:text-6xl font-light md:border-t-0 lg:pt-0 opacity-50"
          >
            FULL-STACK <br />
            DEVELOPER
          </p>
        </div>
        <Link className="say__hello__link font-montserrat flex justify-center items-center gap-4 text-center text-2xl lg:pt-10 px-2">
          <p className="say__hello pb-2 md:pb-4">CONTACT</p>
          <BsArrowUpRight className="arrow__up text-4xl md:text-6xl font-light visible md:invisible " />
        </Link>
      </div>
      <div
        id="header-desc"
        className=" hidden uppercase font-light md:flex md:flex-col md:gap-4 font-montserrat text-justify text-sm md:absolute lg:top-[52%] lg:left-[70%] md:w-[25%] opacity-50 hover:opacity-100 transition-all ease-in-out delay-150 duration-300"
      >
        <small>
          My objective is to represent the trustworthiness and goodwill of the brand by
          developing an application that is valuable, optimally functioning, and offers
          the best user experience.
        </small>
        <div className="flex gap-2 pt-8 items-center">
          <Link
            to="/a-sendyinieke"
            className=" text-white text-lg hover:border-b hover:border-white hover:border-solid"
          >
            More
          </Link>
          <BsArrowUpRight />{' '}
        </div>
      </div>
      <div className="absolute bottom-[8%] left-[47%]">
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;
