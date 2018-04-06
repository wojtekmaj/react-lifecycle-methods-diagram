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
      <div className="ReactLifecycleMethods">
        <Options advanced={advanced} toggleAdvanced={this.toggleAdvanced} />
        <DiagramWithLegend advanced={advanced} />
      </div>
    );
  }
}
