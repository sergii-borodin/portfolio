import React from 'react';

import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import javascript from '../../assets/skills/javascript.png';
import reactImage from '../../assets/skills/react.png';
import github from '../../assets/skills/git.png';
import sql from '../../assets/skills/sql.png';
import node from '../../assets/skills/node.png';
import ts from '../../assets/skills/ts.png';
import nextjs from '../../assets/skills/nextjs.svg';
import mongodb from '../../assets/skills/mongodb.svg';
import tailwind from '../../assets/skills/tailwind.svg';
import expo from '../../assets/skills/expo.svg';

import './skills.css';

export const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
    },
    {
      id: 4,
      src: ts,
      title: 'TypeScript',
    },
    {
      id: 5,
      src: reactImage,
      title: 'React/React Native',
    },
    {
      id: 6,
      src: nextjs,
      title: 'Next.js',
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
    },
    {
      id: 8,
      src: node,
      title: 'NodeJS',
    },
    {
      id: 9,
      src: mongodb,
      title: 'MongoDB',
    },
    {
      id: 10,
      src: sql,
      title: 'SQL',
    },
    {
      id: 11,
      src: expo,
      title: 'Expo',
    },
    {
      id: 12,
      src: github,
      title: 'Git',
    },
  ];
  return (
    <section name="skills" className="section skills-section">
      <h2 className="section-title">My stack and tools</h2>
      <ul className="tools-grid-area section-content">
        {techs.map(({ id, src, title }) => (
          <li className="tool-card box-shadow" key={id}>
            <img className="tool-image" src={src} alt="" />
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
