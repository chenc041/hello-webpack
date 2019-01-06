import React from 'react';
import Hello from './component/Hello';
import { Switch, Route } from 'react-router-dom';
const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={Hello} />
  </Switch>
);

export default AppRouter;
