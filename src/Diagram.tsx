import { useEffect, useState } from 'react';

import type { ReactVersion } from './types.js';

const diagramVersions = {
  16.3: () => import('./versions/16.3/index.js'),
  16.4: () => import('./versions/16.4/index.js'),
};

type ImportedValue = Awaited<ReturnType<(typeof diagramVersions)[ReactVersion]>>;

type DiagramProps = {
  advanced: boolean;
  reactVersion: ReactVersion;
};

export default function Diagram({ advanced, reactVersion }: DiagramProps) {
  const [diagramElements, setDiagramElements] = useState<ImportedValue>();

  function loadDiagramElements() {
    const promiseGetter = diagramVersions[reactVersion];
    promiseGetter().then(setDiagramElements);
  }

  useEffect(loadDiagramElements, [reactVersion]);

  if (!diagramElements) {
    return null;
  }

  const { Mounting, Updating, Unmounting } = diagramElements;

  return (
    <>
      <h2 className="hidden">Component lifecycle</h2>
      <Mounting advanced={advanced} />
      <Updating advanced={advanced} />
      <Unmounting advanced={advanced} />
    </>
  );
}
