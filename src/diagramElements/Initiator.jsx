import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Initiator.less';

import DocLink from './DocLink';

const Initiator = ({
  col, docname, name, row, secondary,
}) => (
  <div
    className={mergeClassNames('Initiator', docname && 'Initiator--hasLink', secondary && 'Initiator--secondary')}
    data-column={col + 1}
    style={{
      gridColumn: col + 1,
      gridRow: `${row * 3} / span 2`,
    }}
  >
    <h4>
      <DocLink docname={docname} name={name} />
    </h4>
  </div>
);

Initiator.propTypes = {
  col: PropTypes.number,
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  secondary: PropTypes.bool,
};

export default Initiator;
