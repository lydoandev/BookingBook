export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const fetchProfile = () => {
  return ({ type: FETCH_PROFILE });
};

export const fetchProfileSuccess = response => {
  return { type: FETCH_PROFILE_SUCCESS, payload: response };
};

export const fetchProfileFailure = error => {
  return { type: FETCH_PROFILE_FAILURE, payload: error };
};
