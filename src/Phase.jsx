import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Phase.less';

export default class Phase extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    last: PropTypes.bool,
    name: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    rowspan: PropTypes.number,
  };

  render() {
    const {
      children, last, name, row, rowspan,
    } = this.props;

    return (
      <div
        className={mergeClassNames('Phase', last && 'Phase--last')}
        style={{
          gridColumn: 1,
          gridRow: `${(row * 4) + 2} / ${rowspan ? `span ${rowspan * 4}` : 'auto'}`,
        }}
      >
        <h3>“{name} phase”</h3>
        <p>{children}</p>
      </div>
    );
  }
}
