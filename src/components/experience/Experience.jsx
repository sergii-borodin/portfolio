import React from 'react'
import './experience.css'

import hyf from '../../assets/experience/hyf.png'
import goit from '../../assets/experience/goit.png'

export const Experience = () => {
  return (
    <section name='experience' className='section experience-section'>
      <h2 className='section-title'>Experience & Bootcamps</h2>
      <ul>
        <li>
          <a
            href='https://www.hackyourfuture.dk/'
            target='_blank'
            rel='noopener noreferrer'
            className='card-link'
          >
            <article className='box-shadow experience-card'>
              <div className='card-image-container'>
                <img className='card-image' src={hyf} alt='hyf' />
              </div>
              <div className='card-description-container'>
                <h3 className='card-title '>
                  <span className='hover-underline-animation'>
                    HackYourFuture Denmark
                  </span>
                  , Web Development | Nov 2021 – Aug 2022
                </h3>
                <p className='card-description'>
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
            href='https://goit.ua/'
            target='_blank'
            rel='noopener noreferrer'
            className='card-link'
          >
            <article className='box-shadow experience-card'>
              <div className='card-image-container'>
                <img className='card-image' src={goit} alt='goit' />
              </div>
              <div className='card-description-container'>
                <h3 className='card-title'>
                  <span className='hover-underline-animation'>
                    GOIT Ukraine
                  </span>
                  , Web Development |<br /> Nov 2020 – Mar 2021
                </h3>
                <p className='card-description'>
                  Coding bootcamp designed to cover basic aspects of web
                  development including HTML, CSS, SASS, JavaScript.
                </p>
              </div>
            </article>
          </a>
        </li>
      </ul>
    </section>
  )
}
