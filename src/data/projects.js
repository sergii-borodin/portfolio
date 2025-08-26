import project1 from '../assets/projects/talkin.jpg';
import project2 from '../assets/projects/nordinsight.jpg';
import project3 from '../assets/projects/ice-cream-shop.jpg';
import project4 from '../assets/projects/filmoteka.jpg';
// import project5 from '../assets/projects/phonebook.jpg';
// import project6 from '../assets/projects/image-finder.jpg';
// import project7 from '../assets/projects/kaospilot-toolbox.jpg';

export const projects = [
  {
    id: 1,
    demo: true,
    code: true,
    src: project1,
    title: 'Talkin',
    about: 'PED project',
    description:
      'LMS SaaS app from scratch featuring user authentication(Clerk integration) using Next.js, Supabase. A real-time teaching platform with Vapi, integrate an AI vocal agent, and deliver interactive learning sessions.integrate an AI vocal agent, and deliver interactive learning sessions',
    demoLink: 'https://ai-saas-app-ten-blush.vercel.app/',
    codeLink: 'https://github.com/sergii-borodin/ai_saas_app',
  },
  {
    id: 2,
    demo: true,
    code: false,
    src: project2,
    title: 'NordInsight',
    about:
      'Startup based in Copenhagen developing a browser-based implant database designed specifically for radiographers and radiologists.',
    description:
      '- Developed a browser-based implant database using React.js, TypeScript, Node.js, Express.js, and MongoDB. \n - Redesigned UI components, ensuring consistency and improving user experience and responsiveness through modern UX / UI principles. \n - Integrated third - party libraries and APIs, optimizing backend database interactions and server communication',
    demoLink: 'https://meal-sharing-class21-sergii.herokuapp.com/',
    codeLink: 'https://github.com/sergii-borodin/meal-sharing',
  },
  {
    id: 3,
    demo: true,
    code: true,
    src: project3,
    title: 'Ice cream web shop',
    about: 'PED project',

    description:
      'An ice cream web shop is a landing page website made in collaboration with classmates to practice HTML, CSS, JavaScript, and Sass. As a bundler on the project, we used Parcel - a simple and fast solution for this type of project.',
    demoLink: 'https://xxamnesiaxx.github.io/itcats/',
    codeLink: 'https://github.com/xxAmnesiAxx/itcats',
  },
  {
    id: 4,
    demo: true,
    code: true,
    src: project4,
    title: 'Filmoteka',
    about: 'PED project',
    description:
      'Filmoteka is a landing page website made in collaboration with classmates on Full-Stack developer course GoIT school. As a backend we used API The Movie Database TMDB. Stack: HTML, CSS, JavaScript. Implementation of responsive web design, integration of helpful and make development faster library(Tui- pagination, Glide, Axios, Firebase).As a bundler on the project, we used Parcel - a simple and fast solution for this type of project.',
    demoLink:
      'https://malakhow-alexandr.github.io/filmoteka-landing__team-work/',
    codeLink:
      'https://github.com/Malakhow-Alexandr/filmoteka-landing__team-work',
  },
  // {
  //   id: 5,
  //   demo: true,
  //   code: true,
  //   src: project5,
  //   title: 'Phonebook',
  //   description:
  //     'Phone book app made for learning sync Redux Toolkit. No sense to use it in such a small app global state management library. Implemented just for practice.',
  //   demoLink: 'https://sergii-borodin.github.io/goit-react-hw-06-phonebook/',
  //   codeLink: 'https://github.com/sergii-borodin/goit-react-hw-06-phonebook',
  // },
  // {
  //   id: 6,
  //   demo: true,
  //   code: true,
  //   src: project6,
  //   title: 'image-finder',
  //   description:
  //     'Image-finder is a small project made using React.js using Pixabay API, used state machine design pattern, styled-components for styling, propTypes - runtime type checking for React props and similar objects, Axios ',
  //   demoLink: 'https://sergii-borodin.github.io/goit-react-hw-04-images/',
  //   codeLink: 'https://github.com/sergii-borodin/goit-react-hw-04-images',
  // },
  // {
  //   id: 7,
  //   demo: false,
  //   code: true,
  //   src: project7,
  //   title: 'Kaospilot-toolbox',
  //   description:
  //     'This project is a final project built together with the students of the HackYourFuture school. To build this project we used HTML, CSS, JavaScript, NodeJS, React, MySQL, ExpressJS, KnexJS, Storybook, Docker and Swagger. During this project I was responsible to create filtering logic, combining frontend and backend, making more exposed composition, creating smart components and dump components, working with styling. It was a close-to real-world product-building process using modern agile scrum methodology.',
  //   demoLink: 'https://staging-kp-toolbox-fp-class21.herokuapp.com/',
  //   codeLink: 'https://github.com/HackYourFuture-CPH/kp-toolbox-fp-class21',
  // },
  // {
  //   id: 1,
  //   demo: true,
  //   code: true,
  //   src: project1,
  //   title: 'CarTale',
  //   description:
  //     'The project aim is to explore the Power of Next.js framework and its benefits in web application development. The application was built using Typescript, Tailwind CSS and Headless UI. As a backend, I used two open APIs. This project focuses on exploring and harnessing the key features and advantages that Next.js brings to the table. These include server-side rendering (SSR), static site generation (SSG), automatic code splitting, seamless client-side navigation(will create more pages soon), and TypeScript support. The project will involve developing a web application using Next.js, taking advantage of these powerful features to create a high-performance, scalable, and interactive user interface.',
  //   demoLink: 'https://cars-catalog.vercel.app/',
  //   codeLink: 'https://github.com/sergii-borodin/cars_catalog',
  // },
  // {
  //   id: 2,
  //   demo: false,
  //   code: true,
  //   src: project2,
  //   title: 'Meal-Sharing',
  //   description:
  //     'It is a test project to practice HTML, CSS, JavaScript, NodeJS, React, MySQL, ExpressJS, Docker, KnexJS and Postman. In this project I was practicing to build API. Do not judge me for poor styling. Meal-Sharing is an app where everybody can create an event to share a meal with some random people. Everybody can join if there are enough available places. In this project, I built the backend and frontend self.',
  //   demoLink: 'https://meal-sharing-class21-sergii.herokuapp.com/',
  //   codeLink: 'https://github.com/sergii-borodin/meal-sharing',
  // },
];
