import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Arrow.less';

export default class Arrow extends Component {
  static propTypes = {
    col: PropTypes.number,
    colspan: PropTypes.number,
    from: PropTypes.number.isRequired,
    solid: PropTypes.bool,
    to: PropTypes.number.isRequired,
    withAlt: PropTypes.bool,
  };

  static defaultProps = {
    colspan: 1,
  }

  render() {
    const {
      col, colspan, from, solid, to, withAlt,
    } = this.props;

    return (
      <div
        className={mergeClassNames('Arrow', solid && 'Arrow--solid', withAlt && 'Arrow--withAlt')}
        style={{
          gridColumn: `${col + 1} / span ${colspan}`,
          gridRow: `${((from * 3) + 2 + 3)} / ${((to * 3) + 2 + 1)}`,
        }}
      >
        {withAlt && <Arrow col={col} from={from} to={to} />}
      </div>
    );
  }
}
