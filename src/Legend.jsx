import PropTypes from 'prop-types';
import T from '@wojtekmaj/react-t';

import Phase from './legendElements/Phase';

export default function Legend({ advanced }) {
  return (
    <>
      <h2 className="hidden">
        <T>Phases</T>
      </h2>
      <Phase key="render" name="Render" row={1} rowspan={advanced ? 4 : 2}>
        Pure and has no side effects. May be paused, aborted or restarted by React.
      </Phase>
      {advanced && (
        <Phase key="pre-commit" name="Pre-commit" row={5} rowspan={1}>
          Can read the DOM.
        </Phase>
      )}
      <Phase key="commit" last name="Commit" row={advanced ? 6 : 3} rowspan={2}>
        Can work with DOM, run side effects, schedule updates.
      </Phase>
    </>
  );
}

Legend.propTypes = {
  advanced: PropTypes.bool,
};
