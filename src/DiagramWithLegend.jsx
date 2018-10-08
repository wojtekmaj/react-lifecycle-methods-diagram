import React from 'react';
import PropTypes from 'prop-types';

import './DiagramWithLegend.less';

import Legend from './Legend';
import Diagram from './Diagram';

import { isReactVersion } from './propTypes';

const DiagramWithLegend = ({ advanced, reactVersion }) => (
  <main className="DiagramWithLegend">
    <Legend advanced={advanced} />
    <Diagram
      advanced={advanced}
      reactVersion={reactVersion}
    />
  </main>
);

DiagramWithLegend.propTypes = {
  advanced: PropTypes.bool.isRequired,
  reactVersion: isReactVersion.isRequired,
};

export default DiagramWithLegend;
