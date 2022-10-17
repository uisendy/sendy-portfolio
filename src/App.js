import { useEffect, useRef, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import useLocoScroll from './hooks/useLocoScroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Loader from './components/Loader';
function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [preLoader, setPreLoader] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useLocoScroll(!preLoader);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreLoader(false);
  };

  useEffect(() => {
    ScrollTrigger.refresh();
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer < 0) {
      clear();
      setTimer(0);
    }
  }, [timer]);

  return (
    <>
      {preLoader ? (
        <Loader />
      ) : (
        <div
          className={isNavOpen ? 'main__container nav__open' : 'main__container'}
          id="main-container"
          style={
            isNavOpen
              ? { height: '100vh', overflow: 'hidden', padding: '0' }
              : { height: 'auto' }
          }
          data-scroll-container
        >
          <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <Outlet />
        </div>
      )}
    </>
  );
}

export default App;
