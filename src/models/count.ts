import { put, call } from 'redux-saga/effects';
import { queryCenter } from '../services/demo';
export interface PayloadProps {
  type?: string;
  payload?: {
    [key: string]: string | number;
  };
}

export default {
  namespace: 'count',
  state: {
    age: 0,
  },
  effects: {
    *incrementAsync() {
      const result = yield call(queryCenter);
      yield put({ type: 'count/increment', payload: result });
    },
  },
  reducers: {
    increment(state: any, action: any) {
      console.log(action, 'action---- increment');
      console.log('--', {
        ...state,
        ...action.payload,
      });
      return {
        ...state,
        ...action.payload,
      };
    },
    incrementTwo(state: any, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
