import React from 'react';
import PropTypes from 'prop-types';

import './Options.less';

const Options = ({ advanced, toggleAdvanced }) => (
  <fieldset className="Options">
    <legend>Options</legend>
    <input type="checkbox" id="showAdvanced" checked={advanced} onChange={toggleAdvanced} />
    <label htmlFor="showAdvanced">Show less common lifecycles</label>
  </fieldset>
);

Options.propTypes = {
  advanced: PropTypes.bool,
  toggleAdvanced: PropTypes.func.isRequired,
};

export default Options;
