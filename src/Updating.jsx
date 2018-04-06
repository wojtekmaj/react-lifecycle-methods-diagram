import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Initiator from './Initiator';
import Method from './Method';
import Arrow from './Arrow';

const Updating = ({ advanced }) => (advanced ? (
  <Section advanced name="Updating" col={2} colspan={3}>
    <Initiator name="New props" row={1} />
    <Arrow />
    <Method
      invisible
      name="getDerivedStateFromProps"
      docname="static-getderivedstatefromprops"
      type="render"
      col={1}
      row={2}
      colspan={2}
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
      main
      invisible
      name="render"
      docname="render"
      type="render"
      col={1}
      row={4}
      colspan={4}
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

    <Initiator
      name="setState()"
      docname="setstate"
      col={3}
      row={1}
    />
    <Arrow col={3} />
    <Method
      invisible
      name="shouldComponentUpdate"
      docname="shouldcomponentupdate"
      type="render"
      col={2}
      row={3}
      colspan={2}
    />
    <Method
      main
      invisible
      name="render"
      docname="render"
      type="render"
      col={1}
      row={4}
      colspan={4}
    />
    <Method
      invisible
      name="getSnapshotBeforeUpdate"
      docname="getsnapshotbeforeupdate"
      type="pre-commit"
      col={2}
      row={5}
      colspan={3}
    />
    <Method
      invisible
      name="React updates DOM and refs"
      type="pre-commit"
      col={3}
      row={6}
    />
    <Method
      main
      invisible
      name="componentDidUpdate"
      docname="componentdidupdate"
      type="commit"
      col={2}
      colspan={3}
      row={7}
    />

    <Initiator
      name="forceUpdate()"
      docname="forceupdate"
      col={4}
      row={1}
    />
    <Arrow col={4} />
    <Method
      main
      invisible
      name="render"
      docname="render"
      type="render"
      col={1}
      row={4}
      colspan={4}
    />
    <Method
      invisible
      name="getSnapshotBeforeUpdate"
      docname="getsnapshotbeforeupdate"
      type="pre-commit"
      col={2}
      row={5}
      colspan={3}
    />
    <Method
      invisible
      name="React updates DOM and refs"
      type="pre-commit"
      col={4}
      row={6}
    />
    <Method
      main
      invisible
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
    <Arrow />
    <Method
      main
      invisible
      name="render"
      docname="render"
      type="render"
      col={1}
      row={2}
      colspan={4}
    />
    <Arrow col={3} />
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

    <Initiator
      name="setState()"
      docname="setstate"
      col={3}
      row={1}
    />
    <Arrow col={3} />
    <Method
      main
      invisible
      name="render"
      docname="render"
      type="render"
      col={1}
      row={2}
      colspan={4}
    />
    <Method
      invisible
      name="React updates DOM and refs"
      type="pre-commit"
      col={3}
      row={3}
    />
    <Method
      main
      invisible
      name="componentDidUpdate"
      docname="componentdidupdate"
      type="commit"
      col={2}
      colspan={3}
      row={4}
    />

    <Initiator
      name="forceUpdate()"
      docname="forceupdate"
      col={4}
      row={1}
    />
    <Arrow col={4} />
    <Method
      main
      invisible
      name="render"
      docname="render"
      type="render"
      col={1}
      row={2}
      colspan={4}
    />
    <Method
      invisible
      name="React updates DOM and refs"
      type="pre-commit"
      col={4}
      row={3}
    />
    <Method
      main
      invisible
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
