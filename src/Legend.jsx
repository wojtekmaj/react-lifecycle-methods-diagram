import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isReactVersion } from './propTypes';

const diagramVersions = {
  legacy: import('./versions/legacy'),
  16.3: import('./versions/16.3'),
  16.4: import('./versions/16.4'),
};

export default class Legend extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
    reactVersion: isReactVersion.isRequired,
  };

  state = {
    legendElements: null,
  };

  componentDidMount() {
    this.loadlegendElements();
  }

  componentDidUpdate(prevProps) {
    if (this.props.reactVersion !== prevProps.reactVersion) {
      this.loadlegendElements();
    }
  }

  async loadlegendElements() {
    const legendElements = (await diagramVersions[this.props.reactVersion]).default;

    this.setState({ legendElements });
  }

  render() {
    const { advanced } = this.props;
    const { legendElements } = this.state;

    if (!legendElements) {
      return null;
    }

    const { Legend: LegendElement } = legendElements;

    return (
      <LegendElement advanced={advanced} />
    );
  }
}

