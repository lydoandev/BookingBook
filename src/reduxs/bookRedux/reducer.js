import * as type from './actions'

var initialState = {
  books: [],
  loading: false,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_BOOKS:
      return Object.assign({}, state, { loading: true })
    case type.FETCH_BOOKS_SUCCESSED:
      return Object.assign({}, state, { loading: false, books: action.payload })
    default: return state;
  }
}

