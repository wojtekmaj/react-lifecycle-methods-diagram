import T from '@wojtekmaj/react-t';

import { wrapper } from './Phase.module.css';

type PhaseProps = {
  children: string;
  name: string;
  row: number;
  rowspan?: number;
};

export default function Phase({ children, name, row, rowspan }: PhaseProps) {
  return (
    <div
      className={wrapper}
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
