import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Phase.less';

import { Consumer } from '../LayoutWatcher';

export class PhaseInternal extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    last: PropTypes.bool,
    layout: PropTypes.oneOf(['desktop', 'mobile']),
    name: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    rowspan: PropTypes.number,
  };

  render() {
    const {
      children, last, layout, name, row, rowspan,
    } = this.props;

    return (
      <div
        className={mergeClassNames(
          'Phase',
          last && 'Phase--last',
          `Phase--${layout}`,
        )}
        style={{
          gridColumn: 1,
          gridRow: `${row * 3} / ${rowspan ? `span ${rowspan * 3}` : 'auto'}`,
        }}
      >
        <h3>“{name} phase”</h3>
        <p>{children}</p>
      </div>
    );
  }
}

export default props => (
  <Consumer>
    {layout => <PhaseInternal layout={layout} {...props} />}
  </Consumer>
);
