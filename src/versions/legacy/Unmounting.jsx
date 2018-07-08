import React from 'react';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Unmounting = () => (
  <Section
    advanced
    name="Unmounting"
    col={5}
  >
    <Arrow />
    <Method
      main
      name="componentWillUnmount"
      docname="componentwillunmount"
      type="commit"
      row={7}
    />
  </Section>
);

Unmounting.propTypes = {
};

export default Unmounting;
