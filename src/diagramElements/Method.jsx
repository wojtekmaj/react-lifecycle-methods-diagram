import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Method.less';

import DocLink from './DocLink';

export default function Method({
  col,
  colspan = 1,
  doc = true,
  endsInMiddle,
  main,
  name,
  row,
  secondary,
  type,
}) {
  const docname = doc ? `${name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')}` : undefined;

  return (
    <li
      className={mergeClassNames(
        'Method',
        doc && 'Method--hasLink',
        endsInMiddle && 'Method--endsInMiddle',
        main && 'Method--main',
        secondary && 'Method--secondary',
        type,
      )}
      style={{
        gridColumn: `${col + 1} / span ${colspan}`,
        gridRow: `${row * 3} / span 2`,
      }}
    >
      <DocLink docname={docname} name={name} />
    </li>
  );
}

Method.propTypes = {
  col: PropTypes.number,
  colspan: PropTypes.number,
  doc: PropTypes.bool,
  endsInMiddle: PropTypes.bool,
  main: PropTypes.bool,
  name: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  secondary: PropTypes.bool,
  type: PropTypes.oneOf(['render', 'pre-commit', 'commit']),
};
