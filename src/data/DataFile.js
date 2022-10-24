// import html5 from '../Assets/Logo/html5.svg';
// import css3 from '../Assets/Logo/css3-alt.svg';
// import react from '../Assets/Logo/react.svg';
// import js from '../Assets/Logo/js.svg';

const dataSet = {
  skillsSet: {
    skills: [
      {
        id: 1,
        heading: 'Front-End',
        items: [
          { id: 1, item: 'javaScript' },
          { id: 2, item: 'React' },
          { id: 3, item: 'Redux' },
          { id: 4, item: 'TypeScript' },
          { id: 5, item: 'NextJs' },
        ],
      },
      {
        id: 2,
        heading: 'Back-End',
        items: [
          { id: 1, item: 'Ruby' },
          { id: 2, item: 'Ruby-on-Rails' },
          { id: 3, item: 'ExpressJs' },
          { id: 4, item: 'MySQL' },
        ],
      },
    ],
    myTools: [
      {
        id: 1,
        heading: 'Tools',
        items: [
          { id: 1, item: 'VScode' },
          { id: 2, item: 'Atom' },
          { id: 3, item: 'Figma' },
        ],
      },
      {
        id: 2,
        heading: 'Communication & Methods',
        items: [
          { id: 1, item: 'Git & GitHub' },
          { id: 2, item: 'Slack' },
          { id: 3, item: 'Discord' },
          { id: 4, item: 'Zendesk' },
          { id: 5, item: 'Zoom, Teams, Meet, etc' },
          { id: 6, item: 'Netlify, Heroku' },
          { id: 7, item: 'Mobile responsive' },
          { id: 8, item: 'Dev Tools' },
          { id: 9, item: 'Testing- Jest' },
        ],
      },
    ],
    Professionalism: [
      {
        id: 1,
        heading: 'Production',
        items: [
          { id: 1, item: 'E-commerce' },
          { id: 2, item: 'Landing page' },
          { id: 3, item: 'Showcase website' },
          { id: 4, item: 'Reusable Components' },
          { id: 5, item: 'Software Project Management' },
          { id: 6, item: 'Open Source Development' },
        ],
      },

      {
        id: 2,
        heading: 'Professional',
        items: [
          { id: 1, item: 'Remote Pair-Programming' },
          { id: 2, item: 'TeamWork' },
          { id: 3, item: 'Mentoring' },
        ],
      },
    ],
  },
  experiences: {
    working: [
      {
        id: 1,
        heading: 'Microverse',
        location: 'Remote',
        position: 'Mentor(volunteer)',
        date: ' August 2022– Present',
        items: [
          {
            id: 1,
            item: 'Mentored junior web developers, providing technical support through code reviews',
          },
          {
            id: 2,
            item: 'Proposed improvements to code organization to improve code quality and overall performance.',
          },
          {
            id: 3,
            item: 'Provided advice and tips on how to maintain motivation to maintain longevity in the program',
          },
        ],
      },
      {
        id: 2,
        heading: 'Spectranet Nigeria',
        location: 'Lagos, Nigeria',
        position: 'IT technical Support',
        date: '  Dec 2015 – Feb 2021',
        items: [
          {
            id: 1,
            item: 'Create and implement a network Maintenance SOP, regularly updating Operation systems, Security Firewall and Licenses, Databases, etc and checking hardware within employee workstation for issues',
          },
          {
            id: 2,
            item: 'Work closely with the leadership team to improve wired and wireless network infrastructure resulting in uptime of 99%',
          },
          {
            id: 3,
            item: 'Developed and implemented communication strategies to ensure positive and productive relationships with internal and external stakeholders',
          },
        ],
      },
    ],
    training: [
      {
        id: 1,
        heading: 'Microverse',
        location: 'Full-time',
        position: 'Remote Full-Stack Web Development Program',
        date: ' June 2022 - Present',
        items: [
          {
            id: 1,
            item: 'Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux',
          },
          {
            id: 2,
            item: 'Developed skills in remote pair-programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers. ',
          },
        ],
      },
      {
        id: 2,
        heading: 'University of Uyo, Nigeria ',
        location: 'Full-time',
        position: 'B-Eng. Computer Engineering',
        date: 'Jan 2008 – Sept 2014',
        items: [
          {
            id: 1,
            item: 'Thesis: Development of CanSatellite for environmental for near space environmental monitoring',
          },
          {
            id: 2,
            item: 'Awards: Leadership Award of the year, 2013 ',
          },
        ],
      },
    ],
  },
};

export default dataSet;
