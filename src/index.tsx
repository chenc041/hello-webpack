import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

// @ts-ignore
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );

render(App);
// @ts-ignore
if (module.hot) module.hot.accept('./app', () => render(App));
