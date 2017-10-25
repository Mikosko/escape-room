import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as Posts } from './Posts';

export default combineReducers<AppState>({
  router: routerReducer,
  posts: Posts,
});
