import PropTypes from 'prop-types';
import { useTranslation } from '@wojtekmaj/react-t';

import { splitUpperCase } from '../shared/utils';

type DocLinkLinkProps = {
  docname: string;
  name: string;
};

function DocLinkLink({ docname, name }: DocLinkLinkProps) {
  const translatedName = useTranslation(name);
  const translatedTitle = useTranslation('Read docs for {name} (opens in a new tab)', { name });
  const translatedHref = useTranslation('//reactjs.org/docs/react-component.html#{docname}', {
    docname,
  });

  const isEnglish = name === translatedName;

  const children = splitUpperCase(isEnglish ? translatedName : name);

  return (
    <a
      href={translatedHref}
      target="_blank"
      rel="noopener noreferrer"
      title={translatedTitle}
      dir={isEnglish ? 'ltr' : undefined}
    >
      {children}
    </a>
  );
}

type DocLinkSpanProps = {
  name: string;
};

function DocLinkSpan({ name }: DocLinkSpanProps) {
  const translatedName = useTranslation(name);

  const isEnglish = name === translatedName;

  const children = splitUpperCase(isEnglish ? translatedName : name);

  return <span dir={isEnglish ? 'ltr' : undefined}>{children}</span>;
}

type DocLinkProps = {
  docname?: string;
  name: string;
};

export default function DocLink({ docname, name }: DocLinkProps) {
  return docname ? <DocLinkLink docname={docname} name={name} /> : <DocLinkSpan name={name} />;
}

DocLink.propTypes = {
  docname: PropTypes.string,
  name: PropTypes.string.isRequired,
};
