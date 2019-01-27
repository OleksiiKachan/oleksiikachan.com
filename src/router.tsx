import React from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import App from './containers/App';

export default (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);
