import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Unmounting = ({ advanced }) => (
  <Section
    advanced={advanced}
    name="Unmounting"
    col={5}
  >
    <Arrow />
    <Method
      main
      name="componentWillUnmount"
      docname="componentwillunmount"
      type="commit"
      row={advanced ? 3 : 1}
    />
    <Arrow />
    <Method
      secondary
      name="React updates DOM and refs"
      type="pre-commit"
      col={1}
      row={advanced ? 6 : 3}
      colspan={5}
    />
  </Section>
);

Unmounting.propTypes = {
  advanced: PropTypes.bool,
};

export default Unmounting;
