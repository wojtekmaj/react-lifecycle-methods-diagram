import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Initiator from './Initiator';
import Method from './Method';
import Arrow from './Arrow';

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced name="Updating" col={2} colspan={3}>
    <Initiator name="New props" row={1} />
    <Arrow from={1} to={2} />
    <Initiator name={'set\u00adState()'} col={3} row={1} />
    <Arrow col={3} from={1} to={3} />
    <Initiator name={'force\u00adUpdate()'} col={4} row={1} />
    <Arrow col={4} from={1} to={4} />
    {/* getDerivedStateFromProps */}
    <Arrow from={2} to={3} />
    <Method
      name="shouldComponentUpdate"
      docname="shouldcomponentupdate"
      type="render"
      row={3}
      colspan={2}
    />
    <Arrow withAlt colspan={2} from={3} to={4} />
    {/* render */}
    <Arrow solid col={3} from={5} to={6} />
    {/* React updates DOM and refs */}
    <Arrow col={3} from={4} to={5} />
    <Method
      name="getSnapshotBeforeUpdate"
      docname="getsnapshotbeforeupdate"
      type="pre-commit"
      row={5}
      colspan={3}
    />
    <Arrow solid col={3} from={6} to={7} />
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
    <Arrow from={1} to={2} />
    <Initiator name={'set\u00adState()'} col={3} row={1} />
    <Arrow col={3} from={1} to={2} />
    <Initiator name={'force\u00adUpdate()'} col={4} row={1} />
    <Arrow col={4} from={1} to={2} />
    {/* render */}
    <Arrow solid col={3} from={2} to={3} />
    {/* React updates DOM and refs */}
    <Arrow solid col={3} from={3} to={4} />
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
