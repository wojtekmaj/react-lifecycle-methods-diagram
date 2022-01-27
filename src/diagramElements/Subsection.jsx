import React from 'react';
import PropTypes from 'prop-types';

import Initiator from './Initiator';
import Method from './Method';
import Arrow from './Arrow';

/**
 * Fills props automatically for certain children types. For example, if <Arrow />
 * is put between two other <Method />s, then the arrow will automatically stretch
 * between these two.
 * @param {*} child
 * @param {*} children
 */
export function autoFillProps(child, children, parentProps) {
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
    case Method: {
      // Helps with grid alignment
      if (
        (props.col || child.props.col || parentProps.col) + (props.colspan || child.props.colspan) <
        parentProps.sectionCol + parentProps.colspan
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

export default function Subsection({ children, col, colspan, sectionCol }) {
  const mappedChildren = React.Children.map(children, (child) =>
    React.cloneElement(
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
    return mappedChildren;
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
      <ul className="Methods">{methodChildren}</ul>
      {otherChildren}
    </>
  );
}

Subsection.propTypes = {
  children: PropTypes.node,
  col: PropTypes.number.isRequired,
  colspan: PropTypes.number,
  sectionCol: PropTypes.number,
};
