import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Initiator.less';

export default class Initiator extends Component {
  static propTypes = {
    col: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
  };

  render() {
    const {
      col, name, row,
    } = this.props;

    return (
      <div
        className="Initiator"
        style={{
          gridColumn: `${col * 3} / span 3`,
          gridRow: `${(row * 4) + 2} / span 3`,
        }}
      >
        <p>{name}</p>
      </div>
    );
  }
}
