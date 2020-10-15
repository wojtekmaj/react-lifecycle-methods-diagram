import PropTypes from 'prop-types';
import { useTranslation } from '@wojtekmaj/react-t';

import { splitUpperCase } from '../shared/utils';

export default function DocLink({ docname, name }) {
  const translatedName = useTranslation(name);
  const translatedTitle = useTranslation('Read docs for {name} (opens in a new tab)', { name });
  const translatedHref = useTranslation('https://reactjs.org/docs/react-component.html#{docname}', { docname });

  const children = splitUpperCase(translatedName);

  const isEnglish = name === translatedName;

  return (
    docname
      ? (
        <a
          href={translatedHref}
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
