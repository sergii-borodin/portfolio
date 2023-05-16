import project2 from '../assets/projects/meal-sharing.jpg';
import project1 from '../assets/projects/kaospilot-toolbox.jpg';
import project3 from '../assets/projects/ice-cream-shop.jpg';
import project4 from '../assets/projects/filmoteka.jpg';
import project5 from '../assets/projects/phonebook.jpg';
import project6 from '../assets/projects/image-finder.jpg';

export const projects = [
  {
    id: 1,
    src: project1,
    title: 'Kaospilot-toolbox',
    // description: 'To build this project we used HTML, CSS, JavaScript, NodeJS, React, MySQL, ExpressJS, KnexJS, Storybook, Docker and Swagger. During this project I was responsible to create filtering logic, combining frontend and backend, making more exposed composition, creating smart components and dump components, working with styling. It was a close-to real-world product-building process using modern agile scrum methodology.',
    demoLink: 'https://staging-kp-toolbox-fp-class21.herokuapp.com/',
    codeLink: 'https://github.com/HackYourFuture-CPH/kp-toolbox-fp-class21',
  },
  {
    id: 2,
    src: project2,
    title: 'Meal-Sharing',
    description:
      'It is a test project to practice HTML, CSS, JavaScript, NodeJS, React, MySQL, ExpressJS, Docker, KnexJS and Postman. In this project I was practicing to build API. Do not judge me for poor styling. Meal-Sharing is an app where everybody can create an event to share a meal with some random people. Everybody can join if there are enough available places. In this project, I built the backend and frontend self.',
    demoLink: 'https://meal-sharing-class21-sergii.herokuapp.com/',
    codeLink: 'https://github.com/sergii-borodin/meal-sharing',
  },
  {
    id: 3,
    src: project3,
    title: 'Ice cream web shop',
    description:
      'An ice cream web shop is a landing page website made in collaboration with classmates to practice HTML, CSS, JavaScript, and Sass. As a bundler on the project, we used Parcel - a simple and fast solution for this type of project.',
    demoLink: 'https://xxamnesiaxx.github.io/itcats/',
    codeLink: 'https://github.com/xxAmnesiAxx/itcats',
  },
  {
    id: 4,
    src: project4,
    title: 'Filmoteka',
    description:
      'Filmoteka is a landing page website made in collaboration with classmates on Full-Stack developer course GoIT school. As a backend we used API The Movie Database TMDB. Stack: HTML, CSS, JavaScript. Implementation of responsive web design, integration of helpful and make development faster library(Tui- pagination, Glide, Axios, Firebase).As a bundler on the project, we used Parcel - a simple and fast solution for this type of project.',
    demoLink:
      'https://malakhow-alexandr.github.io/filmoteka-landing__team-work/',
    codeLink:
      'https://github.com/Malakhow-Alexandr/filmoteka-landing__team-work',
  },
  {
    id: 5,
    src: project5,
    title: 'Phonebook',
    description:
      'Phone book app made for learning sync Redux Toolkit. No sense to use it in such a small app global state management library. Implemented just for practice.',
    demoLink: 'https://sergii-borodin.github.io/goit-react-hw-06-phonebook/',
    codeLink: 'https://github.com/sergii-borodin/goit-react-hw-06-phonebook',
  },
  {
    id: 6,
    src: project6,
    title: 'image-finder',
    description:
      'Image-finder is a small project made using React.js using Pixabay API',
    demoLink: 'https://sergii-borodin.github.io/goit-react-hw-06-phonebook/',
    codeLink: 'https://sergii-borodin.github.io/goit-react-hw-04-images/',
  },
];