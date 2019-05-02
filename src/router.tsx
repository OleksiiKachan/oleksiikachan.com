import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Containers
import TimelineContainer from './containers/TimelineContainer';
import ProjectsContainer from './containers/ProjectsContainer';

// General styles
import './assets/style/_fonts.scss';
import './assets/style/index.scss';

const isDevelopment = process.env.NODE_ENV === 'development';

let TestRoutes;
if (isDevelopment) {
  TestRoutes = require('./test/routes').default;
}

export default (
  <BrowserRouter>
    <Switch>
      {isDevelopment ? <Route path="/test" component={TestRoutes} /> : null}
      <MainLayout>
        <Switch>
          <Route exact path="/projects" component={ProjectsContainer} />
          <Route exact path="/experience" component={TimelineContainer} />
        </Switch>
      </MainLayout>
    </Switch>
  </BrowserRouter>
);
