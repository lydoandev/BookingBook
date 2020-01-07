import { all } from 'redux-saga/effects';
import { watchBooksSaga } from './bookRedux/saga'

export default function* rootSaga() {
  // yield all([
  //   watchUserSaga(),
  //   // watchToDoSaga()
  // ])
  yield all([
    ...watchBooksSaga
  ])
}