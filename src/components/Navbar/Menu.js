import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import MenuList from './MenuList';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import LogoWhiteFrameless from '../../assets/images/LogoWhiteFrameless.png';

const Menu = ({ menuList, isNavOpen, setIsNavOpen }) => {
  return (
    <div className=" bg-black">
      <nav className=" relative flex items-center justify-between pr-5">
        <div
          onClick={() => setIsNavOpen((open) => !open)}
          className={
            isNavOpen
              ? 'hamburger-menu is-active fixed top-10 left-10'
              : 'hamburger-menu space-y-2 fixed top-10 left-10'
          }
        >
          <div className="menu-icon"></div>
        </div>
        <div className=" bg-blue-200">
          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            <div className="nav-menu flex justify-center flex-col gap-10 w-[80%] mx-[auto]">
              <ul className="flex flex-col gap-6 md:gap-10 justify-between min-h-[250px] w-[100%] text-white text-6xl md:w-[80%] md:text-[6rem]">
                {menuList.map((menu) => (
                  <MenuList
                    menu={menu}
                    key={menu.id}
                    BsArrowUpRight={BsArrowUpRight}
                    isNavOpen={isNavOpen}
                    setIsNavOpen={setIsNavOpen}
                  />
                ))}
              </ul>
              <div className="nav-menu-line h-[1px] bg-slate-400 "></div>
              <div className="nav-menu-socials flex gap-6 md:gap-20">
                <a
                  className="transition hover:opacity-75 hover:border-b-2 hover:border-solid hover:border-b-white pb-2"
                  href="http://github.com/uisendy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-2xl text-white" />
                </a>
                <a
                  className="transition hover:opacity-75 hover:border-b-2 hover:border-solid hover:border-b-white pb-2"
                  href="https://www.linkedin.com/in/inieke-sendy-129b57ab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="text-2xl text-white" />
                </a>
                <a
                  className="transition hover:opacity-75 hover:border-b-2 hover:border-solid hover:border-b-white pb-2"
                  href="https://twitter.com/SInieke/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="text-2xl text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="absolute top-10 right-12 z-50"
          to={'/'}
          onClick={() => setIsNavOpen(false)}
        >
          <img
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
            src={LogoWhiteFrameless}
            alt="Logo"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
