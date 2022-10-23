import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
const Loader = ({ setPreLoader }) => {
  const ref = useRef();
  const percent = useRef();

  useEffect(() => {
    let width = 1;
    let linkId;
    const tll = gsap.timeline({
      paused: 'true',
    });
    tll.to('#percent, #bar', {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });
    tll.to('#preloader', {
      duration: 0.8,
      width: '0%',
    });
    tll.from(
      '.container__welcome',
      {
        duration: 1.5,
        y: '-150%',
      },
      '-=.2',
    );
    tll.to('.container__welcome h1', {
      opacity: 1,
      y: '10%',
      stagger: {
        amount: 0.4,
      },
    });

    const move = () => {
      linkId = setInterval(frame, 10);
    };

    const frame = () => {
      if (width >= 100) {
        clearInterval(linkId);
        tll.play();
        setTimeout(() => {
          setPreLoader(false);
        }, 6000);
      } else {
        width++;
        ref.current.style.width = width + '%';
        percent.current.innerHTML = width + '%';
      }
    };
    move();
  });

  return (
    <>
      <div
        id="preloader"
        className="preloader absolute flex flex-col justify-center items-center w-full h-screen z-50 bg-black"
      >
        <div ref={percent} id="percent" className=" text-white font-montserrat text-4xl">
          1%
        </div>
        <div id="bar" className=" w-3/5 mt-5 ">
          <div
            ref={ref}
            id="bar__confirm"
            className=" w-[1%] h-[1%] py-0 px-[1px] bg-stone-400"
          >
            -
          </div>
        </div>
      </div>
      <div className="container__welcome absolute flex justify-center items-center w-full h-screen bg-gray-400">
        <h1
          className="welcome text-5xl text-black font-playFairSc uppercase "
          style={{ opacity: '0%' }}
        >
          Welcome
        </h1>
      </div>
    </>
  );
};

export default Loader;
