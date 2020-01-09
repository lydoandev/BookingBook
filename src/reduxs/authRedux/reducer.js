import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from "./actions"

const initState = {
  data: [],
  loading: false,
}


export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return Object.assign({}, state, { loading: true })
    case FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, { data: action.payload, loading: false })
    case FETCH_PROFILE_FAILURE:
      return Object.assign({}, state, { data: action.payload, loading: false })
    default: return state
  }
}

