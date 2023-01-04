import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Method.module.css';

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
  const docname = doc
    ? `${name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`
    : undefined;

  return (
    <li
      className={clsx(
        styles.wrapper,
        endsInMiddle && styles.endsInMiddle,
        main && styles.main,
        secondary && styles.secondary,
        // eslint-disable-next-line sort-keys
        type && styles[{ 'render': 'render', 'pre-commit': 'preCommit', 'commit': 'commit' }[type]],
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
