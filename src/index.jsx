import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import './index.less';

import ReactLifecycleMethods from './ReactLifecycleMethods';

render(
  <StrictMode>
    <ReactLifecycleMethods />
  </StrictMode>,
  document.getElementById('react-container'),
);
