import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const Mounting = (
  { advanced }, // A
) => (advanced ? (
  <Section advanced isHooks name="Mounting" col={1}>
    <Arrow />
    <Method
      name="Run lazy initializers"
      docname="lazy-initial-state"
      isHooks
      type="render"
      col={1}
      row={1}
      colspan={1}
    />
    <Arrow />
    <Method
      main
      name="Render"
      docname="render"
      type="render"
      col={1}
      row={2}
      colspan={4}
    />
    <Arrow />

    <Method
      secondary
      name="React updates DOM"
      isHooks
      type="layout"
      col={1}
      row={3}
      colspan={4}
    />
    <Arrow solid />
    <Method
      name="Run LayoutEffects"
      isHooks
      docname="uselayouteffect"
      type="layout"
      col={1}
      row={5}
      colspan={4}
    />
    <Arrow solid />
    <Method
      secondary
      name="Browser paints screen"
      isHooks
      type="layout"
      col={1}
      row={6}
      colspan={4}
    />
    <Arrow solid />
    <Method
      main
      name="Run Effects"
      docname="useeffect"
      isHooks
      type="commit"
      col={1}
      row={8}
      colspan={4}
    />
  </Section>
) : (
  <Section isHooks name="Mounting" col={1}>
    <Arrow />
    <Method
      main
      name="Render"
      docname="render"
      type="render"
      col={1}
      row={1}
      colspan={4}
    />
    <Arrow />
    <Method
      secondary
      name="React updates DOM, browser paints screen"
      isHooks
      type="layout"
      col={1}
      row={2}
      colspan={4}
    />
    <Arrow solid />
    <Method
      main
      name="Run Effects"
      docname="useeffect"
      isHooks
      type="commit"
      col={1}
      row={4}
      colspan={4}
    />
  </Section>
));

Mounting.propTypes = {
  advanced: PropTypes.bool,
};

export default Mounting;
