import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Subsection from '../../diagramElements/Subsection';
// import Initiator from '../../diagramElements/Initiator';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

const advancedgroup = (
  <>
    <Arrow col={3} />
    <Method
      main
      name="Render"
      docname="render"
      type="render"
      col={1}
      row={2}
      colspan={4}
    />
    <Arrow col={3} />
    <Method
      secondary
      name="React updates DOM"
      isHooks
      type="layout"
      col={1}
      row={3}
      colspan={4}
    />
    <Arrow solid col={3} />
    <Method
      name="Cleanup LayoutEffects"
      docname="cleaning-up-an-effect"
      isHooks
      type="layout"
      col={2}
      row={4}
      colspan={4}
    />
    <Arrow solid col={3} />
    <Method
      name="Run LayoutEffects"
      docname="uselayouteffect"
      isHooks
      type="layout"
      col={1}
      row={5}
      colspan={4}
    />
    <Arrow solid col={3} />
    <Method
      secondary
      name="Browser paints screen"
      isHooks
      type="layout"
      col={1}
      row={6}
      colspan={4}
    />
    <Arrow solid col={3} />
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
    <Arrow solid col={3} />
    <Method
      main
      name="Run Effects"
      isHooks
      docname="useeffect"
      type="commit"
      col={1}
      row={8}
      colspan={4}
    />
  </>
).props.children;

const common = (
  <>
    <Arrow col={3} />
    <Method
      main
      name="render"
      docname="render"
      type="render"
      col={1}
      row={1}
      colspan={4}
    />
    <Arrow col={3} />
    <Method
      secondary
      name="React updates DOM, browser paints screen"
      isHooks
      type="pre-commit"
      col={1}
      row={2}
      colspan={4}
    />
    <Arrow solid col={3} />
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
    <Arrow solid col={3} />
    <Method
      main
      name="Run Effects"
      isHooks
      docname="useeffect"
      type="commit"
      col={1}
      row={4}
      colspan={4}
    />
  </>
).props.children;

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced isHooks name="Updating" col={2} colspan={3}>
    <Subsection col={2}>{advancedgroup}</Subsection>
    <Subsection hooks col={3}>
      {advancedgroup}
    </Subsection>
    <Subsection col={4}>{advancedgroup}</Subsection>
  </Section>
) : (
  <Section isHooks name="Updating" col={2} colspan={3}>
    <Subsection col={2}>{common}</Subsection>
    <Subsection col={3}>{common}</Subsection>
    <Subsection col={4}>{common}</Subsection>
  </Section>
));

Updating.propTypes = {
  advanced: PropTypes.bool,
};

export default Updating;
