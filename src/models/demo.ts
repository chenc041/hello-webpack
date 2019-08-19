import { put, call } from 'redux-saga/effects';
import { queryCenter } from '../services/demo';
export interface PayloadProps {
  type?: string;
  payload?: {
    [key: string]: string | number;
  };
}

export default {
  namespace: 'demo',
  state: {
    age: 0,
  },
  effects: {
    *incrementAsyncDemo() {
      const result = yield call(queryCenter);
      yield put({ type: 'demo/incrementDemo', payload: result });
    },
  },
  reducers: {
    incrementDemo(state: any, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
    incrementTwoDemo(state: any, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
