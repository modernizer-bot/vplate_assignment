import { combineReducers } from 'redux';

import tweet from '../features/tweet/slices';
import modal from '../features/modal/slices';

const rootReducer = combineReducers({
  tweet,
  modal,
});

export default rootReducer;
