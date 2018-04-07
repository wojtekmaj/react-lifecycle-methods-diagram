import React from 'react';
import PropTypes from 'prop-types';

import Section from './diagramElements/Section';
import Method from './diagramElements/Method';
import Arrow from './diagramElements/Arrow';

const Unmounting = props => (
  <Section
    {...props}
    name={'Un\u00admounting'}
    col={(props.layout === 'mobile' && props.openedIndex !== 1) ? 3 : 5}
  >
    <Arrow />
    <Method
      main
      name="componentWillUnmount"
      docname="componentwillunmount"
      type="commit"
      row={props.advanced ? 7 : 4}
    />
  </Section>
);

Unmounting.propTypes = {
  advanced: PropTypes.bool,
  isOpened: PropTypes.bool,
  openedIndex: PropTypes.number,
  layout: PropTypes.oneOf(['desktop', 'mobile']),
};

export default Unmounting;
