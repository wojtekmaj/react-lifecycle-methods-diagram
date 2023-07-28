import React from 'react';
import clsx from 'clsx';
import T from '@wojtekmaj/react-t';

import {
  wrapper,
  highlight as highlightClassName,
  advanced as advancedClassName,
  title,
} from './Section.module.css';

import Subsection from './Subsection.js';

type SectionProps = {
  advanced?: boolean;
  children: React.ReactElement[];
  col: number;
  colspan?: number;
  name: string;
};

export default function Section(props: SectionProps) {
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
        className={wrapper}
        style={{
          gridColumn,
          gridRow: `1 / span ${endRow}`,
        }}
      />
      <div
        className={clsx(highlightClassName, advanced && advancedClassName)}
        style={{
          gridColumn,
          gridRow: `${endRow - highlight + 1} / span ${highlight}`,
        }}
      />
      <h3
        className={title}
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
