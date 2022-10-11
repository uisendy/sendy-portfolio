import React from 'react';
import Menu from './Menu';

const NavBar = ({ isNavOpen, setIsNavOpen }) => {
  const menuList = [
    { id: 1, name: 'About', link: '/a-sendyinieke' },
    { id: 2, name: 'projects', link: '/project' },
    { id: 3, name: 'contact', link: '/contact' },
  ];
  return (
    <section>
      <Menu menuList={menuList} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </section>
  );
};

export default NavBar;
