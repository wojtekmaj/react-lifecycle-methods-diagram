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

    const gridColumn = `${col * 3} / span ${colspan * 3}`;
    const rowBoundary = 24;

    return (
      <Fragment>
        <section
          className="Section"
          style={{
            gridColumn,
            gridRow: `1 / ${rowBoundary + 1}`,
          }}
        >
          <h2>{name}</h2>
        </section>
        <section
          className="Section Section--secondary"
          style={{
            gridColumn,
            gridRow: `${rowBoundary - 1} / span 11`,
          }}
        />
      </Fragment>
    );
  }
}
