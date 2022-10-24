import React, { useState, useEffect, useRef } from 'react';
import './footer.css';
import gsap from 'gsap';
import SplitText from '../../utils/split3.min.js';
import cn from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';
import { BsArrowUpRight } from 'react-icons/bs';
import myResume from '../../assets/Documents/Sendy_Inieke_Resume.pdf';

import { FaGithub, FaLinkedinIn, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText('#footer-header', {
        type: 'lines',
        linesClass: 'lineChildren',
      });
      new SplitText('#footer-header', {
        type: 'lines',
        linesClass: 'lineParent',
      });
      const splitCopyright = new SplitText('#copyright-tag', {
        type: 'lines',
        linesClass: 'charChildren',
      });
      new SplitText('#copyright-tag', {
        type: 'lines',
        linesClass: 'charParent',
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 2,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
        },
      );

      gsap.fromTo(
        splitCopyright.lines,
        { y: 200 },
        {
          duration: 2,
          delay: 0,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
        },
      );
    }
  }, [reveal]);
  return (
    <footer
      data-scroll-section
      ref={ref}
      className={cn(
        'footer-section z-50  lg:h-screen text-white pt-10 flex flex-col gap-7 justify-center',
        { 'is-reveal': onScreen },
      )}
    >
      <div className="footer-container md:grid md:grid-cols-2 md:gap-20 md:items-center w-[87%] mx-auto py-20 md:py-0">
        <div className="pb-12">
          <p
            id="footer-header"
            className=" font-montserrat font-light text-xl text-center pb-10 md:text-3xl md:text-left "
          >
            At this time, I'm hoping to join a new development team. Please let me know if
            you believe we might make a good match.
          </p>
          <Link
            id="mail"
            className="say__hello__link font-montserrat flex justify-center md:justify-start items-center gap-4 text-center text-2xl py-5 md:text-left"
            to="/contact"
          >
            <p className="say__hello pb-4">Say Hello!</p>
            <BsArrowUpRight className="arrow__up text-6xl font-light visible md:invisible " />
          </Link>
        </div>
        <div className="flex flex-wrap md:flex-col md:w-full">
          <a
            className="social__link transition hover:mix-blend-difference w-[50%] md:w-full border-[1px] border-gray-500 hover:border-white md:border-x-0 flex items-center justify-center md:justify-between py-8 px-9"
            href="http://github.com/uisendy"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center">
              <FaGithub className="text-4xl text-white" />
              <p className="hidden font-montserrat md:block pl-4 font-extralight text-2xl">
                GitHub
              </p>
            </div>
            <BsArrowUpRight className="arrow__up text-6xl font-light hidden md:block transition-all" />
          </a>
          <a
            className="social__link transition hover:mix-blend-difference w-[50%] md:w-full border-[1px] border-gray-500 hover:border-white md:border-x-0 flex items-center justify-center md:justify-between py-8 px-9"
            href="https://www.linkedin.com/in/inieke-sendy-129b57ab/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center">
              <FaLinkedinIn className="text-4xl text-white" />
              <p className="hidden font-montserrat md:block pl-4 font-extralight text-2xl">
                LinkedIn
              </p>
            </div>
            <BsArrowUpRight className="arrow__up text-6xl font-light hidden md:block transition-all" />
          </a>
          <a
            className="social__link transition hover:mix-blend-difference w-[50%] md:w-full border-[1px] border-gray-500 hover:border-white md:border-x-0 flex items-center justify-center md:justify-between py-8 px-9"
            href="https://twitter.com/SInieke/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center">
              <FaTwitter className="text-4xl text-white" />
              <p className="hidden font-montserrat md:block pl-4 font-extralight text-2xl">
                Twitter
              </p>
            </div>
            <BsArrowUpRight className="arrow__up text-6xl font-light hidden md:block transition-all" />
          </a>

          <Link
            className="get__resume__link transition hover:mix-blend-difference w-[50%] md:w-full border-[1px] md:border-x-0 flex flex-col md:flex-row md:gap-5 md:items-center md:justify-between py-8 px-9 md:border-b-0"
            to={myResume}
            target="_blank"
            download
            rel="noreferrer"
          >
            <div className="flex flex-col md:flex-row md:gap-5 items-center justify-center">
              <FaFileDownload className=" block text-2xl lg:text-4xl text-white " />
              <p className="font-montserrat font-extralight text-base pt-3 md:pt-0 md:text-2xl leading-3  ">
                Resume{' '}
              </p>
            </div>
            <BsArrowUpRight className="hidden lg:block arrow__up text-6xl font-light rotate-90 " />
          </Link>
        </div>
      </div>
      <div className=" hidden lg:block border-t border-white/10 pt-10 h-32 ">
        <p
          id="copyright-tag"
          className=" font-montserrat text-xs leading-relaxed text-center text-gray-300"
        >
          All rights reserved © 2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
