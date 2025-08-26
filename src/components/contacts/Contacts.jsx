import React from 'react';

import { RiLinkedinLine } from 'react-icons/ri';
import { RiGithubLine } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import './contacts.css';

export const Contacts = () => {
  return (
    <ul className="contacts">
      <li>
        <a
          href="https://www.linkedin.com/in/sergii-borodin-4bb3a61b8/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiLinkedinLine size={40} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/sergii-borodin"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiGithubLine size={40} />
        </a>
      </li>
      <li>
        <a href="mailto:sergii.borodin@yahoo.com" className="contactLink">
          <MdOutlineAlternateEmail size={40} />
        </a>
      </li>
    </ul>
  );
};
