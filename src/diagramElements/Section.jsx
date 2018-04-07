import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Section.less';

import Subsection from './Subsection';

import Method from './Method';
import Initiator from './Initiator';

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

  renderChildren() {
    const { children } = this.props;

    // If we're creating a section containing subsections, we don't need to create one.
    if (!children.find(el => el.type === Method || el.type === Initiator)) {
      return children;
    }

    return (
      <Subsection {...this.props} />
    );
  }

  render() {
    const {
      advanced, col, colspan, name,
    } = this.props;

    const gridColumn = `${col + 1} / span ${colspan}`;

    return (
      <Fragment>
        <section
          className={mergeClassNames('Section', advanced && 'Section--advanced')}
          style={{
            gridColumn,
            gridRow: advanced ? '1 / span 23' : '1 / span 14',
          }}
        />
        <div
          className={mergeClassNames('Section__highlight', advanced && 'Section__highlight--advanced')}
          style={{
            gridColumn,
            gridRow: advanced ? '16 / span 8' : '8 / span 7',
          }}
        />
        <h3
          className="Section__title"
          style={{
            gridColumn,
            gridRow: 1,
          }}
        >
          {name}
        </h3>
        {this.renderChildren()}
      </Fragment>
    );
  }
}
