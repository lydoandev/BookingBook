import callAPI from '../../utils/callAPI'
import { put, takeLatest, call } from 'redux-saga/effects'

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
  UPDATE_PROFILE_SUCCESSED,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE
} from './actions';

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
  console.log("String: ", token);

  try {
    const data = yield call(() => callAPI(`api/basket/${basketId}?userId=${userId}`, 'GET', null, token));
    console.log("Data: ", data);

    yield put({ type: GET_CART_SUCCESSED, payload: data.data.Basket.Items });
  } catch (error) {
    console.log("error", error.response);

  }
}

export function* Logout() {

  yield put({ type: LOGOUT_SUCCESSED });
}

export function* updateProfile(action) {
  const { idUser, token } = action.payload;
  try {
    const data = yield call(() => callAPI(`api/users/${idUser}/updateprofile`, 'PUT', action.payload, token));
    yield put({ type: UPDATE_PROFILE_SUCCESSED, payload: data.data });
  } catch (error) {

    yield put({ type: UPDATE_PROFILE_FAILED, payload: error.response });
  }
}

export const watchUserSaga = [
  takeLatest(REGISTER, Register),
  takeLatest(LOGIN, Login),
  takeLatest(LOGOUT, Logout),
  takeLatest(GET_CART, getCart),
  takeLatest(UPDATE_PROFILE, updateProfile)
]
