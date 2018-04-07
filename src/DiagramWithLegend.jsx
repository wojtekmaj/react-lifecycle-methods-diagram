import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DiagramWithLegend.less';

import Legend from './Legend';

import Diagram from './Diagram';

export default class DiagramWithLegend extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
  };

  render() {
    const { advanced } = this.props;

    return (
      <div className="DiagramWithLegend">
        <Legend advanced={advanced} />
        <Diagram advanced={advanced} />
      </div>
    );
  }
}
