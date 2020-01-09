import callAPI from '../../utils/callAPI'
import { put, takeLatest, call } from 'redux-saga/effects'
import * as ProfileActions from './actions'

export function* fetchProfile(action) {
  try {
    var data = yield call(() => callAPI(`/api/users/${'xbF9u1Sq'}`, 'GET'));
    console.log('DATA FETCH:', data);
    yield put({ type: ProfileActions.PROFILE_SUCCESSED, payload: data.data })
  } catch (error) {
    yield put({ type: ProfileActions.PROFILE_FAILURE, payload: data.data })
    console.log("Error: ", error);
  }
}

export const authSaga = [
  takeLatest('FETCH_PROFILE', fetchProfile)
];
