import { combineReducers } from 'redux';
import count from '../models/count';
import demo from '../models/demo';

function generatorReducer(models) {
  const reducer = {};
  for (const model of models) {
    reducer[model.namespace] = function(state = model.state, action) {
      for (let i = 0; i < Object.keys(model.reducers).length; i += 1) {
        if (`${model.namespace}/${Object.keys(model.reducers)[i]}` === action.type) {
          return model.reducers[Object.keys(model.reducers)[i]](state, action);
        } else {
          return state;
        }
      }
    };
  }
  return reducer;
}

export default combineReducers(generatorReducer([count, demo]));
