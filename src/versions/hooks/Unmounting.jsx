import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Unmounting = ({ advanced }) => (advanced ? (
  <Section advanced isHooks name="Unmounting" col={5}>
    <Arrow />

    <Method
      name="Cleanup LayoutEffects"
      docname="uselayouteffect"
      isHooks
      type="layout"
      col={2}
      row={4}
      colspan={4}
    />
    <Arrow solid />
    <Method
      main
      name="Cleanup Effects"
      isHooks
      docname="cleaning-up-an-effect"
      type="commit"
      col={2}
      row={7}
      colspan={4}
    />
  </Section>
) : (
  <Section isHooks name="Unmounting" col={5}>
    <Arrow />
    <Method
      main
      name="Cleanup Effects"
      isHooks
      docname="cleaning-up-an-effect"
      type="commit"
      col={2}
      row={3}
      colspan={4}
    />
  </Section>
));

Unmounting.propTypes = {
  advanced: PropTypes.bool,
};

export default Unmounting;
