import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SplitText from '../../utils/split3.min';

const MenuList = ({ menu, BsArrowUpRight, setIsNavOpen, isNavOpen }) => {
  useEffect(() => {
    const linksSplit = new SplitText('.links__name', {
      type: 'lines',
      linesClass: 'lineChildrenDev',
    });

    new SplitText('.links__name', {
      type: 'lines',
      linesClass: 'lineParents',
    });

    gsap.timeline().to(linksSplit.lines, {
      duration: 1.3,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
  }, [isNavOpen]);
  return (
    <>
      <li className="flex">
        <Link
          className="links font-montserrat uppercase text-5xl md:text-7xl flex items-start relative opacity-50 hover:opacity-100"
          to={menu.link}
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span className="links__name leading-normal">{menu.name} </span>
          <BsArrowUpRight className="arrow top-5 absolute -right-20" />
        </Link>
      </li>
    </>
  );
};

export default MenuList;
