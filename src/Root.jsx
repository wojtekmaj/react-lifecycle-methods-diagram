import React, { Component } from 'react';

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
const fixChromeGridSizingBug = (ref) => {
  if (!ref) { return; }
  requestAnimationFrame(() => {
    /* eslint-disable no-param-reassign */
    ref.style.width = `${ref.clientWidth}px`;
    requestAnimationFrame(() => {
      ref.style.width = null;
    });
  });
};

const getLocalStorage = (key, defaultValue) => (
  localStorage && localStorage[key]
    ? localStorage[key]
    : defaultValue
);

const getLocalStorageFlag = (key, defaultValue) => getLocalStorage(key, defaultValue) === 'true';

const latestReactVersion = [...supportedReactVersions].pop();

const userLocale = getLocalStorage('locale', getMatchingLocale());

document.documentElement.setAttribute('lang', userLocale);
export default class Root extends Component {
  state = {
    advanced: getLocalStorageFlag('showAdvanced', 'false'),
    locale: userLocale,
    reactVersion: getLocalStorage('reactVersion', latestReactVersion),
  };

  toggleAdvanced = () => this.setState(prevState => ({
    advanced: !prevState.advanced,
  }), this.saveSettings);

  toggleLocale = (event) => {
    const { value } = event.target;
    document.documentElement.setAttribute('lang', value);
    this.setState({ locale: value }, this.saveSettings);
  }

  toggleReactVersion = (event) => {
    const { value } = event.target;
    this.setState({ reactVersion: value }, this.saveSettings);
  }

  saveSettings = () => {
    const { advanced, locale, reactVersion } = this.state;
    try {
      localStorage.showAdvanced = advanced;
      localStorage.locale = locale;
      localStorage.reactVersion = reactVersion;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to safe settings.');
    }
  }

  render() {
    const { advanced, locale, reactVersion } = this.state;

    return (
      <div ref={ref => fixChromeGridSizingBug(ref)}>
        <h1>
          <T>
            React lifecycle methods diagram
          </T>
        </h1>
        <Options
          advanced={advanced}
          locale={locale}
          reactVersion={reactVersion}
          toggleAdvanced={this.toggleAdvanced}
          toggleLocale={this.toggleLocale}
          toggleReactVersion={this.toggleReactVersion}
        />
        <DiagramWithLegend advanced={advanced} reactVersion={reactVersion} />
        <Footer />
      </div>
    );
  }
}
