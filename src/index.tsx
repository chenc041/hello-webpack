import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

// @ts-ignore
const render = Component => ReactDOM.render(<Component />, document.getElementById('root'));

render(App);
// @ts-ignore
if (module.hot) module.hot.accept('./app', () => render(App));
