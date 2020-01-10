import callAPI from '../../utils/callAPI';
import { put, takeLatest, call } from 'redux-saga/effects';

import * as types from './actions';

export function* fetchBooks() {
  try {
    var data = yield call(() => callAPI('api/books'));
    yield put({ type: types.FETCH_BOOKS_SUCCESSED, payload: data.data });
  } catch (error) {
  }
}

export function* fetchCmsHome() {
  try {
    var data = yield call(() => callAPI('api/cms/home'));

    yield put({ type: types.FETCH_CMS_HOME_SUCCESSED, payload: data.data.Data });
  } catch (error) {
    console.log('Error: ', error);
  }
}

// export function* addToCart(action) {
//   const { info, token } = action.payload;
//   try {
//     var data = yield call(() => callAPI('api/basket', 'POST', info, token));

//     yield put(types.addToCartSuccessed(data.data.Data));
//   } catch (error) {

//     yield put(types.addToCartFailed(error.response.data.Message));
//   }
// }

export const watchBooksSaga = [
  takeLatest('FETCH_BOOKS', fetchBooks),
  takeLatest('FETCH_CMS_HOME', fetchCmsHome),

];
