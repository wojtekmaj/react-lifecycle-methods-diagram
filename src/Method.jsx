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

  render() {
    const {
      col, colspan, docname, invisible, main, name, row, type,
    } = this.props;

    const title = splitUpperCase(name);

    return (
      <li
        className={mergeClassNames('Method', invisible && 'Method--invisible', docname && 'Method--hasLink', main && 'Method--main', type)}
        style={{
          gridColumn: `${col + 1} / span ${colspan}`,
          gridRow: `${(row * 3) + 3} / span 2`,
        }}
      >
        {docname ?
          <a
            href={`https://reactjs.org/docs/react-component.html#${docname}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a> :
          <span>{title}</span>
        }
      </li>
    );
  }
}
