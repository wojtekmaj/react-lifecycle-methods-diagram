import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { TProvider } from '@wojtekmaj/react-t';

import { defaultLocale, languageFiles } from './i18n/i18n.js';

import './global.css';

import Root from './Root.js';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Could not find root element');
}

createRoot(root).render(
  <StrictMode>
    <TProvider defaultLocale={defaultLocale} languageFiles={languageFiles} suspend>
      <Suspense fallback={null}>
        <Root />
      </Suspense>
    </TProvider>
  </StrictMode>,
);
