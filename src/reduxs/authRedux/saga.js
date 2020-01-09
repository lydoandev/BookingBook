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
} from './actions';

export function* getProfile(action) {
  try {
    var data = yield call(() => callAPI(`/api/users/${'xbF9u1Sq'}`, 'GET'));
    yield put({ type: types.PROFILE_SUCCESSED, payload: data.data })
  } catch (error) {
    yield put({})
    console.log("Error: ", error);
  }
}


export function* Register(action) {
  console.log("user: ", action.payload);
  try {
    const data = yield call(() => callAPI(`api/users`, 'POST', action.payload))
    yield put({ type: REGISTER_SUCCESSED, payload: data.data.Data });
  } catch (error) {

    yield put({ type: REGISTER_FAILED, payload: error.response.data.Message });
  }
}
export function* Login(action) {

  try {
    const data = yield call(() => callAPI(`api/token`, 'POST', action.payload))
    yield put({ type: LOGIN_SUCCESSED, payload: data.data.Data });
  } catch (error) {
    console.log("Error: ", error);

    yield put({ type: LOGIN_FAILED, payload: error?.response?.data?.message || error?.response });
  }
}

export function* Logout() {

  yield put({ type: LOGOUT_SUCCESSED });
}

export const watchUserSaga = [
  takeLatest(REGISTER, Register),
  takeLatest(LOGIN, Login),
  takeLatest(LOGOUT, Logout)
]