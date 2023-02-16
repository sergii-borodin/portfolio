import React from 'react'
import hero from '../../assets/hero/hero-image-light.webp'
import darkHero from '../../assets/hero/hero-image-dark.webp'

import { Contacts } from '../contacts/Contacts'
import CV from '../../assets/CV/CV.pdf'
import { RiDownload2Line } from 'react-icons/ri'

import './about.css'

export const About = ({isLightModeOn}) => {
  return (
    <section name='aboutMe' className='section hero-section main-container'>
      <div className='about-title-container'>
        <h2 className='hero-greeting-title'>I am Sergii</h2>
        <h1 className='hero-title'>I enjoy the development of web solutions</h1>
        <Contacts />
        <a href={CV} download className='download-CV box-shadow' >
          <p>Download CV</p>
          <RiDownload2Line size={24} />
        </a>
      </div>
      <div className='hero-image-container box-shadow' >
        <img className='hero-image' src={isLightModeOn ? hero : darkHero} alt='Sergii' />
      </div>
    </section>
  )
}
