import React from 'react';
const SkillsList = ({ dataset }) => {
  return (
    <ul className="flex flex-col gap-2">
      {dataset.map((data) => (
        <li key={data.id}>
          <h2 className=" opacity-50 text-2xl text-white font-montserrat uppercase">
            {data.heading}
          </h2>
          <ul className="text-2xl text-white font-montserrat pb-5">
            {data.items.map((item) => (
              <li key={item.id}>{item.item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
