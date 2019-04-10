import React from 'react';
import { Route, Switch } from 'react-router-dom';
import manifestComponents from './manifest';

const TestRoutes = ({ match }: any) => (
  <Switch>
    {Object.keys(manifestComponents).map((component: any, i: any) => {
      const componentData = (manifestComponents as any)[component];
      let Component: any;
      if (i === 0) {
        Component =
          componentData.components.default || componentData.component.default;
      } else {
        Component = componentData.default || componentData.components.default;
      }
      const { props } = componentData;
      return (
        <Route
          path={`${match.url}/${component}`}
          key={component}
          render={() => <Component {...props} />}
        />
      );
    })}
  </Switch>
);

export default TestRoutes;
