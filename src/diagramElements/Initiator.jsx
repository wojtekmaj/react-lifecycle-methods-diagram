import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Initiator.less';

import { splitUpperCase } from '../utils';

export default class Initiator extends Component {
  static propTypes = {
    col: PropTypes.number,
    docname: PropTypes.string,
    name: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
  };

  render() {
    const {
      col, docname, name, row,
    } = this.props;

    const title = splitUpperCase(name);

    return (
      <div
        className="Initiator"
        style={{
          gridColumn: col + 1,
          gridRow: `${(row * 3) + 3} / span 2`,
        }}
      >
        <h4>
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
        </h4>
      </div>
    );
  }
}
