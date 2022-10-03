import React from 'react'

import project1 from '../../assets/projects/kaospilot-toolbox.jpg'
import project2 from '../../assets/projects/meal-sharing.jpg'

import './projects.css'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Kaospilot-toolbox',
      description:
        'This is a final project within the educational process of a 9-month intensive frontend web developer course from HackYourFuture Denmark school. To build this project we used HTML, CSS, JavaScript, NodeJS, React, MySQL, ExpressJS, KnexJS, Storybook, Docker and Swagger. During this project I was responsible to create filtering logic, combining frontend and backend, making more exposed composition, creating smart components and dump components, working with styling. It was a close-to real-world product-building process using modern agile scrum methodology. We used Git as a version control system, Jira as a project management system, and Figma as a UI/UX design application.',
      src: project1,
      demoLink: 'https://staging-kp-toolbox-fp-class21.herokuapp.com/',
      codeLink: 'https://github.com/HackYourFuture-CPH/kp-toolbox-fp-class21',
    },
    {
      id: 2,
      src: project2,
      title: 'Meal-Sharing',
      description:
        'It is a test project to practice HTML, CSS, JavaScript, NodeJS, React, MySQL, ExpressJS, Docker, and KnexJS. Meal-Sharing is an app where everybody can create an event to share a meal with some random people. Everybody can join if there are enough available places. In this project, I built the backend and frontend self.',
      demoLink: 'https://meal-sharing-class21-sergii.herokuapp.com/',
      codeLink: 'https://github.com/sergii-borodin/meal-sharing',
    },
  ]
  return (
    <section name='projects' className='projects-section-container section'>
      <h2 className='section-title'>Projects I was working with</h2>
      <ul className='projects-section'>
        {projects.map(({ id, title, src, description, demoLink, codeLink }) => {
          return (
            <li key={id} className='project-card box-shadow'>
              <div className='project-card-image-container'>
                <img className='project-card-image' src={src} alt={title} />
                <div className='overlay'>
                  <h3 className='overlay-title'>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
              <div className='project-card-interface'>
                <a
                  className='project-card-button'
                  rel='noopener noreferrer'
                  href={demoLink}
                >
                  demo
                </a>
                <a
                  className='project-card-button'
                  rel='noopener noreferrer'
                  href={codeLink}
                >
                  code
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
