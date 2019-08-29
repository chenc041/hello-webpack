import * as React from 'react';
import * as HotLoader from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from './component/Hello';

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={Hello} />
  </Router>
);

export default HotLoader.hot(module)(AppRouter);
