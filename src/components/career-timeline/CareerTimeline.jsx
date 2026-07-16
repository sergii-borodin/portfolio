import React from 'react';

import { timelineData, categoryLabels } from '../../data/timelineData';

import './career-timeline.css';

const parallelEntry = timelineData.find((entry) => entry.track === 'parallel');
const mainEntries = timelineData.filter((entry) => entry.track === 'main');

const MENTOR_AFTER_ID = 'hyf-bootcamp';

function TimelineEntryContent({ entry, showParallelBadge = false }) {
  return (
    <>
      <time className="timeline-item-period">{entry.period}</time>
      <span
        className={`timeline-item-category timeline-item-category--${entry.category}`}
      >
        {categoryLabels[entry.category]}
      </span>
      <h3 className="timeline-item-title">{entry.title}</h3>
      {entry.location && (
        <p className="timeline-item-location">{entry.location}</p>
      )}
      {entry.stack && entry.stack.length > 0 && (
        <ul className="timeline-item-stack" aria-label="Technologies used">
          {entry.stack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      )}
      {(entry.link || entry.repo) && (
        <div className="timeline-item-links">
          {entry.link && (
            <a
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-link-badge"
            >
              Live demo
            </a>
          )}
          {entry.repo && (
            <a
              href={entry.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="timeline-link-badge"
            >
              Repository
            </a>
          )}
        </div>
      )}
      {showParallelBadge && (
        <span className="timeline-parallel-badge">Ongoing · parallel</span>
      )}
    </>
  );
}

function TimelineItem({ entry, showParallelBadge = false }) {
  return (
    <li className={`timeline-item timeline-item--${entry.category}`}>
      <span className="timeline-item-dot" aria-hidden="true" />
      <article className="timeline-item-content box-shadow">
        <TimelineEntryContent
          entry={entry}
          showParallelBadge={showParallelBadge}
        />
      </article>
    </li>
  );
}

export const CareerTimeline = () => {
  const mainItems = [];

  mainEntries.forEach(entry => {
    mainItems.push(<TimelineItem key={entry.id} entry={entry} />);

    if (entry.id === MENTOR_AFTER_ID && parallelEntry) {
      mainItems.push(
        <TimelineItem
          key={parallelEntry.id}
          entry={parallelEntry}
          showParallelBadge
        />
      );
    }
  });

  return (
    <section name="experience" className="section career-timeline-section">
      <h2 className="section-title">Experience &amp; Education</h2>

      <div className="timeline-layout">
        <ol className="timeline-main" aria-label="Career timeline">
          {mainItems}
        </ol>
      </div>
    </section>
  );
};
