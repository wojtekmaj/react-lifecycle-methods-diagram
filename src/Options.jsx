import React from 'react';
import PropTypes from 'prop-types';

import './Options.less';

import T from './i18n/T';
import { supportedReactVersions, isReactVersion } from './propTypes';

const Options = ({
  advanced,
  reactVersion,
  toggleAdvanced,
  toggleReactVersion,
}) => (
  <fieldset className="Options">
    <legend>
      <T>
        Options
      </T>
    </legend>
    <div>
      <input type="checkbox" id="showAdvanced" checked={advanced} onChange={toggleAdvanced} />
      <label htmlFor="showAdvanced">
        <T>
          Show less common lifecycles
        </T>
      </label>
    </div>
    <div>
      <label htmlFor="reactVersion">
        <T>
          React version
        </T>
      </label>
      <select onChange={toggleReactVersion} value={reactVersion}>
        {supportedReactVersions.map(supportedReactVersion => (
          <option key={supportedReactVersion}>
            {supportedReactVersion}
          </option>
        ))}
      </select>
    </div>
  </fieldset>
);

Options.propTypes = {
  advanced: PropTypes.bool,
  reactVersion: isReactVersion.isRequired,
  toggleAdvanced: PropTypes.func.isRequired,
  toggleReactVersion: PropTypes.func.isRequired,
};

export default Options;
