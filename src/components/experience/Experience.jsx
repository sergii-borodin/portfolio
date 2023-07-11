import React from 'react';
import './experience.css';

import hyf from '../../assets/experience/hyf.png';
import goit from '../../assets/experience/goit.png';
const umbraco =
  'https://umbraco.com/media/h34njgkj/diploma.png?anchor=center&mode=crop&width=1200&height=628&rnd=132720336679870000';

export const Experience = () => {
  return (
    <section name="experience" className="section experience-section">
      <h2 className="section-title">Experience & Bootcamps</h2>
      <ul>
        <li>
          <a
            href="https://goit.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <article className="box-shadow experience-card">
              <div className="card-image-container">
                <img className="card-image" src={goit} alt="goit" />
              </div>
              <div className="card-description-container">
                <h3 className="card-title">
                  <span className="hover-underline-animation">
                    GOIT Ukraine
                  </span>
                  , Web Development | Aug 2022 – May 2023
                </h3>
                <p className="card-description">
                  Coding bootcamp designed to cover HTML, CSS, JavaScript,
                  React.js with classes and hooks, MongoDB, Redux,
                  style-components, Formik.
                </p>
              </div>
            </article>
          </a>
        </li>
        <li>
          <a
            href="https://www.hackyourfuture.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <article className="box-shadow experience-card">
              <div className="card-image-container">
                <img className="card-image" src={hyf} alt="hyf" />
              </div>
              <div className="card-description-container">
                <h3 className="card-title ">
                  <span className="hover-underline-animation">
                    HackYourFuture Denmark
                  </span>
                  , Web Development | Nov 2021 – Aug 2022
                </h3>
                <p className="card-description">
                  Coding bootcamp designed to cover all aspects of full-stack
                  development including HTML, CSS, JavaScript, NodeJS, MySQL and
                  ReactJS
                </p>
              </div>
            </article>
          </a>
        </li>
        <li>
          <a
            href="https://umbraco.com/training/certified-developers/developer/?id=d6b82326-f719-4a77-b00d-ef8685b42229&_ga=2.100984898.238082662.1670886216-960771182.1670886216"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <article className="box-shadow experience-card">
              <div className="card-image-container">
                <img className="card-image" src={umbraco} alt="umbraco" />
              </div>
              <div className="card-description-container">
                <h3 className="card-title ">
                  <span className="hover-underline-animation">Umbraco</span>,
                  Umbraco professional | Nov 2022
                </h3>
                <p className="card-description">
                  Umbraco is an open-source content management system platform.
                  Umbraco fundamentals designed to learn how to create an
                  Umbraco site from scratch.
                </p>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </section>
  );
};
