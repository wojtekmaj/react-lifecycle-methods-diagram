import React, { Component } from 'react';

import Options from './Options';
import DiagramWithLegend from './DiagramWithLegend';
import GitHub from './GitHub';

/**
 * Workaround for Google Chrome bug that causes grid to jump when hovered
 * after each rerender. Seems like Chrome can't figure out proper sizes until
 * we give it width explicitly.
 */
export const fixChromeGridSizingBug = (ref) => {
  if (!ref || !window.chrome) { return; }

  /* eslint-disable no-param-reassign */
  requestAnimationFrame(() => {
    ref.style.width = `${ref.clientWidth}px`;
    requestAnimationFrame(() => {
      ref.style.width = `${ref.clientWidth - 1}px`;
      requestAnimationFrame(() => {
        ref.style.width = null;
      });
    });
  });

  if (!ref.listenerAdded) {
    ref.addEventListener('DOMNodeInserted', () => fixChromeGridSizingBug(ref));
    ref.listenerAdded = true;
  }
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
        <h1>React lifecycle methods diagram</h1>
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
