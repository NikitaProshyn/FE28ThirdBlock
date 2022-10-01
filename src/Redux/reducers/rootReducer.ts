import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './themeReducer';
import postReducers from './postsReducers';
import authReducer from './authReducer';

const reducer = combineReducers({
   themeReducer,
   postReducers,
   authReducer,
});

export default reducer;
