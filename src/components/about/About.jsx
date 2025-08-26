import React from 'react';
// import hero from '../../assets/hero/hero-image-light.webp';
// import darkHero from '../../assets/hero/hero-image-dark.jpeg';

import { Contacts } from '../contacts/Contacts';
import CV from '../../assets/CV/CV.pdf';
import { RiDownload2Line } from 'react-icons/ri';

import './about.css';

export const About = ({ isLightModeOn }) => {
  return (
    <section name="aboutMe" className="section hero-section main-container">
      <div className="about-title-container">
        <h1 className="hero-greeting-title">Hi, I am Sergii</h1>
        <h2 className="hero-title">
          {`I am a Software Engineer with experience,
           building scalable web and mobile solutions.`}
        </h2>
        {/* <h2 className="hero-title" style={{ marginBottom: '7rem' }}>
          building scalable web and mobile solutions.
        </h2> */}
        <Contacts />
        <a href={CV} download className="download-CV box-shadow">
          <p>Download CV</p>
          <RiDownload2Line size={24} />
        </a>
      </div>
      {/* <div className="hero-image-container box-shadow">
        <img
          className="hero-image"
          src={isLightModeOn ? hero : darkHero}
          alt="Sergii"
        />
      </div> */}
    </section>
  );
};
