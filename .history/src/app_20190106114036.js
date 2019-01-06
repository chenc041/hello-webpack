import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/Hello';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
  </Router>
);

export default AppRouter;

function renderComponent(component) {}
