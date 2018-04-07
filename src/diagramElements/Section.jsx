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
    isOpened: PropTypes.bool,
    layout: PropTypes.oneOf(['desktop', 'mobile']),
    name: PropTypes.string.isRequired,
    open: PropTypes.func,
  };

  static defaultProps = {
    colspan: 1,
  }

  renderChildren() {
    const { children, isOpened } = this.props;

    if (!isOpened) {
      return null;
    }

    // If we're creating a section containing subsections, we don't need to create one.
    if (!children.find(el => el.type === Method || el.type === Initiator)) {
      return React.Children.map(
        children,
        child =>
          React.cloneElement(
            child,
            Object.assign(
              { sectionCol: this.props.col },
              this.props,
              child.props,
            ),
          ),
      );
    }

    return (
      <Subsection sectionCol={this.props.col} {...this.props} />
    );
  }

  render() {
    const {
      advanced, col, colspan, isOpened, layout, name,
    } = this.props;

    const gridColumn = `${col + 1} / span ${isOpened ? colspan : 1}`;

    return (
      <Fragment>
        <section
          className={mergeClassNames(
            'Section',
            isOpened ? 'Section--open' : 'Section--closed',
            advanced && 'Section--advanced',
            `Section--${layout}`,
          )}
          style={{
            gridColumn,
            gridRow: advanced ? '1 / span 23' : '1 / span 14',
          }}
        />
        {
          isOpened && (
            <div
              className={mergeClassNames(
                'Section__highlight',
                advanced && 'Section__highlight--advanced',
              )}
              style={{
                gridColumn,
                gridRow: advanced ? '16 / span 8' : '8 / span 7',
              }}
            />
        )}
        <h3
          className={mergeClassNames(
            'Section__title',
            isOpened ? 'Section__title--open' : 'Section__title--closed',
          )}
          style={{
            gridColumn,
            gridRow: 1,
          }}
        >
          {
            isOpened ?
              name :
              <a href="#" onClick={this.props.open}>
                {name}
              </a>
          }
        </h3>
        {this.renderChildren()}
      </Fragment>
    );
  }
}
