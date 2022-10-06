import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { BsMoonStarsFill } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'

import './header.css'

export const Header = ({ setIsLightModeOn, isLightModeOn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='header-container'>
      <div className='mode-interface-container'>
        <button
          className='mode-control-button'
          onClick={() => setIsLightModeOn(!isLightModeOn)}
        >
          {isLightModeOn ? (
            <div>
              <BsSun size={25} />
              <p>Light-mode on</p>
            </div>
          ) : (
            <div>
              <BsMoonStarsFill size={20} />
              <p>Dark-mode on</p>
            </div>
          )}
        </button>
      </div>
      <nav>
        <ul
          className={
            isMobileMenuOpen
              ? 'navbar-list-container-mobile-view'
              : 'navbar-list-container'
          }
        >
          <li>
            <Link
              className='link'
              to='aboutMe'
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
              onClick={() => {
                setIsMobileMenuOpen(false)
              }}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              className='link'
              to='skills'
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                setIsMobileMenuOpen(false)
              }}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className='link'
              to='projects'
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                setIsMobileMenuOpen(false)
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className='link'
              to='experience'
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                setIsMobileMenuOpen(false)
              }}
            >
              Experience
            </Link>
          </li>
        </ul>

        <button
          className='burger-menu-button'
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
        >
          {isMobileMenuOpen ? (
            <RiCloseLine
              size={25}
              color={`${isLightModeOn ? 'black' : 'rgba(255, 235, 205)'}`}
            />
          ) : (
            <GiHamburgerMenu
              size={25}
              color={`${isLightModeOn ? 'black' : 'rgba(255, 235, 205)'}`}
            />
          )}
        </button>
      </nav>
    </header>
  )
}
