import PropTypes from 'prop-types';
import clsx from 'clsx';

import { wrapper, solid as solidClassName, withAlt as withAltClassName } from './Arrow.module.css';

export default function Arrow({ col, colspan = 1, from, solid, to, withAlt }) {
  return (
    <div
      className={clsx(wrapper, solid && solidClassName, withAlt && withAltClassName)}
      style={{
        gridColumn: `${col + 1} / span ${colspan}`,
        gridRow: `${from * 3 + 2} / ${to * 3}`,
      }}
    >
      {withAlt ? <Arrow col={col} from={from} to={to} /> : null}
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
