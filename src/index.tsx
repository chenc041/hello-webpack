import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './app';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);
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
