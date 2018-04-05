import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import ReactLifecycleMethods from './ReactLifecycleMethods';

render(
  <StrictMode>
    <ReactLifecycleMethods />
  </StrictMode>,
  document.getElementById('react-container'),
);
