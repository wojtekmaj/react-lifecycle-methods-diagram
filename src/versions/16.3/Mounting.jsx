import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

export default function Mounting({ advanced }) {
  return (advanced ? (
    <Section advanced name="Mounting" col={1}>
      <Arrow />
      <Method
        main
        name="constructor"
        key="constructor"
        docname="constructor"
        type="render"
        row={1}
      />
      <Arrow />
      <Method
        name="getDerivedStateFromProps"
        key="static-getderivedstatefromprops"
        docname="static-getderivedstatefromprops"
        type="render"
        row={2}
        colspan={2}
        endsInMiddle
      />
      <Arrow />
      <Method
        main
        name="render"
        key="render"
        docname="render"
        type="render"
        row={4}
        colspan={4}
      />
      <Arrow />
      <Method
        secondary
        name="React updates DOM and refs"
        key="react-updates-dom-and-refs"
        type="pre-commit"
        row={6}
        colspan={4}
      />
      <Arrow solid />
      <Method
        main
        name="componentDidMount"
        key="componentdidmount"
        docname="componentdidmount"
        type="commit"
        row={7}
      />
    </Section>
  ) : (
    <Section name="Mounting" col={1}>
      <Arrow />
      <Method
        main
        name="constructor"
        key="constructor"
        docname="constructor"
        type="render"
        row={1}
      />
      <Arrow />
      <Method
        main
        name="render"
        key="render"
        docname="render"
        type="render"
        row={2}
        colspan={4}
      />
      <Arrow />
      <Method
        secondary
        name="React updates DOM and refs"
        key="react-updates-dom-and-refs"
        type="pre-commit"
        row={3}
        colspan={4}
      />
      <Arrow solid />
      <Method
        main
        name="componentDidMount"
        key="componentdidmount"
        docname="componentdidmount"
        type="commit"
        row={4}
      />
    </Section>
  ));
}

Mounting.propTypes = {
  advanced: PropTypes.bool,
};
