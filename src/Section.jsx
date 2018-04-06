import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Section.less';

import Arrow from './Arrow';

/**
 * Fills props automatically for certain children types. For example, if <Arrow />
 * is put between two other <Method />s, then the arrow will automatically stretch
 * between these two.
 * @param {*} child
 * @param {*} children
 */
const autoFillProps = (child, children) => {
  if (!child) {
    return null;
  }

  const props = {};
  const index = children.indexOf(child);

  switch (child.type) {
    case Arrow: {
      if (typeof child.props.from === 'undefined') {
        const previousChild = children[index - 1];
        props.from = previousChild ? previousChild.props.row : 0;
      }
      if (typeof child.props.to === 'undefined') {
        const nextChild = children[index + 1];
        props.to = nextChild ? nextChild.props.row : 1;
      }
      break;
    }
    default:
      break;
  }
  return props;
};

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
    const { children, col } = this.props;

    return React.Children.map(
      children,
      child => React.cloneElement(
        child,
        Object.assign(
          { col },
          autoFillProps(child, children),
          child.props,
        ),
      ),
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
        {this.renderChildren()}
      </Fragment>
    );
  }
}
