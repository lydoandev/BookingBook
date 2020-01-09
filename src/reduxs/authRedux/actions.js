export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const REGISTER_SUCCESSED = "REGISTER_SUCCESSED"
export const REGISTER_FAILED = "REGISTER_FAILED"

export const LOGIN_SUCCESSED = "LOGIN_SUCCESSED"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOGOUT_SUCCESSED = "LOGOUT_SUCCESSED"

export const LOGOUT = "LOGOUT"

export const login = (user) => {
  return { type: LOGIN, payload: user }
}

export const register = (user) => {
  return { type: REGISTER, payload: user }
}

export const logout = () => {
  return { type: LOGOUT }
}

export const getProfile = data => {
  return ({ type: PROFILE, payload: data });
};

export const fetchProfileSuccess = response => {
  return { type: FETCH_PROFILE_SUCCESS, payload: response };
};

export const fetchProfileFailure = error => {
  return { type: FETCH_PROFILE_FAILURE, payload: error };
};
