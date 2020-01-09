import callAPI from '../../utils/callAPI'
import { put, takeLatest, call } from 'redux-saga/effects'
import * as ProfileActions from './actions'

export function* fetchProfile() {
  try {
    var data = yield call(() => callAPI(`api/users/me`, 'GET', null, 'YmVTTFJad01TRHlKcWNHM25obS9Ja3JFNHdvdVlENDNIM2I4TGNmZEVlRnFNd2wwaHpvTmc3UHB3M3E0a2lsaw=='));
    yield put({ type: ProfileActions.FETCH_PROFILE_SUCCESSED, payload: data.data })
  } catch (error) {
    yield put({ type: ProfileActions.FETCH_PROFILE_FAILURE, payload: error })
    console.log("Error: ", error);
  }
}

export const watchAuthsSaga = [
  takeLatest('FETCH_PROFILE', fetchProfile),
];
