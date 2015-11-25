'use strict';

import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import groceries from './groceries/reducers';

// Export your root reducer
export default combineReducers({
	router: routerStateReducer,
	groceries
});