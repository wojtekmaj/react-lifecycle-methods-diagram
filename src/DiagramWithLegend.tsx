import PropTypes from 'prop-types';

import { wrapper } from './DiagramWithLegend.module.css';

import Legend from './Legend';
import Diagram from './Diagram';

import { isReactVersion } from './propTypes';

import type { ReactVersion } from './types';

type DiagramWithLegendProps = {
  advanced: boolean;
  reactVersion: ReactVersion;
};

export default function DiagramWithLegend({ advanced, reactVersion }: DiagramWithLegendProps) {
  return (
    <main className={wrapper}>
      <Legend advanced={advanced} />
      <Diagram advanced={advanced} reactVersion={reactVersion} />
    </main>
  );
}

DiagramWithLegend.propTypes = {
  advanced: PropTypes.bool.isRequired,
  reactVersion: isReactVersion.isRequired,
};
