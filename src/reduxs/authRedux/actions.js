export const PROFILE = 'PROFILE';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';

export const getProfile = data => {
  return ({ type: PROFILE, payload: data });
};

export const getProfileSuccess = response => {
  return { type: PROFILE_SUCCESS, payload: response };
};

export const getProfileFailure = error => {
  return { type: PROFILE_FAILURE, payload: error };
};
