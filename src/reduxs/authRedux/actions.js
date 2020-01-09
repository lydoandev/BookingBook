export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const getProfile = data => {
  return ({ type: FETCH_PROFILE, payload: data });
};

export const getProfileSuccess = response => {
  return { type: FETCH_PROFILE_SUCCESS, payload: response };
};

export const getProfileFailure = error => {
  return { type: FETCH_PROFILE_FAILURE, payload: error };
};
