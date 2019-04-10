import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Containers
import App from './containers/App';

// General styles
import './style/general.scss';

// const isDevelopment = process.env.NODE_ENV === 'development';

// let TestRoutes;
// if (isDevelopment) {
//   TestRoutes = require('./test/routes').default;
// }

export default (
  <BrowserRouter>
    <Switch>
      <MainLayout>
        <Switch>
          {/* {isDevelopment ? <Route path="/test" component={TestRoutes} /> : null} */}
          <Route exact path="/" component={App} />
        </Switch>
      </MainLayout>
    </Switch>
  </BrowserRouter>
);
