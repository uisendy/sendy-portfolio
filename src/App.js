import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
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
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Outlet />
    </div>
  );
}

export default App;
