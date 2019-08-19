import { all, takeEvery } from 'redux-saga/effects';
import count from '../models/count';
import demo from '../models/demo';

function* generatorTask(models) {
  for (const model of models) {
    for (let item of Object.keys(model.effects)) {
      yield takeEvery(`${model.namespace}/${item}`, model.effects[item]);
    }
  }
}

export function* watchAllTask() {
  yield generatorTask([count, demo]);
}

export default function* rootSaga() {
  yield all([watchAllTask()]);
}
