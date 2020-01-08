import callAPI from '../../utils/callAPI';
import {put, takeLatest, call} from 'redux-saga/effects';

import * as types from './actions';

export function* fetchBooks() {
  try {
    var data = yield call(() => callMockAPI('api/books'));
    yield put({type: types.FETCH_BOOKS_SUCCESSED, payload: data.data});
  } catch (error) {
    console.log('Error: ', error);
  }
}

export const watchBooksSaga = [takeLatest('FETCH_BOOKS', fetchBooks)];
