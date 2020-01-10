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

export const GET_CART = "GET_CART"
export const GET_CART_SUCCESSED = "GET_CART_SUCCESSED"

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

export const getCart = data => {
  return ({ type: GET_CART, payload: data });
};

