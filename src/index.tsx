import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TProvider } from '@wojtekmaj/react-t';
import { defaultLocale, languageFiles } from './i18n/i18n.js';

import './global.css';

import Root from './Root.js';

createRoot(document.getElementById('react-root') as HTMLDivElement).render(
  <StrictMode>
    <TProvider defaultLocale={defaultLocale} languageFiles={languageFiles}>
      <Root />
    </TProvider>
  </StrictMode>,
);
