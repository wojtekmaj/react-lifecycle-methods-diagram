import { Children, cloneElement } from 'react';

import { methods } from './Section.module.css';

import Initiator from './Initiator.js';
import Method from './Method.js';

import { isArrow, isInitiator, isMethod } from '../shared/utils.js';

/**
 * Fills props automatically for certain children types. For example, if <Arrow />
 * is put between two other <Method />s, then the arrow will automatically stretch
 * between these two.
 * @param {*} child
 * @param {*} children
 */
function autoFillProps(
  child: React.ReactElement,
  children: React.ReactElement[],
  parentProps: {
    col: number;
    colspan?: number;
    sectionCol?: number;
  },
) {
  if (!child) {
    return null;
  }

  const props: {
    col?: number;
    colspan?: number;
    endsInMiddle?: boolean;
    from?: number;
    to?: number;
  } = {};
  const index = children.indexOf(child);

  switch (true) {
    case isArrow(child): {
      if (typeof child.props.from === 'undefined') {
        const previousChild = children[index - 1];
        props.from =
          previousChild && (isInitiator(previousChild) || isMethod(previousChild))
            ? previousChild.props.row
            : 0;
      }
      if (typeof child.props.to === 'undefined') {
        const nextChild = children[index + 1];
        props.to =
          nextChild && (isInitiator(nextChild) || isMethod(nextChild)) ? nextChild.props.row : 1;
      }
      break;
    }
    case isMethod(child): {
      // Helps with grid alignment
      if (
        (props.col || child.props.col || parentProps.col) +
          (props.colspan || child.props.colspan || 0) <
        (parentProps.sectionCol || 0) + (parentProps.colspan || 0)
      ) {
        props.endsInMiddle = true;
      }
      break;
    }
    default:
      break;
  }
  return props;
}

type SubsectionProps = {
  children: React.ReactElement[];
  col: number;
  colspan?: number;
  sectionCol?: number;
};

export default function Subsection({ children, col, colspan, sectionCol }: SubsectionProps) {
  const mappedChildren = Children.map(children, (child) =>
    cloneElement(
      child,
      Object.assign(
        { col },
        autoFillProps(child, children, { col, colspan, sectionCol }),
        child.props,
      ),
    ),
  );

  // iOS fails to render display: contents properly despite reporting so
  if ('CSS' in window && !CSS.supports('display: contents')) {
    return <>{mappedChildren}</>;
  }

  // If display: contents is supported, we can create a proper list wrapper for list elements
  const initiatorChildren = mappedChildren.filter((el) => el.type === Initiator);
  const methodChildren = mappedChildren.filter((el) => el.type === Method);
  const otherChildren = mappedChildren.filter(
    (el) => !methodChildren.includes(el) && !initiatorChildren.includes(el),
  );

  return (
    <>
      {initiatorChildren}
      <ul className={methods}>{methodChildren}</ul>
      {otherChildren}
    </>
  );
}
