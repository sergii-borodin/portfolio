import React from 'react';
// import hero from '../../assets/hero/hero-image-light.webp';
// import darkHero from '../../assets/hero/hero-image-dark.jpeg';

import { Contacts } from '../contacts/Contacts';
import CV from '../../assets/CV/CV.pdf';
import { RiDownload2Line } from 'react-icons/ri';

import './about.css';

export const About = ({ isLightModeOn }) => {
  return (
    <section name="aboutMe" className="section hero-section">
      <div className="about-title-container section-content">
        <h1 className="hero-greeting-title">Hi, I&apos;m Sergii</h1>
        <h2 className="hero-title">
          React ecosystem developer (web & mobile) — I architect and ship
          production apps solo, from a solo-built React Native app released on
          iOS and Google Play <br /> to an AI-integrated SaaS MVP.
        </h2>
        {/* <p className="hero-meta">
          <span className="hero-meta-segment">
            Jutland, Denmark → open to Aarhus, Herning, Silkeborg
          </span>
          <span className="hero-meta-segment">No sponsorship needed</span>
          <span className="hero-meta-segment">Available immediately</span>
        </p> */}
        <Contacts />
        <a href={CV} download className="cv-button box-shadow">
          <span>Download CV</span>
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
