'use strict';

let initialState = [];

import * as ActionTypes from '../actionTypes';

// TODO: Use seamless-immutable

// Function that returns a list of grocery items
export default function groceries(state = initialState, action) {
	switch(action.type) {
		case ActionTypes.ADD_GROCERY:
			return [
				{
					name: action.payload.name,
					quantity: action.payload.quantity || 1
				}
			].concat(state);
		default:
			return state;
	}
}