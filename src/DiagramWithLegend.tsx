import { wrapper } from './DiagramWithLegend.module.css';

import Legend from './Legend.js';
import Diagram from './Diagram.js';

import type { ReactVersion } from './types.js';

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
