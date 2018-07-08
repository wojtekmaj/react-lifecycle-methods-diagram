import React from 'react';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Mounting = () => (
  <Section advanced name="Mounting" col={1}>
    <Arrow />
    <Method
      main
      name="constructor"
      docname="constructor"
      type="render"
      row={1}
    />
    <Arrow />
    <Method
      name="componentWillMount"
      docname="unsafe_componentwillmount"
      type="render"
      row={4}
    />
    <Arrow />
    <Method
      main
      name="render"
      docname="render"
      type="render"
      row={5}
      colspan={4}
    />
    <Arrow />
    <Method
      secondary
      name="React updates DOM and refs"
      type="pre-commit"
      row={6}
      colspan={4}
    />
    <Arrow solid />
    <Method
      main
      name="componentDidMount"
      docname="componentdidmount"
      type="commit"
      row={7}
    />
  </Section>
);

Mounting.propTypes = {};

export default Mounting;
