import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Section.less';

import T from '../i18n';

import Subsection from './Subsection';

import Method from './Method';
import Initiator from './Initiator';

export default function Section(props) {
  const {
    advanced,
    children,
    col,
    colspan = 1,
    isHooks,
    name,
  } = props;

  function renderChildren() {
    // If we're creating a section containing subsections, we don't need to create one.
    if (!children.find(el => el.type === Method || el.type === Initiator)) {
      return React.Children.map(
        children,
        child => React.cloneElement(
          child,
          Object.assign(
            { sectionCol: col },
            props,
            child.props,
          ),
        ),
      );
    }

    return (
      <Subsection {...props} />
    );
  }

  const gridColumn = `${col + 1} / span ${colspan}`;

  const totalSpan = 14 + (advanced ? 1 : 0) * (isHooks ? 12 : 9);
  const highlightPos = 8
    + (isHooks ? -2 : 0) + (advanced ? 1 : 0) * (isHooks ? 2 : 8);
  const highlightSpan = totalSpan - (highlightPos - 1);

  return (
    <>
      <section
        className={mergeClassNames('Section', advanced && 'Section--advanced')}
        style={{
          gridColumn,
          gridRow: `1 / span ${totalSpan}`,
        }}
      />
      <div
        className={mergeClassNames(
          'Section__highlight',
          advanced && 'Section__highlight--advanced',
          isHooks && 'Section__highlight--hooks',
        )}
        style={{
          gridColumn,
          gridRow: `${highlightPos} / span ${highlightSpan}`,
        }}
      />
      <h3
        className="Section__title"
        style={{
          gridColumn,
          gridRow: 1,
        }}
      >
        <T>
          {name}
        </T>
      </h3>
      {renderChildren()}
    </>
  );
}

Section.propTypes = {
  advanced: PropTypes.bool,
  children: PropTypes.node,
  col: PropTypes.number.isRequired,
  colspan: PropTypes.number,
  isHooks: PropTypes.bool,
  name: PropTypes.string.isRequired,
};
