import clsx from 'clsx';

import { wrapper, secondary as secondaryClassName } from './Initiator.module.css';

import DocLink from './DocLink.js';

type InitiatorProps = {
  col?: number;
  doc?: boolean;
  name: string;
  row: number;
  secondary?: boolean;
};

export default function Initiator({ col = 1, doc = true, name, row, secondary }: InitiatorProps) {
  const docname = doc ? name.toLowerCase().replace(/[()]/g, '') : undefined;

  return (
    <div
      className={clsx(wrapper, secondary && secondaryClassName)}
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
