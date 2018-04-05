import React, { Component } from 'react';

import './ReactLifecycleMethods.less';

import Legend from './Legend';

import Mounting from './Mounting';
import Updating from './Updating';
import Unmounting from './Unmounting';

export default class ReactLifecycleMethods extends Component {
  render() {
    return (
      <div className="ReactLifecycleMethods">
        <Legend />
        <Mounting />
        <Updating />
        <Unmounting />
      </div>
    );
  }
}
