import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TProvider } from '@wojtekmaj/react-t';
import { defaultLocale, languageFiles } from './i18n/i18n';

import './index.less';

import Root from './Root';

createRoot(document.getElementById('react-root')).render(
  <StrictMode>
    <TProvider defaultLocale={defaultLocale} languageFiles={languageFiles}>
      <Root />
    </TProvider>
  </StrictMode>,
);
