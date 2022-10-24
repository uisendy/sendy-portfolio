import React, { useEffect, useRef, useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import gsap from 'gsap';
import SplitText from '../../utils/split3.min';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    if (email !== '' && phone !== '' && name !== '' && message) {
      emailjs
        .sendForm(
          'service_cuz7kef',
          'template_997fecm',
          form.current,
          'vKeuzN4SgeTSyyLak',
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus('Message Sent Successfully');
          },
          (error) => {
            console.log(error.text);
            error.text && setStatus('Error Sending message');
          },
        );
      setEmail('');
      setName('');
      setPhone('');
      setMessage('');
    }
    setStatus('Please Check your inputs!');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
    <div
      className="px-[6.5%] flex flex-col justify-center h-[95vh]"
      style={{ overflowY: 'scroll' }}
    >
      <h2 className="contact__header font-playFairSc uppercase text-4xl lg:text-7xl pb-10 text-white">
        Send a Message
      </h2>
      <form ref={form} onSubmit={(e) => sendEmail(e)} className="pb-10">
        <div className="grid md:grid-cols-2 md:gap-6 font-montserrat">
          <div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus-border-white peer"
                placeholder=" "
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                FullName
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{11}"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Phone number (+123-456-7890)
              </label>
            </div>
          </div>
          <div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea
                name="message"
                id="message"
                className="block lg:py-[1rem] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required=""
                rows="7"
                cols="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Message
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center lg:flex-row lg:gap-6">
            <button type="submit" className="text-white text-sm py-2.5 ">
              <div className="contact__btn flex items-center ">
                <p className="hover:border-b hover:border-solid hover:border-white py-3">
                  Send Message{' '}
                </p>
                <BsArrowUpRight className="arrow__up pl-3 pt-3 text-4xl lg:text-6xl font-light visible lg:invisible " />
              </div>
            </button>
            <p className="text-sm font-montserrat text-white">{status}</p>
          </div>
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
