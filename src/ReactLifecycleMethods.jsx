import React, { Component } from 'react';

import './ReactLifecycleMethods.less';

import Arrow from './Arrow';
import Legend from './Legend';
import Section from './Section';
import Method from './Method';
import Initiator from './Initiator';

const isUppercase = letter => letter.toUpperCase() === letter;

// Splits camelCase with ZWJ characters to help with line breaking
const splitUpperCase = str => str
  .split('')
  .reduce((res, letter) => res + (isUppercase(letter) ? `\u00ad${letter}` : letter), '');

export default class ReactLifecycleMethods extends Component {
  render() {
    return (
      <div className="RLM">
        <Legend />

        {/* Sections and initiating arrows */}
        <Section name="Mounting" col={1} />
        <Arrow col={1} from={0} to={1} />

        <Section name="Updating" col={2} colspan={3} />
        <Initiator name="New props" col={2} row={1} />
        <Arrow col={2} from={1} to={2} />
        <Initiator name="setState()" col={3} row={1} />
        <Arrow col={3} from={1} to={3} />
        <Initiator name="forceUpdate()" col={4} row={1} />
        <Arrow col={4} from={1} to={4} />

        <Section name={'Un\u00admounting'} col={5} />
        <Arrow col={5} from={0} to={7} />

        {/* Methods and other arrows */}
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
          name={splitUpperCase('getDerivedStateFromProps')}
          docname="static-getderivedstatefromprops"
          type="render"
          col={1}
          row={2}
          colspan={2}
        />
        <Arrow col={1} from={2} to={4} />
        <Arrow col={2} from={2} to={3} />
        <Method
          name={splitUpperCase('shouldComponentUpdate')}
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
          name={splitUpperCase('getSnapshotBeforeUpdate')}
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
          name={splitUpperCase('componentDidMount')}
          docname="componentdidmount"
          type="commit"
          col={1}
          row={7}
        />
        <Method
          main
          name={splitUpperCase('componentDidUpdate')}
          docname="componentdidupdate"
          type="commit"
          col={2}
          colspan={3}
          row={7}
        />
        <Method
          main
          name={splitUpperCase('componentWillUnmount')}
          docname="componentwillunmount"
          type="commit"
          col={5}
          row={7}
        />
      </div>
    );
  }
}
