import React, { useEffect } from 'react';
import './hero.css';
import ScrollDown from '../ScrollDownIcon/ScrollDown.js';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import SplitText from '../../utils/split3.min.js';

const Hero = () => {
  useEffect(() => {
    const split = new SplitText('#header', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    const splitPos = new SplitText('#header-dev', {
      type: 'lines',
      linesClass: 'lineChildrenDev',
    });
    const contactSplit = new SplitText('.contact', {
      type: 'lines',
      linesClass: 'lineChildrenDev',
    });

    const splitDesc = new SplitText('#header-desc', {
      type: 'lines',
      linesClass: 'lineChildrenDesc',
    });

    new SplitText('#header', {
      type: 'lines',
      linesClass: 'lineParents',
    });
    new SplitText('.contact', {
      type: 'lines',
      linesClass: 'lineParents',
    });
    new SplitText('#header-dev', {
      type: 'lines',
      linesClass: 'lineParents',
    });

    // new SplitText('#header-desc', {
    //   type: 'words,chars',
    //   linesClass: 'lineParents',
    // });
    gsap.timeline().to(split.lines, {
      duration: 2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
    gsap.set('#header', { perspective: 400 });

    gsap.timeline().to(splitPos.lines, {
      duration: 3,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
    gsap.timeline().to(contactSplit.lines, {
      duration: 4,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
    gsap.set('#header-dev', { perspective: 400 });
    gsap.timeline().from(splitDesc.lines, {
      duration: 3,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
    });

    gsap.set('#header-desc', { perspective: 400 });
  }, []);
  return (
    <section data-scroll-section className="h-[80vh] text-white mb-20">
      <div className="relative flex flex-col gap-2 md:gap-0 justify-center mb-20 pt-12 items-start w-[70%] h-[100%] my-0 mx-auto ">
        <h1
          id="header"
          className=" uppercase text-7xl italic md:not-italic md:text-9xl font-extrabold  "
        >
          Hi, I'm Sendy.
        </h1>
        <p
          id="header-dev"
          className=" text-3xl border-t-[1px] pt-5 md:text-8xl font-light italic md:border-t-0 md:pt-0"
        >
          Web Developer
        </p>
        <Link className="say__hello__link absolute top-[85%] lg:top-[95%] left-[0%] font-montserrat flex justify-center items-center gap-4 text-center text-2xl lg:pt-10 px-2">
          <p className="say__hello pb-2 md:pb-4">CONTACT</p>
          <BsArrowUpRight className="arrow__up text-4xl md:text-6xl font-light visible md:invisible " />
        </Link>

        <div
          id="header-desc"
          className=" hidden uppercase font-light md:flex md:flex-col md:gap-4 font-montserrat text-justify text-sm md:absolute md:top-[75%] md:left-[87%] md:w-[25%] opacity-50 hover:opacity-100 transition-all ease-in-out delay-150 duration-300"
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
        <div className="absolute top-[100%] left-[50%]">
          <ScrollDown xPosition={'16%'} yPosition={'80%'} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
