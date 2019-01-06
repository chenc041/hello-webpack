import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/Hello';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Hello} />
  </Router>
);

export default AppRouter;

function renderComponent(component) {}
