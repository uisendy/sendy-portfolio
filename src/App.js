import { useState } from 'react';
import NavBar from './components/Navbar/NavBar';
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
      <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Outlet />
    </div>
  );
}

export default App;
