import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Method.less';

export default class Method extends Component {
  static propTypes = {
    col: PropTypes.number.isRequired,
    colspan: PropTypes.number,
    docname: PropTypes.string,
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
      col, colspan, docname, main, name, row, type,
    } = this.props;

    return (
      <div
        className={mergeClassNames('Method', main && 'Method--main', type)}
        style={{
          gridColumn: `${col * 3} / span ${colspan * 3}`,
          gridRow: `${(row * 4) + 2} / span 3`,
        }}
      >
        {docname ?
          <button onClick={this.onClick}>
            <h3>{name}</h3>
          </button> :
          <h3>{name}</h3>
        }
      </div>
    );
  }
}
