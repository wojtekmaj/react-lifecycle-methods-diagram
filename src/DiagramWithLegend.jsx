import PropTypes from 'prop-types';

import './DiagramWithLegend.less';

import Legend from './Legend';
import Diagram from './Diagram';

import { isReactVersion } from './propTypes';

export default function DiagramWithLegend({ advanced, reactVersion }) {
  return (
    <main className="DiagramWithLegend">
      <Legend advanced={advanced} />
      <Diagram
        advanced={advanced}
        reactVersion={reactVersion}
      />
    </main>
  );
}

DiagramWithLegend.propTypes = {
  advanced: PropTypes.bool.isRequired,
  reactVersion: isReactVersion.isRequired,
};
