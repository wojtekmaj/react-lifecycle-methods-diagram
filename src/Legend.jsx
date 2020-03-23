import React from 'react';
import PropTypes from 'prop-types';

import T from './i18n';
import { isReactVersion } from './propTypes';

import Phase from './legendElements/Phase';

const renderText = 'Pure and has no side effects. May be paused, aborted or restarted by React.';

// const DiagramConfigKey = {
//   basic: 0,
//   advanced: 1,
//   hooks: 2,
//   advHooks: 3,
// };

const diagramConfigs = [
  {
    commitPos: 3,
    layoutName: 'Pre-Commit',
    layoutSpan: 0,
    layoutText: 'Can read the DOM.',
    renderSpan: 2,
    renderText,
  },
  {
    commitPos: 6,
    layoutName: 'Pre-Commit',
    layoutSpan: 1,
    layoutText: 'Can read the DOM.',
    renderSpan: 4,
    renderText,
  },
  {
    commitPos: 3,
    layoutName: 'Reconciliation',
    layoutSpan: 1,
    layoutText: 'Handled by React.',
    renderSpan: 1,
    renderText,
  },
  {
    commitPos: 7,
    layoutName: 'Layout',
    layoutSpan: 4,
    layoutText: 'DOM is generated, but screen not yet updated.',
    renderSpan: 2,
    renderText:
      'Pure, no side effects. (Lazy init: function passed to useState and useReducer.)',
  },
];

function getDiagramConfig(theType) {
  return diagramConfigs[theType];
}

export default function Legend({ advanced, reactVersion }) {
  const adv = advanced ? 1 : 0;
  const hooks = reactVersion === 'hooks' ? 2 : 0;
  const theType = adv + hooks;
  const config = getDiagramConfig(theType);

  return (
    <>
      <h2 className="hidden">
        <T>Phases</T>
      </h2>
      <Phase key="render" name="Render" row={1} rowspan={config.renderSpan}>
        {config.renderText}
      </Phase>

      {theType !== 0 && (
        <Phase
          key="layout"
          name={config.layoutName}
          row={config.renderSpan + 1}
          rowspan={config.layoutSpan}
        >
          {config.layoutText}
        </Phase>
      )}

      <Phase key="commit" last name="Commit" row={config.commitPos} rowspan={2}>
        Can work with DOM, run side effects, schedule updates.
      </Phase>
    </>
  );
}

Legend.propTypes = {
  advanced: PropTypes.bool,
  reactVersion: isReactVersion.isRequired,
};
