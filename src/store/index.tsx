import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

export default function configureStore() {
  return {
    ...createStore(reducer, applyMiddleware(...middlewares)),
    runSaga: sagaMiddleware.run,
  };
}
