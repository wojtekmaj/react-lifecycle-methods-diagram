import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Method.less';

import { splitUpperCase } from './utils';

export default class Method extends Component {
  static propTypes = {
    col: PropTypes.number,
    colspan: PropTypes.number,
    docname: PropTypes.string,
    invisible: PropTypes.bool,
    main: PropTypes.bool,
    name: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['render', 'pre-commit', 'commit']),
  };

  static defaultProps = {
    colspan: 1,
  }

  onClick = () => {
    const { docname } = this.props;
    window.open(`https://reactjs.org/docs/react-component.html#${docname}`, '_blank');
  }

  render() {
    const {
      col, colspan, docname, invisible, main, name, row, type,
    } = this.props;

    if (invisible) {
      return null;
    }

    const title = (<h3>{splitUpperCase(name)}</h3>);

    return (
      <div
        className={mergeClassNames('Method', main && 'Method--main', type)}
        style={{
          gridColumn: `${col + 1} / span ${colspan}`,
          gridRow: `${(row * 3) + 3} / span 2`,
        }}
      >
        {docname ?
          <button onClick={this.onClick}>
            {title}
          </button> :
          title
        }
      </div>
    );
  }
}
