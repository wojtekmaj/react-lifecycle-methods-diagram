import React, { Fragment } from 'react';

import Phase from '../../legendElements/Phase';

const Legend = () => (
  <Fragment>
    <h2 className="hidden">Phases</h2>
    <Phase name="Render" row={1} rowspan={5}>
      Pure and has no side effects. May be paused, aborted or restarted by React.
    </Phase>
    <Phase last name="Commit" row={6} rowspan={2}>
      Can work with DOM, run side effects, schedule updates.
    </Phase>
  </Fragment>
);

export default Legend;
