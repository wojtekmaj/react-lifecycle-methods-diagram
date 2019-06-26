import React from 'react';

import T, { useTranslation } from './i18n';

export default function GitHub() {
  const title = useTranslation('See project\'s page on GitHub (opens in a new tab)');

  return (
    <>
      <T>See project on</T>
      &nbsp;
      <a
        className="GitHub"
        href="https://github.com/wojtekmaj/react-lifecycle-methods-diagram"
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        GitHub
        <svg
          viewBox="0 0 100 100"
          width="15"
          height="15"
          style={{
            marginLeft: '3px',
            verticalAlign: '-2px',
          }}
        >
          <path d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
              0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          />
          <polygon points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
              14.9 62.8,22.9 71.5,22.9"
          />
        </svg>
      </a>
    </>
  );
}
