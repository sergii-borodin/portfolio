import React from 'react';

import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import javascript from '../../assets/skills/javascript.png';
import reactImage from '../../assets/skills/react.png';
import github from '../../assets/skills/git.png';
import sql from '../../assets/skills/sql.png';
import node from '../../assets/skills/node.png';
import ts from '../../assets/skills/ts.png';

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
      src: reactImage,
      title: 'ReactJS',
    },
    {
      id: 5,
      src: github,
      title: 'Git',
    },
    {
      id: 6,
      src: sql,
      title: 'SQL',
    },
    {
      id: 7,
      src: node,
      title: 'NodeJS',
    },
    {
      id: 8,
      src: ts,
      title: 'TypeScript',
    },
  ];
  return (
    <section name="skills" className="section container experience-section">
      <h2 className="section-title">My stack and tools</h2>
      <ul className="tools-grid-area">
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
