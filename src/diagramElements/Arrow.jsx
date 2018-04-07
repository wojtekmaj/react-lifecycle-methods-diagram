import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Arrow.less';

export default class Arrow extends Component {
  static propTypes = {
    col: PropTypes.number,
    colspan: PropTypes.number,
    from: PropTypes.number,
    solid: PropTypes.bool,
    to: PropTypes.number,
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
          gridRow: `${(from * 3) + 2} / ${to * 3}`,
        }}
      >
        {withAlt && <Arrow col={col} from={from} to={to} />}
      </div>
    );
  }
}
