import React from 'react';
import PropTypes from 'prop-types';

import { splitUpperCase } from '../utils';

const DocLink = ({ name, docname }) => {
  const title = splitUpperCase(name);

  return (
    docname ?
      <a
        href={`https://reactjs.org/docs/react-component.html#${docname}`}
        target="_blank"
        rel="noopener noreferrer"
        title={`Read docs for ${name} (opens in a new tab)`}
      >
        {title}
      </a> :
      <span>{title}</span>
  );
};

DocLink.propTypes = {
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default DocLink;
