import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import './index.less';

import Root from './Root';
import LangObserver from './i18n/LangObserver';

render(
  <StrictMode>
    <LangObserver>
      <Root />
    </LangObserver>
  </StrictMode>,
  document.getElementById('react-container'),
);
