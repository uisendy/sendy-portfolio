import React, { useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import gsap from 'gsap';
import SplitText from '../../utils/split3.min';
import './contact.css';

const Contact = () => {
  useEffect(() => {
    const split = new SplitText('.contact__header', {
      type: 'lines',
      linesClass: 'proj__lineChildren',
    });

    new SplitText('.contact__header', {
      type: 'lines',
      linesClass: 'proj__lineParents',
    });

    gsap
      .timeline()
      .from(split.lines, {
        duration: 2,
        opacity: 0,
        y: 250,
        rotate: 8,
        ease: 'power2',
      })
      .to(split.lines, {
        opacity: 1,
        stagger: 0.1,
        rotate: 0,
      });
  }, []);
  return (
    <div className="px-[6.5%] flex flex-col justify-center h-[95vh]">
      <h2 className="contact__header font-playFairSc uppercase text-4xl lg:text-7xl pb-10 text-white">
        Send a Message
      </h2>
      <form className="pb-10">
        <div className="grid md:grid-cols-2 md:gap-6 font-montserrat">
          <div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus-border-white peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name(First, Last)
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{11}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (+123-456-7890)
              </label>
            </div>
          </div>
          <div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea
                name="floating_company"
                id="floating_company"
                className="block lg:py-[1rem] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                rows="7"
                cols="10"
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
          </div>
          <button type="submit" className="text-white text-sm py-2.5 ">
            <div className="contact__btn flex items-center ">
              <p className="hover:border-b hover:border-solid hover:border-white py-3">
                Send Message{' '}
              </p>
              <BsArrowUpRight className="arrow__up pl-3 pt-3 text-4xl lg:text-6xl font-light visible lg:invisible " />
            </div>
          </button>
        </div>
      </form>
      <div className=" hidden lg:block border-b border-solid border-white"></div>
      <div className=" hidden lg:flex text-white justify-between font-montserrat pt-4">
        <h2 className=" font-playFairSc uppercase text-4xl lg:text-5xl pb-10 text-white">
          Reach me
        </h2>
        <p className=" text-2xl">
          +234-810-942-1236 <br />
          sendyinieke@gmail.com <br />
          Lagos, Nigeria
        </p>
      </div>
    </div>
  );
};

export default Contact;
