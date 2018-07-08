import React, { Component } from 'react';

import T from './i18n/T';

import Options from './Options';
import DiagramWithLegend from './DiagramWithLegend';
import GitHub from './GitHub';
import { supportedReactVersions } from './propTypes';

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

export default class Root extends Component {
  state = {
    advanced: getLocalStorageFlag('showAdvanced', 'false'),
    reactVersion: getLocalStorage('reactVersion', latestReactVersion),
  };

  toggleAdvanced = () =>
    this.setState(prevState => ({ advanced: !prevState.advanced }), this.saveSettings);

  toggleReactVersion = (event) => {
    const { value } = event.target;
    this.setState({ reactVersion: value }, this.saveSettings);
  }

  saveSettings = () => {
    try {
      localStorage.showAdvanced = this.state.advanced;
      localStorage.reactVersion = this.state.reactVersion;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to safe settings.');
    }
  }

  render() {
    const { advanced, reactVersion } = this.state;

    return (
      <div ref={ref => fixChromeGridSizingBug(ref)}>
        <h1><T>React lifecycle methods diagram</T></h1>
        <Options
          advanced={advanced}
          reactVersion={reactVersion}
          toggleAdvanced={this.toggleAdvanced}
          toggleReactVersion={this.toggleReactVersion}
        />
        <DiagramWithLegend advanced={advanced} reactVersion={reactVersion} />
        <GitHub />
      </div>
    );
  }
}
