import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

// Layouts
import { MainLayout } from './layouts';

// Containers
import {
  AboutContainer,
  ContactContainer,
  ProjectDetailsContainer,
  ProjectsContainer,
  TimelineContainer,
} from './pages';

// General styles
import './assets/style/_fonts.scss';
import './assets/style/index.scss';

export default (
  <BrowserRouter>
    <Switch>
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
