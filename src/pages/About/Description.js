import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const Description = () => {
  const coreValuesObj = [
    { id: 1, no: '01', value: 'Communication and Commitment' },
    {
      id: 2,
      no: '02',
      value: 'Committed to design, develop and deliver smart solution on time',
    },
    {
      id: 3,
      no: '03',
      value: 'Teamwork and collaboration, learning and working together',
    },
  ];

  const coreValues = coreValuesObj.map((coreValue) => (
    <li
      key={coreValue.id}
      className="py-5 px-6 border-y grid grid-cols-6 md:grid-cols-4 items-center gap-6 font-light text-4xl"
    >
      <p className=" not-italic font-montserrat text-3xl md:text-5xl lg:text-7xl text-left">
        {coreValue.no}
      </p>
      <p className=" text-3xl col-span-5 md:col-span-3 ">{coreValue.value}</p>
    </li>
  ));

  return (
    <div data-scroll-section className=" mb-32">
      <SectionHeader title={'brief'} subtitle={'Description & Values'} />
      <div className="description__section md:h-[70vh] grid lg:grid-cols-2 items-center ">
        <div className="flex flex-col gap-8 ">
          <p className="text-2xl pr-0 lg:pr-[10%] leading-relaxed font-montserrat font-light pb-10 lg:pb-0">
            Software Engineering is an Art. Consequently, it is my mission to use the
            science of analytical thinking in solving industry problems and identify a
            workable solution that adds value over the long term against a short temporary
            fix. My objective is to represent the trustworthiness and goodwill of the
            brand by developing an application that is valuable, optimally functioning,
            and offers the best user experience.
          </p>
        </div>
        <ul className="flex flex-col">{coreValues}</ul>
      </div>
    </div>
  );
};

export default Description;
