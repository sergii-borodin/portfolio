import project1 from '../assets/projects/jutlandia.jpg';
import project2 from '../assets/projects/talkin.jpg';
import project3 from '../assets/projects/nordinsight.jpg';
import project4 from '../assets/projects/ice-cream-shop.jpg';
import project5 from '../assets/projects/filmoteka.jpg';
import project6 from '../assets/projects/padel-events-platform.png';

export const projects = [
  {
    id: 6,
    demo: true,
    code: true,
    src: project6,
    title: 'Padel Event Booking Platform',
    about: 'Personal project · in progress · Apr 2026 – present',
    description:
      '- Full-stack booking platform for padel events and court reservations — Next.js 15 App Router, server actions, protected routes, complete booking management system. \n - Firebase Auth (session cookie flow), MongoDB + Mongoose for data modelling. \n - Stack: Next.js 15, TypeScript, MongoDB, Mongoose, Firebase Auth, Tailwind',
    demoLink: 'https://padel-events-platform.vercel.app/',
    codeLink: 'https://github.com/sergii-borodin/padel-events-platform',
  },
  {
    id: 1,
    demo: true,
    code: true,
    src: project1,
    title: 'Jutlandia',
    about:
      'Warehouse management POC built for Jutlandia during an internship, developed primarily with the Angular framework.',
    description:
      'A full-featured warehouse management system enabling users to manage warehouses and their storage slots. I built pages covering key workflows including inventory overview, slot booking, deadline tracking, and planning and coordinating moves between warehouses.',
    demoLink: 'https://warehouse-poc.vercel.app/',
    codeLink: 'https://github.com/sergii-borodin/warehouse-poc',
  },
  {
    id: 2,
    demo: true,
    code: true,
    src: project2,
    title: 'Talkin',
    about: 'PED project',
    description:
      'LMS SaaS app from scratch featuring user authentication(Clerk integration) using Next.js, Supabase. A real-time teaching platform with Vapi, integrate an AI vocal agent, and deliver interactive learning sessions, integrate an AI vocal agent, and deliver interactive learning sessions',
    demoLink: 'https://ai-saas-app-ten-blush.vercel.app/',
    codeLink: 'https://github.com/sergii-borodin/ai_saas_app',
  },
  {
    id: 3,
    demo: true,
    code: false,
    src: project3,
    title: 'NordInsight',
    about:
      'Startup based in Copenhagen developing a browser-based implant database designed specifically for radiographers and radiologists.',
    description:
      '- Developed a browser-based implant database using React.js, TypeScript, Node.js, Express.js, and MongoDB. \n - Redesigned UI components, ensuring consistency and improving user experience and responsiveness through modern UX / UI principles. \n - Integrated third - party libraries and APIs, optimizing backend database interactions and server communication',
    demoLink: 'https://db.nordradiology.com/',
    codeLink: '',
  },
  {
    id: 4,
    demo: true,
    code: true,
    src: project4,
    title: 'Ice cream web shop',
    about: 'PED project',

    description:
      'An ice cream web shop is a landing page website made in collaboration with classmates to practice HTML, CSS, JavaScript, and Sass. As a bundler on the project, we used Parcel - a simple and fast solution for this type of project.',
    demoLink: 'https://xxamnesiaxx.github.io/itcats/',
    codeLink: 'https://github.com/xxAmnesiAxx/itcats',
  },
  {
    id: 5,
    demo: true,
    code: true,
    src: project5,
    title: 'Filmoteka',
    about: 'PED project',
    description:
      'Filmoteka is a landing page website made in collaboration with classmates on Full-Stack developer course GoIT school. As a backend we used API The Movie Database TMDB. Stack: HTML, CSS, JavaScript. Implementation of responsive web design, integration of helpful and make development faster library(Tui- pagination, Glide, Axios, Firebase).As a bundler on the project, we used Parcel - a simple and fast solution for this type of project.',
    demoLink:
      'https://malakhow-alexandr.github.io/filmoteka-landing__team-work/',
    codeLink:
      'https://github.com/Malakhow-Alexandr/filmoteka-landing__team-work',
  },
];
