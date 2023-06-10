import React from 'react';

import { projects } from '../../data/projects';

import './projects.css';

export const Projects = () => {
  return (
    <section name="projects" className="projects-section-container section">
      <h2 className="section-title">Projects I was working with</h2>
      <ul className="projects-section">
        {projects.map(({ id, title, src, description, demoLink, codeLink }) => {
          return (
            <li key={id} className="project-card box-shadow">
              <div className="project-card-image-container">
                <img className="project-card-image" src={src} alt={title} />
                <div className="project-overlay">
                  <h3 className="project-title">{title}</h3>
                  <p className={description ? 'project-description' : 'alert'}>
                    {description ??
                      `Warning... Oops, the demonstration of this website temporary unavailable. I'm working on deploying the ${title} on another hosting platform. Sorry for inconvenience, but you still can check out my code contribution in the project.`}
                  </p>
                </div>
              </div>
              <div className="project-card-interface">
                <a
                  className="project-card-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={demoLink}
                >
                  Demo
                </a>
                <a
                  className="project-card-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={codeLink}
                >
                  Code
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
