import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { BsArrowUpRight } from 'react-icons/bs';
import './about.css';

const MoreInfo = ({ info }) => {
  return (
    <div className="more__info__wrapper">
      <div
        id="more__info"
        className="more__info rounded-full h-3/5 aspect-square bg-transparent border border-solid border-white overflow-hidden flex flex-col justify-center items-center mx-auto "
      >
        <p className="text-center font-montserrat font-light text-2xl py-5 flex gap-2">
          <span>{info}</span>
        </p>
      </div>
    </div>
  );
};

const GetResume = () => {
  return (
    <div data-scroll-section className="pb-20 h-[100vh]">
      <SectionHeader title={'For'} subtitle={'more information'} />
      <div className="h-60vh grid grid-cols-2 pt-7">
        <MoreInfo info={'Say "Hello"'} />
        <MoreInfo info={'Get Resume'} />
      </div>
    </div>
  );
};

export default GetResume;
