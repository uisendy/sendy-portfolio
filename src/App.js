import { useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import useLocoScroll from './hooks/useLocoScroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Loader from './components/Loader';
function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [preLoader, setPreLoader] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useLocoScroll(!preLoader);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {preLoader ? (
        <Loader setPreLoader={setPreLoader} />
      ) : (
        <div
          data-scroll-container
          className={isNavOpen ? 'main__container nav__open' : 'main__container'}
          id="main-container"
          style={
            isNavOpen
              ? { height: '100vh', overflow: 'hidden', padding: '0' }
              : { height: 'auto', overflow: 'hidden' }
          }
        >
          <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Outlet />
        </div>
      )}
    </>
  );
}

export default App;
