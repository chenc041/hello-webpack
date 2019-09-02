import { combineReducers } from 'redux';
import count from '../models/count';
import demo from '../models/demo';

function generatorReducer(models) {
  const reducer = {};
  const childReducer = {};
  for (const model of models) {
    for (let i = 0; i < Object.keys(model.reducers).length; i += 1) {
      childReducer[`${model.namespace}/${Object.keys(model.reducers)[i]}`] = model.reducers[Object.keys(model.reducers)[i]];
    }
  }
  for (const model of models) {
    const initState = model.state;
    reducer[model.namespace] = function(state = initState, action) {
      if (childReducer[action.type]) {
        return childReducer[action.type](state, action);
      } else {
        return state;
      }
    };
  }
  return reducer;
}

export default combineReducers(generatorReducer([count, demo]));
