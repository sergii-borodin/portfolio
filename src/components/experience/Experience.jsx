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
          <article className='box-shadow experience-card'>
            <div className='card-image-container'>
              <img className='card-image' src={hyf} alt='hyf' />
            </div>
            <div className='card-description-container'>
              <h3 className='card-title'>
                HackYourFuture Denmark, Web Development| Nov 2021 – Aug 2022
              </h3>
              <p className='card-description'>
                Coding bootcamp designed to cover all aspects of full-stack
                development including HTML, CSS, JavaScript, NodeJS, MySQL and
                ReactJS
              </p>
            </div>
          </article>
        </li>
        <li>
          <article className='box-shadow experience-card'>
            <div className='card-image-container'>
              <img className='card-image' src={goit} alt='goit' />
            </div>
            <div className='card-description-container'>
              <h3 className='card-title'>
                GOIT Ukraine, Web Development| Nov 2020 – Mar 2021
              </h3>
              <p className='card-description'>
                Coding bootcamp designed to cover basic aspects of web
                development including HTML, CSS, SASS, JavaScript.
              </p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  )
}
