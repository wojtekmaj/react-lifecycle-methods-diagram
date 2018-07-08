import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DiagramWithLegend.less';

import Legend from './Legend';
import Diagram from './Diagram';

import { isReactVersion } from './propTypes';

export default class DiagramWithLegend extends Component {
  static propTypes = {
    advanced: PropTypes.bool.isRequired,
    reactVersion: isReactVersion.isRequired,
  };

  render() {
    const { advanced, reactVersion } = this.props;

    return (
      <div className="DiagramWithLegend">
        <Legend advanced={advanced} />
        <Diagram
          advanced={advanced}
          reactVersion={reactVersion}
        />
      </div>
    );
  }
}
