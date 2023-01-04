import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Arrow.module.css';

export default function Arrow({ col, colspan = 1, from, solid, to, withAlt }) {
  return (
    <div
      className={clsx(styles.wrapper, solid && styles.solid, withAlt && styles.withAlt)}
      style={{
        gridColumn: `${col + 1} / span ${colspan}`,
        gridRow: `${from * 3 + 2} / ${to * 3}`,
      }}
    >
      {withAlt && <Arrow col={col} from={from} to={to} />}
    </div>
  );
}

Arrow.propTypes = {
  col: PropTypes.number,
  colspan: PropTypes.number,
  from: PropTypes.number,
  solid: PropTypes.bool,
  to: PropTypes.number,
  withAlt: PropTypes.bool,
};
