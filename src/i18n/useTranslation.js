import { useState, useEffect } from 'react';

import useLocale from './useLocale';
import t from './t';

export default function useTranslation(string, args = {}) {
  const locale = useLocale();
  const [translatedString, setTranslatedString] = useState(null);

  useEffect(() => {
    t(string, args, locale).then(setTranslatedString);
  }, [string, ...Object.values(args), locale]);

  return translatedString;
}
