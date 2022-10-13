import React from 'react';

const ExperienceList = ({ dataset }) => {
  return (
    <ul className="flex flex-col gap-2">
      {dataset.map((data) => (
        <li key={data.id}>
          <div className="flex gap-4 items-center justify-between md:pr-10 ">
            <h2 className=" opacity-50 text-xl text-white font-montserrat uppercase">
              {data.heading}
            </h2>
            <p className="opacity-50 text-sm text-white font-montserrat font-light ">
              {data.date}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <h2 className=" opacity-50 text-base text-white font-montserrat uppercase">
              {data.position}
            </h2>
            <p className=" hidden md:block opacity-50 text-sm text-white font-montserrat font-light ">
              {`| ${data.location}`}
            </p>
          </div>
          <ul className=" text-lg text-white font-montserrat font-light pb-5">
            {data.items.map((item) => (
              <li key={item.id} className="pb-5 ">
                {item.item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
