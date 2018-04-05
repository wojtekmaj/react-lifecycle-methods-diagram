import React from 'react';

import Section from './Section';
import Method from './Method';
import Arrow from './Arrow';

const Unmounting = () => (
  <Section name={'Un\u00admounting'} col={5}>
    <Arrow col={5} from={0} to={7} />
    <Method
      main
      name="componentWillUnmount"
      docname="componentwillunmount"
      type="commit"
      col={5}
      row={7}
    />
  </Section>
);

export default Unmounting;
