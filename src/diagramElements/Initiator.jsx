import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Initiator.less';

import DocLink from './DocLink';

export default function Initiator({ col, doc = true, name, row, secondary }) {
  const docname = doc ? name.toLowerCase().replace(/[()]/g, '') : undefined;

  return (
    <div
      className={mergeClassNames(
        'Initiator',
        doc && 'Initiator--hasLink',
        secondary && 'Initiator--secondary',
      )}
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
}

Initiator.propTypes = {
  col: PropTypes.number,
  doc: PropTypes.bool,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  secondary: PropTypes.bool,
};
