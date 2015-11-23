'use strict';

// Creates FSA compliant actions
// https://github.com/acdlite/flux-standard-action
import {handleActions} from 'redux-actions';
import Immutable from 'seamless-immutable';

import * as ActionTypes from '../actionTypes';

let initialState = Immutable([]);

// I wanted to use handleAction but there was an open issue
// with its initialization
// https://github.com/acdlite/redux-actions/issues/23
export default handleActions({
	[ActionTypes.ADD_GROCERY]: {
		next(oldState, action) {
			// TODO: Use seamless-immutable
			let {payload} = action;

			return [
				{
					name: payload.name,
					quantity: payload.quantity || 1
				}
			].concat(oldState);
		},
		throw(oldState, action) {
			// Decide whats the best way to handle an error
			// based on your business use case
			return action.payload;
		}
	}
}, initialState);