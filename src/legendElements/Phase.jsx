import PropTypes from 'prop-types';
import T from '@wojtekmaj/react-t';

import './Phase.less';

export default function Phase({ children, name, row, rowspan }) {
  return (
    <div
      className="Phase"
      style={{
        gridColumn: 1,
        gridRow: `${row * 3} / ${rowspan ? `span ${rowspan * 3}` : 'auto'}`,
      }}
    >
      <h3>
        <T name={name}>{'“{name} phase”'}</T>
      </h3>
      <p>
        <T>{children}</T>
      </p>
    </div>
  );
}

Phase.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  rowspan: PropTypes.number,
};
