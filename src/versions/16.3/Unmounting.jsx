import PropTypes from 'prop-types';

import Section from '../../diagramElements/Section';
import Method from '../../diagramElements/Method';
import Arrow from '../../diagramElements/Arrow';

export default function Unmounting({ advanced }) {
  return (
    <Section advanced={advanced} name="Unmounting" col={5}>
      <Arrow />
      <Method
        main
        name="componentWillUnmount"
        key="componentwillunmount"
        type="commit"
        row={advanced ? 7 : 4}
      />
    </Section>
  );
}

Unmounting.propTypes = {
  advanced: PropTypes.bool,
};
