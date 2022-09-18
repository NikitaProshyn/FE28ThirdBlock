import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './themeReducer';
import postReducers from './postReducers';

const reducer = combineReducers({
   themeReducer,
   postReducers,
});

export default reducer;
