import { useContext } from 'react';

import { Context } from './LangObserver';

export default function useLocale() {
  const locale = useContext(Context);

  return locale;
}
