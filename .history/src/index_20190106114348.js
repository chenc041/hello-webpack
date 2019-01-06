import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(App);
