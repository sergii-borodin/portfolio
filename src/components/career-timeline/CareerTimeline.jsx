import React, { useMemo, useState } from 'react';

import { timelineData, categoryLabels } from '../../data/timelineData';

import './career-timeline.css';

const parallelEntry = timelineData.find(entry => entry.track === 'parallel');
const mainEntries = timelineData.filter(entry => entry.track === 'main');

const MENTOR_AFTER_ID = 'hyf-bootcamp';

const DURATION_CATEGORIES = ['internship', 'commercial'];

const SUMMARY_CATEGORIES = [
  'internship',
  'commercial',
  'mentoring',
  'project',
  'education',
  'certificate',
];

const SUMMARY_LABELS = {
  internship: 'Internships',
  commercial: 'Commercial',
  mentoring: 'Mentoring',
  project: 'Projects',
  education: 'Education',
  certificate: 'Certificates',
};

function shortEntryName(entry) {
  if (entry.title.includes(',')) {
    return entry.title.split(',')[1].trim().split('(')[0].trim();
  }

  return entry.title.split('—')[0].trim();
}

function formatDuration(totalMonths) {
  if (totalMonths < 12) {
    return `~${totalMonths} months`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months === 0) {
    return years === 1 ? '~1 year' : `~${years} years`;
  }

  const yearLabel = years === 1 ? '1 yr' : `${years} yrs`;
  return `~${yearLabel} ${months} mo`;
}

function buildDisplayEntries() {
  const items = [];

  mainEntries.forEach(entry => {
    items.push({ entry, showParallelBadge: false });

    if (entry.id === MENTOR_AFTER_ID && parallelEntry) {
      items.push({ entry: parallelEntry, showParallelBadge: true });
    }
  });

  return items;
}

function getAllEntries() {
  return parallelEntry ? [...mainEntries, parallelEntry] : [...mainEntries];
}

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
              {entry.linkLabel ?? 'Live demo'}
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

function getSummarySubtitle(category, categoryCounts, categorySubtitles) {
  if (category === 'mentoring' && categoryCounts[category] === 1) {
    return 'Ongoing';
  }

  return categorySubtitles[category].join(' · ');
}

export const CareerTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const displayEntries = useMemo(() => buildDisplayEntries(), []);

  const categoryCounts = useMemo(() => {
    return getAllEntries().reduce((counts, entry) => {
      counts[entry.category] = (counts[entry.category] || 0) + 1;
      return counts;
    }, {});
  }, []);

  const categorySubtitles = useMemo(() => {
    return getAllEntries().reduce((subtitles, entry) => {
      if (!subtitles[entry.category]) {
        subtitles[entry.category] = [];
      }
      subtitles[entry.category].push(shortEntryName(entry));
      return subtitles;
    }, {});
  }, []);

  const categoryDurations = useMemo(() => {
    return getAllEntries().reduce((durations, entry) => {
      if (!entry.durationMonths) {
        return durations;
      }

      durations[entry.category] =
        (durations[entry.category] || 0) + entry.durationMonths;
      return durations;
    }, {});
  }, []);

  const filteredEntries = useMemo(() => {
    if (activeFilter === 'all') {
      return displayEntries;
    }

    return displayEntries.filter(
      ({ entry }) => entry.category === activeFilter
    );
  }, [activeFilter, displayEntries]);

  const handleSummaryClick = category => {
    setActiveFilter(category);
  };

  const timelineRange = '2021 – present';

  return (
    <section name="experience" className="section career-timeline-section">
      <h2 className="section-title">Experience &amp; Education</h2>

      <div className="timeline-layout">
        <div
          className="timeline-summary"
          role="group"
          aria-label="Experience summary by category"
        >
          <button
            type="button"
            className={`timeline-summary-card timeline-summary-card--all${
              activeFilter === 'all' ? ' timeline-summary-card--active' : ''
            }`}
            aria-pressed={activeFilter === 'all'}
            onClick={() => handleSummaryClick('all')}
          >
            <span className="timeline-summary-label">Full timeline</span>
            <span className="timeline-summary-subtitle">
              {timelineRange} · chronological
            </span>
          </button>

          {SUMMARY_CATEGORIES.filter(
            category => categoryCounts[category] > 0
          ).map(category => (
            <button
              key={category}
              type="button"
              className={`timeline-summary-card timeline-summary-card--${category}${
                activeFilter === category
                  ? ' timeline-summary-card--active'
                  : ''
              }`}
              aria-pressed={activeFilter === category}
              onClick={() => handleSummaryClick(category)}
            >
              <span className="timeline-summary-count">
                {categoryCounts[category]}
              </span>
              <span className="timeline-summary-label">
                {SUMMARY_LABELS[category]}
              </span>
              {DURATION_CATEGORIES.includes(category) &&
                categoryDurations[category] > 0 && (
                  <span className="timeline-summary-duration">
                    {formatDuration(categoryDurations[category])} total
                  </span>
                )}
              <span className="timeline-summary-subtitle">
                {getSummarySubtitle(
                  category,
                  categoryCounts,
                  categorySubtitles
                )}
              </span>
            </button>
          ))}
        </div>

        <ol className="timeline-main" aria-label="Career timeline">
          {filteredEntries.map(({ entry, showParallelBadge }) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              showParallelBadge={showParallelBadge}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
