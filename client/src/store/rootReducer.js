import { combineReducers } from 'redux';

import tweet from '../features/tweet/slices.js';
import modal from '../features/modal/slices.js';

const rootReducer = combineReducers({
  tweet,
  modal,
});

export default rootReducer;
