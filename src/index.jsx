import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import './index.less';

import Root from './Root';
import LayoutWatcher from './LayoutWatcher';

render(
  <StrictMode>
    <LayoutWatcher>
      <Root />
    </LayoutWatcher>
  </StrictMode>,
  document.getElementById('react-container'),
);
