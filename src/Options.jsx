import React from 'react';
import PropTypes from 'prop-types';

import './Options.less';

import T from './i18n/T';

const Options = ({ advanced, toggleAdvanced }) => (
  <fieldset className="Options">
    <legend><T>Options</T></legend>
    <input type="checkbox" id="showAdvanced" checked={advanced} onChange={toggleAdvanced} />
    <label htmlFor="showAdvanced"><T>Show less common lifecycles</T></label>
  </fieldset>
);

Options.propTypes = {
  advanced: PropTypes.bool,
  toggleAdvanced: PropTypes.func.isRequired,
};

export default Options;
