import { useContext, useState, useEffect } from 'react';

import { Context } from './LangObserver';
import t from './t';

export default function useTranslation(string, args = {}) {
  const locale = useContext(Context);
  const [translatedString, setTranslatedString] = useState(null);

  useEffect(() => {
    t(string, args, locale).then(setTranslatedString);
  }, [string, ...Object.values(args), locale]);

  return translatedString;
}
