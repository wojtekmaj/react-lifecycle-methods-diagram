import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './Section.less';

export default class Section extends Component {
  static propTypes = {
    col: PropTypes.number.isRequired,
    colspan: PropTypes.number,
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    colspan: 1,
  }

  render() {
    const {
      col, colspan, name,
    } = this.props;

    const gridColumn = `${col + 1} / span ${colspan}`;

    return (
      <Fragment>
        <section
          className="Section"
          style={{
            gridColumn,
            gridRow: '1 / span 33',
          }}
        >
          <h2>{name}</h2>
        </section>
        <div
          className="Section__highlight"
          style={{
            gridColumn,
            gridRow: '23 / span 11',
          }}
        />
      </Fragment>
    );
  }
}
