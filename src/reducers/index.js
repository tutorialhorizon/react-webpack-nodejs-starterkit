'use strict';

import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import groceries from './groceries';

// Export your root reducer
export const rootReducer = combineReducers({
	router: routerStateReducer,
	groceries
});