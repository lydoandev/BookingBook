import {combineReducers} from 'redux';

import {bookReducer} from './bookRedux/reducer';
import {categoryReducer} from './categoryRedux/reducer';

const reducers = combineReducers({
  bookReducer,
  categoryReducer,
});

export default reducers;
