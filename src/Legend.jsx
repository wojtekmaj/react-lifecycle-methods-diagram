import React, { Component, Fragment } from 'react';

import Phase from './Phase';

export default class Section extends Component {
  render() {
    return (
      <Fragment>
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
    );
  }
}
