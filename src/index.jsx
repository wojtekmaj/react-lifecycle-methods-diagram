import { StrictMode } from 'react';
import { render } from 'react-dom';
import { TProvider } from '@wojtekmaj/react-t';
import { defaultLocale, languageFiles } from './i18n/i18n';

import './index.less';

import Root from './Root';

render(
  <StrictMode>
    <TProvider defaultLocale={defaultLocale} languageFiles={languageFiles}>
      <Root />
    </TProvider>
  </StrictMode>,
  document.getElementById('react-root'),
);
