import { combineReducers } from 'redux';
import count from '../models/count';

const { reducers, namespace, state: initState } = count;

function countReducer(state = initState, action) {
  for (let i = 0; i < Object.keys(reducers).length; i += 1) {
    if (`${namespace}/${Object.keys(reducers)[i]}` === action.type) {
      return reducers[Object.keys(reducers)[i]](state, action);
    } else {
      return state;
    }
  }
}

export default combineReducers({
  [namespace]: countReducer,
});
