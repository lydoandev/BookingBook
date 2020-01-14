import callAPI from '../../utils/callAPI'
import { put, takeLatest, call } from 'redux-saga/effects'
import * as ProfileActions from './actions'

import {
  REGISTER,
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESSED,
  REGISTER_FAILED,
  REGISTER_SUCCESSED,
  LOGIN_FAILED,
  LOGOUT_SUCCESSED,
  GET_CART,
  GET_CART_SUCCESSED,
  DETELE_ITEM_CART,
  DETELE_ITEM_CART_SUCCESSED
} from './actions';

export function* getProfile(action) {
  try {
    var data = yield call(() => callAPI(`api/users/me`, 'GET', null, 'YmVTTFJad01TRHlKcWNHM25obS9Ja3JFNHdvdVlENDNIM2I4TGNmZEVlRnFNd2wwaHpvTmc3UHB3M3E0a2lsaw=='));
    yield put({ type: ProfileActions.FETCH_PROFILE_SUCCESSED, payload: data.data })
  } catch (error) {
    yield put({ type: ProfileActions.FETCH_PROFILE_FAILURE, payload: error })
  }
}


export function* Register(action) {
  try {
    const data = yield call(() => callAPI(`api/users`, 'POST', action.payload))
    yield put({ type: REGISTER_SUCCESSED, payload: data.data });
  } catch (error) {

    yield put({ type: REGISTER_FAILED, payload: error.response.data.Message });
  }
}
export function* Login(action) {

  try {
    const data = yield call(() => callAPI(`api/token`, 'POST', action.payload))
    yield put({ type: LOGIN_SUCCESSED, payload: data.data });
  } catch (error) {

    yield put({ type: LOGIN_FAILED, payload: error.response.data.Message });
  }
}

export function* getCart(action) {
  const { basketId, userId, token } = action.payload;
  var string = `api/basket/${basketId}?userId=${userId}`;
  console.log("String: ", string);

  try {
    const data = yield call(() => callAPI(`api/basket/${basketId}?userId=${userId}`, 'GET', null, token));
    console.log("Data get cart: ", data);

    yield put({ type: GET_CART_SUCCESSED, payload: data.data.Data.Items });
  } catch (error) {
    console.log("Error get cart", error);

  }
}

export function* Logout() {

  yield put({ type: LOGOUT_SUCCESSED });
}

export const watchUserSaga = [
  takeLatest(REGISTER, Register),
  takeLatest(LOGIN, Login),
  takeLatest(LOGOUT, Logout),
  takeLatest(GET_CART, getCart),
]
