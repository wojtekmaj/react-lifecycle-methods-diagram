import React, { Component } from 'react';

import './ReactLifecycleMethods.less';

import Arrow from './Arrow';
import Legend from './Legend';
import Section from './Section';
import Method from './Method';
import Initiator from './Initiator';

export default class ReactLifecycleMethods extends Component {
  render() {
    return (
      <div className="RLM">
        <Legend />

        <Section name="Mounting" col={1} />
        <Arrow col={1} from={0} to={1} />

        <Section name="Updating" col={2} colspan={3} />
        <Initiator name="New props" col={2} row={1} />
        <Arrow col={2} from={1} to={2} />
        <Initiator name="setState()" col={3} row={1} />
        <Arrow col={3} from={1} to={3} />
        <Initiator name="forceUpdate()" col={4} row={1} />
        <Arrow col={4} from={1} to={4} />

        <Section name="Unmounting" col={5} />
        <Arrow col={5} from={0} to={7} />

        <Method
          main
          name="constructor"
          docname="constructor"
          type="render"
          col={1}
          row={1}
        />
        <Arrow col={1} from={1} to={2} />
        <Method
          name={'get\u200dDerived\u200dState\u200dFrom\u200dProps'}
          docname="static-getderivedstatefromprops"
          type="render"
          col={1}
          row={2}
          colspan={2}
        />
        <Arrow col={1} from={2} to={4} />
        <Arrow col={2} from={2} to={3} />
        <Method
          name={'should\u200dComponent\u200dUpdate'}
          docname="shouldcomponentupdate"
          type="render"
          col={2}
          row={3}
          colspan={2}
        />
        <Arrow col={2} from={3} to={4} />
        <Arrow col={3} from={3} to={4} />
        <Method
          main
          name="render"
          docname="render"
          type="render"
          col={1}
          row={4}
          colspan={4}
        />
        <Arrow col={1} from={4} to={6} />
        <Arrow col={3} from={4} to={5} />
        <Method
          name={'get\u200dSnapshot\u200dBefore\u200dUpdate'}
          docname="getsnapshotbeforeupdate"
          type="pre-commit"
          col={2}
          row={5}
          colspan={3}
        />
        <Arrow solid col={3} from={5} to={6} />
        <Method
          name="React updates DOM and refs"
          type="pre-commit"
          col={1}
          row={6}
          colspan={4}
        />
        <Arrow solid col={1} from={6} to={7} />
        <Arrow solid col={3} from={6} to={7} />
        <Method
          main
          name={'component\u200dDid\u200dMount'}
          docname="componentdidmount"
          type="commit"
          col={1}
          row={7}
        />
        <Method
          main
          name={'component\u200dDid\u200dUpdate'}
          docname="componentdidupdate"
          type="commit"
          col={2}
          colspan={3}
          row={7}
        />
        <Method
          main
          name={'component\u200dWill\u200dUnmount'}
          docname="componentwillunmount"
          type="commit"
          col={5}
          row={7}
        />
      </div>
    );
  }
}
