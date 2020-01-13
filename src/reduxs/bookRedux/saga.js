import callAPI from '../../utils/callAPI';
import {put, takeEvery, call} from 'redux-saga/effects';
import * as types from './actions';

// export function* fetchBooks() {
//   try {
//     let books = yield callAPI('api/books').then(response => {
//       return response.data;
//     });
//     console.log(books);
//     yield put({type: types.FETCH_BOOKS_SUCCESSED, payload: books});
//   } catch (error) {
//     console.log('Error: ', error);
//   }
// }

export function* fetchBooks() {
  try {
    var books = yield call(() => callAPI('api/books'));
    yield put({type: types.FETCH_BOOKS_SUCCESSED, payload: books.data.Books});
  } catch (error) {
    console.log('Error: ', error);
  }
}

export function* fetchCmsHome() {
  try {
    var data = yield call(() => callAPI('api/cms/home'));
    console.log('data cms: ', data);
    yield put({type: types.FETCH_CMS_HOME_SUCCESSED, payload: data.data.Data});
  } catch (error) {
    console.log('Error: ', error);
  }
}

export const watchBooksSaga = [
  takeEvery('FETCH_BOOKS', fetchBooks),
  takeEvery('FETCH_CMS_HOME', fetchCmsHome),
];
