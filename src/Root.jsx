import React, { useEffect, useState } from 'react';

import T from './i18n';

import Options from './Options';
import DiagramWithLegend from './DiagramWithLegend';
import Footer from './Footer';

import { supportedReactVersions } from './propTypes';
import { getMatchingLocale } from './i18n/i18n';

/**
 * Workaround for Google Chrome bug that causes grid to jump when hovered
 * after each rerender. Seems like Chrome can't figure out proper sizes until
 * we give it width explicitly.
 */
function fixChromeGridSizingBug(ref) {
  if (!ref) { return; }
  requestAnimationFrame(() => {
    /* eslint-disable no-param-reassign */
    ref.style.width = `${ref.clientWidth}px`;
    requestAnimationFrame(() => {
      ref.style.width = null;
    });
  });
}

function getLocalStorage(key, defaultValue) {
  return (
    localStorage && localStorage[key]
      ? localStorage[key]
      : defaultValue
  );
}

function getLocalStorageFlag(key, defaultValue) {
  return getLocalStorage(key, defaultValue) === 'true';
}

const latestReactVersion = supportedReactVersions[supportedReactVersions.length - 1];

const userLocale = getLocalStorage('locale', getMatchingLocale());

document.documentElement.setAttribute('lang', userLocale);

export default function Root() {
  const [advanced, setAdvanced] = useState(getLocalStorageFlag('showAdvanced', 'false'));
  const [locale, setLocale] = useState(userLocale);
  const [reactVersion, setReactVersion] = useState(getLocalStorage('reactVersion', latestReactVersion));

  function toggleAdvanced() {
    setAdvanced(prevAdvanced => !prevAdvanced);
  }

  function toggleLocale(event) {
    const { value } = event.target;
    document.documentElement.setAttribute('lang', value);
    setLocale(value);
  }

  function toggleReactVersion(event) {
    const { value } = event.target;
    setReactVersion(value);
  }

  useEffect(() => {
    try {
      localStorage.showAdvanced = advanced;
      localStorage.locale = locale;
      localStorage.reactVersion = reactVersion;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to safe settings.');
    }
  }, [advanced, locale, reactVersion]);

  return (
    <div ref={fixChromeGridSizingBug}>
      <h1>
        <T>
          React lifecycle methods diagram
        </T>
      </h1>
      <Options
        advanced={advanced}
        locale={locale}
        reactVersion={reactVersion}
        toggleAdvanced={toggleAdvanced}
        toggleLocale={toggleLocale}
        toggleReactVersion={toggleReactVersion}
      />
      <DiagramWithLegend advanced={advanced} reactVersion={reactVersion} />
      <Footer />
    </div>
  );
}
