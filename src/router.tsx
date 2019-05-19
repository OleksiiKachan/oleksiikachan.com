import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Containers
import AboutContainer from './containers/AboutContainer';
import TimelineContainer from './containers/TimelineContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import ProjectDetailsContainer from './containers/ProjectDetailsContainer';
import ContactContainer from './containers/ContactContainer';

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
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/projects" component={ProjectsContainer} />
          <Route
            exact
            path="/projects/:projectId"
            component={ProjectDetailsContainer}
          />
          <Route exact path="/experience" component={TimelineContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
        </Switch>
      </MainLayout>
    </Switch>
  </BrowserRouter>
);
