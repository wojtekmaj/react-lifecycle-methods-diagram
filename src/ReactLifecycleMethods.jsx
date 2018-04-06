import React, { Component } from 'react';

import './ReactLifecycleMethods.less';

import Options from './Options';
import DiagramWithLegend from './DiagramWithLegend';

export default class ReactLifecycleMethods extends Component {
  state = {
    advanced: false,
  }

  toggleAdvanced = () =>
    this.setState(prevState => ({ advanced: !prevState.advanced }));

  render() {
    const { advanced } = this.state;

    return (
      <div
        className="ReactLifecycleMethods"
        ref={(ref) => {
          /**
           * Workaround for Google Chrome bug that causes grid to jump when hovered
           * after each rerender. Seems like Chrome can't figure out proper sizes until
           * we give it width explicitly.
           */
          if (!ref) { return; }
          requestAnimationFrame(() => {
            /* eslint-disable no-param-reassign */
            ref.style.width = `${ref.clientWidth}px`;
            requestAnimationFrame(() => {
              ref.style.width = null;
            });
          });
        }}
      >
        <Options advanced={advanced} toggleAdvanced={this.toggleAdvanced} />
        <DiagramWithLegend advanced={advanced} />
      </div>
    );
  }
}
