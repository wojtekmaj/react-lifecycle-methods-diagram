import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Method from './Method';
import Arrow from './Arrow';

const Unmounting = ({ advanced }) => (
  <Section
    advanced={advanced}
    name={'Un\u00admounting'}
    col={5}
  >
    <Arrow col={5} from={0} to={advanced ? 7 : 4} />
    <Method
      main
      name="componentWillUnmount"
      docname="componentwillunmount"
      type="commit"
      col={5}
      row={advanced ? 7 : 4}
    />
  </Section>
);

Unmounting.propTypes = {
  advanced: PropTypes.bool,
};

export default Unmounting;
