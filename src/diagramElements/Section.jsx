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

  return (
    <>
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
  name: PropTypes.string.isRequired,
};
