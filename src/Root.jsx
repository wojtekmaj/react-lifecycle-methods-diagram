import React, { Component } from 'react';

import T from './i18n/T';

import Options from './Options';
import DiagramWithLegend from './DiagramWithLegend';
import GitHub from './GitHub';

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

export default class Root extends Component {
  state = {
    advanced: localStorage.showAdvanced ? localStorage.showAdvanced === 'true' : false,
  };

  toggleAdvanced = () =>
    this.setState(prevState => ({ advanced: !prevState.advanced }), this.saveSettings);

  saveSettings = () => {
    try {
      localStorage.showAdvanced = this.state.advanced;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to safe setting.');
    }
  }

  render() {
    const { advanced } = this.state;

    return (
      <div ref={ref => fixChromeGridSizingBug(ref)}>
        <h1><T>React lifecycle methods diagram</T></h1>
        <Options
          advanced={advanced}
          toggleAdvanced={this.toggleAdvanced}
        />
        <DiagramWithLegend advanced={advanced} />
        <GitHub />
      </div>
    );
  }
}
