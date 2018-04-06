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
    main: PropTypes.bool,
    name: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    secondary: PropTypes.bool,
    type: PropTypes.oneOf(['render', 'pre-commit', 'commit']),
  };

  static defaultProps = {
    colspan: 1,
  }

  render() {
    const {
      col, colspan, docname, main, name, row, secondary, type,
    } = this.props;

    const title = splitUpperCase(name);

    return (
      <li
        className={mergeClassNames('Method', docname && 'Method--hasLink', main && 'Method--main', secondary && 'Method--secondary', type)}
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
            title={`Read docs for ${name} (opens in a new tab)`}
          >
            {title}
          </a> :
          <span>{title}</span>
        }
      </li>
    );
  }
}
