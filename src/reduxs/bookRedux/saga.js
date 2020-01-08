import callAPI from '../../utils/callAPI'
import { put, takeLatest, call } from 'redux-saga/effects'

import * as types from './actions'

export function* fetchBooks() {
  try {
    var data = yield call(() => callAPI('api/books'));
    yield put({ type: types.FETCH_BOOKS_SUCCESSED, payload: data.data })
  } catch (error) {
    console.log("Error: ", error);
  }
}

export function* fetchCmsHome() {

  try {
    var data = yield call(() => callAPI(`api/cms/home`));
    console.log("Data nè: ", data);

    yield put({ type: types.FETCH_CMS_HOME_SUCCESSED, payload: data.data.Data })
  } catch (error) {
    console.log("Error: ", error);
  }
}

export const watchBooksSaga = [
  takeLatest('FETCH_BOOKS', fetchBooks),
  takeLatest('FETCH_CMS_HOME', fetchCmsHome)
]