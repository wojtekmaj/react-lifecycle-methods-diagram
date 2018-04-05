import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Section.less';

export default class Section extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
    children: PropTypes.node,
    col: PropTypes.number.isRequired,
    colspan: PropTypes.number,
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    colspan: 1,
  }

  render() {
    const {
      advanced, children, col, colspan, name,
    } = this.props;

    const gridColumn = `${col + 1} / span ${colspan}`;

    return (
      <Fragment>
        <section
          className={mergeClassNames('Section', advanced && 'Section--advanced')}
          style={{
            gridColumn,
            gridRow: advanced ? '1 / span 26' : '1 / span 17',
          }}
        >
          <h2>{name}</h2>
        </section>
        <div
          className={mergeClassNames('Section__highlight', advanced && 'Section__highlight--advanced')}
          style={{
            gridColumn,
            gridRow: advanced ? '19 / span 8' : '11 / span 7',
          }}
        />
        {
          React.Children.map(
            children,
            child => React.cloneElement(child, Object.assign({ col }, child.props)),
          )
        }
      </Fragment>
    );
  }
}
