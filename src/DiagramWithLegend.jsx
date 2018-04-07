import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DiagramWithLegend.less';

import Legend from './Legend';

import Mounting from './Mounting';
import Updating from './Updating';
import Unmounting from './Unmounting';

export default class DiagramWithLegend extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
  };

  render() {
    const { advanced } = this.props;

    return (
      <div className="DiagramWithLegend">
        <Legend advanced={advanced} />
        <h2 className="hidden">Component lifecycle</h2>
        <Mounting advanced={advanced} />
        <Updating advanced={advanced} />
        <Unmounting advanced={advanced} />
      </div>
    );
  }
}
