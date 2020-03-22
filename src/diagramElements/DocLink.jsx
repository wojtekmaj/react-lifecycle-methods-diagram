import React from 'react';
import PropTypes from 'prop-types';

import { splitUpperCase } from '../shared/utils';

import { useTranslation } from '../i18n';

export default function DocLink({ docname, name }) {
  const translatedName = useTranslation(name);
  const translatedTitle = useTranslation('Read docs for {name} (opens in a new tab)', { name });

  const children = splitUpperCase(translatedName);

  const isEnglish = name === translatedName;

  return (
    docname
      ? (
        <a
          href={`https://reactjs.org/docs/react-component.html#${docname}`}
          target="_blank"
          rel="noopener noreferrer"
          title={translatedTitle}
          dir={isEnglish ? 'ltr' : undefined}
        >
          {children}
        </a>
      )
      : (
        <span dir={isEnglish ? 'ltr' : undefined}>
          {children}
        </span>
      )
  );
}

DocLink.propTypes = {
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
};
