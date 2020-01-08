import callAPI from '../../utils/callAPI'
import { put, takeLatest, call } from 'redux-saga/effects'
import * as ProfileActions from './actions'

export function* getProfile(action) {
  try {
    var data = yield call(() => callAPI(`/api/users/${'xbF9u1Sq'}`, 'GET'));
    yield put({ type: types.PROFILE_SUCCESSED, payload: data.data })
  } catch (error) {
    yield put({})
    console.log("Error: ", error);
  }
}