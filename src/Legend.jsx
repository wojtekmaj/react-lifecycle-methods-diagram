import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Phase from './legendElements/Phase';

const Legend = ({ advanced }) => (advanced ? (
  <Fragment>
    <h2 className="hidden">Phases</h2>
    <Phase name="Render" row={1} rowspan={4}>
      Pure and has no side effects. May be paused, aborted or restarted by React.
    </Phase>
    <Phase name="Pre-commit" row={5} rowspan={1}>
      Can read the DOM.
    </Phase>
    <Phase last name="Commit" row={6} rowspan={2}>
      Can work with DOM, run side effects, schedule updates.
    </Phase>
  </Fragment>
) : (
  <Fragment>
    <h2 className="hidden">Phases</h2>
    <Phase name="Render" row={1} rowspan={2}>
      Pure and has no side effects. May be paused, aborted or restarted by React.
    </Phase>
    <Phase last name="Commit" row={3} rowspan={2}>
      Can work with DOM, run side effects, schedule updates.
    </Phase>
  </Fragment>
));

Legend.propTypes = {
  advanced: PropTypes.bool,
};

export default Legend;
