import {all} from 'redux-saga/effects';
import {watchBooksSaga} from './bookRedux/saga';
import {watchCategorySaga} from './categoryRedux/saga';

export default function* rootSaga() {
  // yield all([
  //   watchUserSaga(),
  //   // watchToDoSaga()
  // ])
  yield all([...watchBooksSaga, ...watchCategorySaga]);
}
