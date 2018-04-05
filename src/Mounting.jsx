import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Method from './Method';
import Arrow from './Arrow';

const Mounting = ({ advanced }) => (advanced ? (
  <Section advanced name="Mounting" col={1}>
    <Arrow from={0} to={1} />
    <Method
      main
      name="constructor"
      docname="constructor"
      type="render"
      row={1}
    />
    <Arrow from={1} to={2} />
    <Method
      name="getDerivedStateFromProps"
      docname="static-getderivedstatefromprops"
      type="render"
      row={2}
      colspan={2}
    />
    <Arrow from={2} to={4} />
    <Method
      main
      name="render"
      docname="render"
      type="render"
      row={4}
      colspan={4}
    />
    <Arrow from={4} to={6} />
    <Method
      name="React updates DOM and refs"
      type="pre-commit"
      row={6}
      colspan={4}
    />
    <Arrow solid from={6} to={7} />
    <Method
      main
      name="componentDidMount"
      docname="componentdidmount"
      type="commit"
      row={7}
    />
  </Section>
) : (
  <Section name="Mounting" col={1}>
    <Arrow from={0} to={1} />
    <Method
      main
      name="constructor"
      docname="constructor"
      type="render"
      row={1}
    />
    <Arrow from={1} to={2} />
    <Method
      main
      name="render"
      docname="render"
      type="render"
      row={2}
      colspan={4}
    />
    <Arrow from={2} to={3} />
    <Method
      name="React updates DOM and refs"
      type="pre-commit"
      row={3}
      colspan={4}
    />
    <Arrow solid from={3} to={4} />
    <Method
      main
      name="componentDidMount"
      docname="componentdidmount"
      type="commit"
      row={4}
    />
  </Section>
));

Mounting.propTypes = {
  advanced: PropTypes.bool,
};

export default Mounting;
