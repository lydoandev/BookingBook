import * as type from './actions'

var initialState = {
  books: [],
  booksHome: [],
  relatedBooks: [],
  loading: false,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_BOOKS:
      return Object.assign({}, state, { loading: true })
    case type.FETCH_CMS_HOME:
      return Object.assign({}, state, { loading: true })
    case type.FETCH_CMS_HOME_SUCCESSED:

      return Object.assign({}, state, { loading: false, booksHome: action.payload })
    default: return state;
  }
}

