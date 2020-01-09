import * as Type from "./actions"

const initState = {
  data: {},
  loading: false,
  isAuthenticated: false,
}


export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Type.LOGIN_SUCCESSED:
      return Object.assign({}, state, {
        logingIn: false,
        isAuthenticated: true,
        user: action.payload.data,
        loading: false,
        error: ''
      });
    case Type.LOGIN_FAILED:
      return Object.assign({}, state, {
        logingIn: false,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      });
    case Type.REGISTER:
      return Object.assign({}, state, {
        loading: true,
        signingUp: false,
        error: ''
      });
    case Type.REGISTER_SUCCESSED:
      return Object.assign({}, state, {
        loading: false,
        isAuthenticated: true,
        user: action.payload.data,
        signingUp: false,
        error: ''
      });
    case Type.REGISTER_FAILED:
      return Object.assign({}, state, {
        loading: false,
        isAuthenticated: false,
        signingUp: false,
        error: action.payload
      });
    case Type.LOGOUT:
      return Object.assign({}, state, {
        loading: true
      })
    case Type.LOGOUT_SUCCESSED:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loading: false,
        user: {},
        error: ''
      })
    default: return state
  }
}
