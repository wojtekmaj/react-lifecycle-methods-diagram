import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Initiator from './Initiator';
import Method from './Method';
import Arrow from './Arrow';

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced name="Updating" col={2} colspan={3}>
    <Initiator name="New props" row={1} />
    <Arrow to={2} />
    <Initiator name={'set\u00adState()'} col={3} row={1} />
    <Arrow col={3} to={3} />
    <Initiator name={'force\u00adUpdate()'} col={4} row={1} />
    <Arrow col={4} to={4} />
    <Method
      invisible
      name="getDerivedStateFromProps"
      docname="static-getderivedstatefromprops"
      type="render"
      row={2}
    />
    <Arrow />
    <Method
      name="shouldComponentUpdate"
      docname="shouldcomponentupdate"
      type="render"
      row={3}
      colspan={2}
    />
    <Arrow withAlt colspan={2} />
    <Method
      invisible
      name="render"
      docname="render"
      type="render"
      row={4}
    />
    <Arrow col={3} />
    <Method
      name="getSnapshotBeforeUpdate"
      docname="getsnapshotbeforeupdate"
      type="pre-commit"
      row={5}
      colspan={3}
    />
    <Arrow solid col={3} />
    <Method
      invisible
      name="React updates DOM and refs"
      type="pre-commit"
      row={6}
    />
    <Arrow solid col={3} />
    <Method
      main
      name="componentDidUpdate"
      docname="componentdidupdate"
      type="commit"
      col={2}
      colspan={3}
      row={7}
    />
  </Section>
) : (
  <Section name="Updating" col={2} colspan={3}>
    <Initiator name="New props" row={1} />
    <Arrow to={2} />
    <Initiator name={'set\u00adState()'} col={3} row={1} />
    <Arrow col={3} to={2} />
    <Initiator name={'force\u00adUpdate()'} col={4} row={1} />
    <Arrow col={4} to={2} />
    <Method
      invisible
      name="render"
      docname="render"
      type="render"
      row={2}
    />
    <Arrow solid col={3} />
    <Method
      invisible
      name="React updates DOM and refs"
      type="pre-commit"
      row={3}
    />
    <Arrow solid col={3} />
    <Method
      main
      name="componentDidUpdate"
      docname="componentdidupdate"
      type="commit"
      col={2}
      colspan={3}
      row={4}
    />
  </Section>
));

Updating.propTypes = {
  advanced: PropTypes.bool,
};

export default Updating;
