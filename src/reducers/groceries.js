'use strict';

// Creates FSA compliant actions
// https://github.com/acdlite/flux-standard-action
import {handleActions} from 'redux-actions';

import * as ActionTypes from '../actionTypes';

let initialState = [];


// I wanted to use handleAction but there was an open issue
// with its initialization
// https://github.com/acdlite/redux-actions/issues/23
export default handleActions({
	[ActionTypes.ADD_GROCERY]: {
		next(state, action) {
			// TODO: Use seamless-immutable
			let {payload} = action;

			return [
				{
					name: payload.name,
					quantity: payload.quantity || 1
				}
			].concat(state);
		},
		throw(state, action) {
			// Decide whats the best way to store this data
			// this based on your business use case
			return action.payload;
		}
	}
}, initialState);