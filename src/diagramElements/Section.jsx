import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import T from '@wojtekmaj/react-t';

import styles from './Section.module.css';

import Subsection from './Subsection';

export default function Section(props) {
  const { advanced, children, col, colspan = 1, name } = props;

  function renderChildren() {
    // If we're creating a section containing subsections, we don't need to create one.
    if (children.find((el) => el.type === Subsection)) {
      return React.Children.map(children, (child) =>
        React.cloneElement(child, Object.assign({ sectionCol: col }, props, child.props)),
      );
    }

    return <Subsection {...props} />;
  }

  const gridColumn = `${col + 1} / span ${colspan}`;
  const totalRows = advanced ? 7 : 4;

  const endRow = totalRows * 3 + 2;
  const highlight = advanced ? 8 : 7;

  return (
    <>
      <section
        className={styles.wrapper}
        style={{
          gridColumn,
          gridRow: `1 / span ${endRow}`,
        }}
      />
      <div
        className={clsx(styles.highlight, advanced && styles.advanced)}
        style={{
          gridColumn,
          gridRow: `${endRow - highlight + 1} / span ${highlight}`,
        }}
      />
      <h3
        className={styles.title}
        style={{
          gridColumn,
          gridRow: 1,
        }}
      >
        <T>{name}</T>
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
