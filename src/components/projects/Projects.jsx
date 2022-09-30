import React from 'react'

import project1 from '../../assets/projects/kaospilot-toolbox.jpg'
import project2 from '../../assets/projects/meal-sharing.jpg'

import './projects.css'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Kaospilot toolbox',
      src: project1,
      demoLink: 'https://staging-kp-toolbox-fp-class21.herokuapp.com/',
      codeLink: 'https://github.com/HackYourFuture-CPH/kp-toolbox-fp-class21',
    },
    {
      id: 2,
      title: 'Meal-Sharing',
      src: project2,
      demoLink: 'https://meal-sharing-class21-sergii.herokuapp.com/',
      codeLink: 'https://github.com/sergii-borodin/meal-sharing',
    },
  ]
  return (
    <section name='projects' className='projects-section-container section'>
      <h2 className='section-title'>Projects I was working with</h2>
      <ul className='projects-section'>
        {projects.map(({ id, title, src, demoLink, codeLink }) => {
          return (
            <li key={id} className='project-card box-shadow'>
              <div className='project-card-image-container'>
                <img className='project-card-image' src={src} alt={title} />
                <div className='overlay'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, consectetur repellat eum est quae optio deleniti,
                    aperiam, alias quis perferendis doloribus! Beatae pariatur
                    quis recusandae quisquam? Labore natus asperiores vel.
                  </p>
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
