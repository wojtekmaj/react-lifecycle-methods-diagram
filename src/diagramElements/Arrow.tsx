import clsx from 'clsx';

import { solid as solidClassName, withAlt as withAltClassName, wrapper } from './Arrow.module.css';

type ArrowProps = {
  col?: number;
  colspan?: number;
  from?: number;
  solid?: boolean;
  to?: number;
  withAlt?: boolean;
};

export default function Arrow({ col, colspan = 1, from, solid, to, withAlt }: ArrowProps) {
  if (typeof col === 'undefined' || typeof from === 'undefined' || typeof to === 'undefined') {
    return null;
  }

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
