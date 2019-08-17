import { all, takeEvery } from 'redux-saga/effects';
import count from '../models/count';
const { effects, namespace } = count;
export interface PayloadProps {
  type: string;
  payload: {
    [key: string]: string | number;
  };
}

export function* watchAllTask() {
  for (let item of Object.keys(effects)) {
    yield takeEvery(`${namespace}/${item}`, effects[item]);
  }
}

export default function* rootSaga() {
  yield all([watchAllTask()]);
}
