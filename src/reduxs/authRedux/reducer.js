import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_FAILURE
} from "./action"

const initState = {
  data: {},
  isLoading: false
}


const authReducer = (state = initState, action) => {
  switch (action.type) {
    case PROFILE:
      return Object.assign({}, state, { data: action.payload })
    case PROFILE_SUCCESS:
      return Object.assign({}, state, { data: action.payload })
    case PROFILE_FAILURE:
      return Object.assign({}, state, { data: action.payload })
    default: return state
  }
}

export default authReducer;