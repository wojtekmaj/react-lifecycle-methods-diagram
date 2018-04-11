import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Phase.less';

import T from '../i18n/T';

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
          gridRow: `${row * 3} / ${rowspan ? `span ${rowspan * 3}` : 'auto'}`,
        }}
      >
        <h3><T name={name}>{'“{name} phase”'}</T></h3>
        <p><T>{children}</T></p>
      </div>
    );
  }
}
