import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE
} from "./action"

const initState = {
  data: {},
  isLoading: false
}


const authReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return Object.assign({}, state, { data: action.payload })
    case FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, { data: action.payload })
    case FETCH_PROFILE_FAILURE:
      return Object.assign({}, state, { data: action.payload })
    default: return state
  }
}

export default authReducer;