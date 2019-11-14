import React from 'react';
import { render } from 'react-dom';

import './index.less';

import Root from './Root';
import LangObserver from './i18n/LangObserver';

render(
  <LangObserver>
    <Root />
  </LangObserver>,
  document.getElementById('react-container'),
);
